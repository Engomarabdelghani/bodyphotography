import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

/**
 * Contact Form component
 * Features: form validation, smooth animations, EmailJS integration, enhanced UX
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init('KJEm0RWHdjMb1ui9A');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Send email via EmailJS
      const templateParams = {
        to_email: 'bodysameh877@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_62epnik',
        'template_de8aino',
        templateParams
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    } catch (err) {
      console.error('Email sending error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Photography Inquiry' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12"
    >
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mb-8 p-5 rounded-xl bg-accent-light border border-accent/30 flex items-start gap-4"
        >
          <FiCheckCircle className="text-primary flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-primary mb-1">Message Sent!</h3>
            <p className="text-gray-300 text-sm">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mb-8 p-5 rounded-xl bg-accent-light border border-accent/30 flex items-start gap-4"
        >
          <FiAlertCircle className="text-accent flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-accent mb-1">Error</h3>
            <p className="text-gray-300 text-sm">{error}</p>
          </div>
        </motion.div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {formFields.map((field, idx) => (
          <motion.div
            key={field.name}
            variants={itemVariants}
            className={field.name === 'subject' ? 'md:col-span-2' : ''}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-semibold text-gray-200 mb-3 transition-colors"
            >
              {field.label}
              <span className="text-accent ml-1">*</span>
            </label>
            <motion.input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 bg-secondary-light border border-white/10 rounded-xl text-white placeholder-gray-500 transition-all focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder={field.placeholder}
              disabled={isLoading}
            />
          </motion.div>
        ))}
      </div>

      {/* Message Field */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-200 mb-3"
        >
          Message
          <span className="text-accent ml-1">*</span>
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows="6"
          className="w-full px-4 py-3 bg-secondary-light border border-white/10 rounded-xl text-white placeholder-gray-500 resize-none transition-all focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          placeholder="Tell me about your project, vision, and requirements..."
          disabled={isLoading}
        />
      </motion.div>

      {/* Character Count */}
      <motion.p
        variants={itemVariants}
        className="text-xs text-gray-500 mt-2 text-right"
      >
        {formData.message.length} / 1000 characters
      </motion.p>

      {/* Submit Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: isLoading ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="w-full mt-8 btn-gradient disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>

      {/* Privacy Notice */}
      <motion.p
        variants={itemVariants}
        className="text-xs text-gray-500 text-center mt-6"
      >
        We respect your privacy. Your information will never be shared.
      </motion.p>
    </motion.form>
  );
};

export default ContactForm;
