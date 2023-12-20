import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'

export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uxs5n4o', 'template_iwuntil', form.current, 'FmOIszszd4CiYs9ob')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <div className='App'>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br></br>
      <label>Email</label>
      <input type="email" name="user_email" />
      <br></br>
      <label>Message</label>
      <textarea name="message" />
      <br></br>
      <input type="submit" value="Send" />
    </form>
   </div>
  );
};
export default App