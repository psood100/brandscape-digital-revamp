import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-ref.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Email sending function
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) => {
  try {
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company}
      Service Interest: ${formData.service}
      
      Message:
      ${formData.message}
    `;

    // Store the contact form submission in Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;

    // In a real implementation, you would also call a Supabase Edge Function
    // or use a service like EmailJS to actually send the email
    console.log('Contact form submitted successfully');
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};