import React, { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'
const Contact = () => {
   const form = useRef();
   const[isSent , setIsSent] = useState(false);

  const sendEmail =(e) =>{
    e.preventDefault();


    emailjs.sendForm(
      "service_8tcg6lk",
      "template_97l7bpo",
      form.current,
      "P7NkohXHBp0wy2pfM"
    ).then(
      ()=>{
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent Successfully",{
          position:"top-right",
          autoClose: 3000,
          hideProgressBar:false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable:true,
          theme:'dark'
        });
      },
      (error) => {
        toast.error("failed to send your Message, Try again ",{
          position:"top-right",
          autoClose: 3000,
          hideProgressBar:false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable:true,
          theme:'dark'
        })
        
      }
    )
  }
  return (

    <section className='flex flex-col items-center  justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    id="contact">

<ToastContainer/>

<div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-48 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">I'd love to hear from you -- reach out for any opportunities or questions! </p>
        </div>

      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center '>Connect With Me</h3>
        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name='user_email' placeholder='email' required
          className='w-full p-3 rounded-mg bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500    '/>
          <input type="text" name='user_name' placeholder='name' required
          className='w-full p-3 rounded-mg bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500   '/>
          <input type="text" name='Subject' placeholder='subject' required
          className='w-full p-3 rounded-mg bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500    '/>
          <textarea name='message' placeholder='message' rows='5'
          className='w-full p-3 rounded-mg bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500    '
          ></textarea>

          <button type='submit'
          className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
