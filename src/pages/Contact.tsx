import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Mail, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Sakinaka, Mumbai, India' },
    { icon: Mail, label: 'Email', value: 'khanmohdumair752@gmail.com', href: 'mailto:khanmohdumair752@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9792098768', href: 'tel:+919792098768' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/mohdumair' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mohdumair' },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="section-container">
          {/* Header */}
          <AnimatedSection>
            <SectionTitle
              title="Get In Touch"
              subtitle="I'm interested in data science opportunities where I can contribute, learn, and grow. Feel free to reach out if you have any questions or want to work together!"
              centered
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h3 className="text-xl font-bold font-heading mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground block">{info.label}</span>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h3 className="text-xl font-bold font-heading mb-6">Connect With Me</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary w-full justify-center text-lg py-4"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <h3 className="text-xl font-bold font-heading mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
