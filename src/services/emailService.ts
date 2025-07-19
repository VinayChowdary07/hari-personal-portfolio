
import { supabase } from '@/integrations/supabase/client';
import { ContactFormData } from '@/components/ContactForm';

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  console.log('Sending email with data:', formData);
  
  try {
    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error(error.message || 'Failed to send email');
    }

    if (!data?.success) {
      console.error('Email service error:', data);
      throw new Error(data?.error || 'Failed to send email');
    }

    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
