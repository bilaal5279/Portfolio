import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // import an icon for the confirmation

const Contact = () => {
  // create a state variable to store the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // create a state variable to store the form status
  const [formStatus, setFormStatus] = useState('pending'); // pending, sending or sent

  // create a function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setFormStatus('sending'); // update the form status to sending
    // send email using EmailJS service, template and user ID
    emailjs
      .send(
        'service_kr58sww',
        'template_9hrhb59',
        formData,
        'lPEwTeN1eeOE0W7Sp'
      )
      .then(
        (result) => {
          console.log(result.text); // log success message
          setFormStatus('sent'); // update the form status to sent
        },
        (error) => {
          console.log(error.text); // log error message
          setFormStatus('pending'); // update the form status to pending
        }
      );
    // reset the form data
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gradientStyle = {
    background:
      'linear-gradient(to right, #020202, #040c16, #020202)',
    color: '#fff',
  };

  return (
    <div id="contact" className=' text-white p-8 flex items-center justify-center min-h-screen' style={gradientStyle}> 
      <div className='max-w-4xl w-full flex flex-wrap mx-auto my-16'> 

        {formStatus === 'sent' ? (
          <div className='w-full text-center'>
            <div className="flex justify-center items-center">
              <AiOutlineCheckCircle className="text-9xl text-green-500" />
            </div>
            <h2 className='text-4xl font-bold mb-4'>Thank you!</h2>
            <p className='text-xl mb-8'>
              Your message has been sent successfully. I will get back to you as
              soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className='w-full lg:w-1/2 lg:pr-8 mt-10 font-sans'> 
              <h2 className='text-6xl font-bold mb-4 mt-15 font-sans'>Let's Chat.</h2>
              <h2 className='text-2xl mb-8 font-bold'>
                Tell me about your project.
              </h2>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='form-group'>
                  <label htmlFor='name' className='block'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full p-4 border-none rounded shadow-inner bg-gray-800 text-white hover:bg-gray-700 transition duration-300 ease-in-out' // add some padding and hover effect
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='block'>
                    Email         </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full p-4 border-none rounded shadow-inner bg-gray-800 text-white hover:bg-gray-700 transition duration-300 ease-in-out' // add some padding and hover effect
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='message' className='block'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full p-4 border-none rounded shadow-inner bg-gray-800 text-white hover:bg-gray-700 transition duration-300 ease-in-out' // add some padding and hover effect
                  />
                </div>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  disabled={formStatus === 'sending'} // disable the button when sending
                  className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                    formStatus === 'sending' ? 'cursor-not-allowed' : '' // change the cursor when sending
                  }`}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send'} 
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;