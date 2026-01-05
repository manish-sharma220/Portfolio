// Contact.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Github, Mail, Phone, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();
  
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:sharmamanishkumar558@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form after submission
      reset();
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/manish-kumar-sharma-a29312288',
      href: 'https://www.linkedin.com/in/manish-kumar-sharma-a29312288/',
      color: 'text-blue-600'
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      value: 'github.com/manish-sharma220',
      href: 'https://github.com/manish-sharma220',
      color: 'text-gray-800'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: 'sharmamanishkumar558@gmail.com',
      href: 'mailto:sharmamanishkumar558@gmail.com',
      color: 'text-red-500'
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Phone', 
      value: '+91 6372676994',
      href: 'tel:+916372676994',
      color: 'text-green-600'
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: 'Location', 
      value: 'Bhopal, India',
      href: null,
      color: 'text-orange-500'
    }
  ];

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 border rounded-lg transition-all duration-300
    ${errors[fieldName] ? 'border-red-400 bg-red-50' : activeField === fieldName ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-300'}
    focus:outline-none
  `;

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-white to-blue-50">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm currently available for new projects and open to technical internships. 
            Let's collaborate on something amazing together!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-full ${item.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className={`text-base font-medium ${item.color} hover:underline`}
                          target={item.label !== 'Phone' && item.label !== 'Email' ? '_blank' : ''}
                          rel="noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-base font-medium ${item.color}`}>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-base font-medium text-slate-700 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/manish-kumar-sharma-a29312288/', color: 'bg-blue-600' },
                    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/manish-sharma220', color: 'bg-gray-800' },
                    { icon: <Mail className="w-5 h-5" />, href: 'mailto:sharmamanishkumar558@gmail.com', color: 'bg-red-500' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-80 transition-opacity`}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Send a Message</h3>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p>Thanks for your message! I'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <p>Oops! Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className={inputClasses('name')}
                      placeholder="John Doe"
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                    />
                    {errors.name && (
                      <motion.p 
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={inputClasses('email')}
                      placeholder="johndoe@example.com"
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { 
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <motion.p 
                        className="mt-1 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={inputClasses('subject')}
                    placeholder="Project Inquiry"
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    {...register('subject', { 
                      required: 'Subject is required',
                      minLength: { value: 5, message: 'Subject must be at least 5 characters' }
                    })}
                  />
                  {errors.subject && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className={inputClasses('message') + ' resize-none'}
                    placeholder="I'd like to discuss a potential project..."
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                  ></textarea>
                  {errors.message && (
                    <motion.p 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-medium text-slate-700 mb-2">Thanks For Your Valuable Time</h3>
          <p className="text-slate-600">— Manish Kumar Sharma</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;