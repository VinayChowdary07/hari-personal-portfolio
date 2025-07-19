
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Contact email function called');
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();
    
    console.log('Received contact form data:', { name, email, subject });

    // Send email to you (the recipient)
    const emailToYou = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["vinayjustin322@gmail.com"],
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio contact form.</em></p>
      `,
    });

    // Send confirmation email to the sender
    const confirmationEmail = await resend.emails.send({
      from: "Vinay <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <h2>Thank you for your message, ${name}!</h2>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Vinay Saran</p>
      `,
    });

    console.log("Emails sent successfully:", { emailToYou, confirmationEmail });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
