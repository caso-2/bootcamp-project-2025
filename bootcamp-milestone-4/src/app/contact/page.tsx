'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const templateParams = {
        name: name,
        email: email,
        message: message,
    };
 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            setError("Please fill out all fields.");
            return;
        }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Missing EmailJS environment variables");
    }

    emailjs.send(
      serviceId, templateId,
      templateParams,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          alert('Email sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send email.');
          console.log('FAILED...', error.text);
        }
      );
  };
    

    return(
    <div>
        <main>
        <h1 className="page-title"></h1>

            <div className="card">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value); setError("");}
}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value); setError("");}}/>

                    <label htmlFor="Message">Message:</label>
                    <textarea name="Message" id="textarea" value={message} onChange={(e) => {setMessage(e.target.value); setError("");}}></textarea>

                    <button type="submit" className="submit-button">
                        <Image src="/images/paper-plane.png" alt="paper plane icon" width={20} height={20} />
                        Submit
                    </button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            </div>
            </main>
    </div>
    )
    

}
