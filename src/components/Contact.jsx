import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('pending'); // pending, sending, sent, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs
      .send(
        'service_kr58sww',
        'template_9hrhb59',
        formData,
        'lPEwTeN1eeOE0W7Sp'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('sent');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setFormStatus('error');
          setErrorMessage('Something went wrong. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'United Kingdom'
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      details: '+44 7979 468826'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'bilaalishtiaq@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Feel free to contact me for any project inquiries or professional opportunities.
            I'm always open to discussing new ideas and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 mt-1 text-xl mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-gray-800 font-bold text-xl mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bilaal-ishtiaq-3a7b11250/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/bilaal5279"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              {formStatus === 'sent' ? (
                <div className="text-center h-full flex flex-col justify-center items-center py-12">
                  <AiOutlineCheckCircle className="text-green-500 text-6xl mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormStatus('pending')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Send Me a Message
                  </h3>
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                      {errorMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Hello, I'd like to discuss a project opportunity..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className={`w-full sm:w-auto bg-blue-600 text-white py-3 px-8 rounded-md font-medium text-base transition-all duration-300 ${
                          formStatus === 'sending'
                            ? 'opacity-70 cursor-not-allowed'
                            : 'hover:bg-blue-700'
                        }`}
                      >
                        {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;