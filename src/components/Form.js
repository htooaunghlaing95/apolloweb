import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import { toast } from 'react-toastify';

const Container = styled.div`
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      font-size: 16px;
      gap: 3rem;

      @media (max-width: 64em){
        width: 90%;
        gap: 1rem;
      }
  
      input {
        width: 100%;
        height: 45px;
        padding: 15px;
        outline: none;
        border: 2px solid ${props => props.theme.border};
        border-radius: 15px;
        background: #0d0d0d;
        color: #fff;
  
        &:focus {
          border-color: #fff;
        }

        @media (max-width: 64em){
          border: 1px solid ${props => props.theme.border};
        }
      }
  
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 150px;
        min-height: 150px;
        padding: 15px;
        outline: none;
        border: 2px solid ${props => props.theme.border};
        border-radius: 15px;
        background: #0d0d0d;
        color: #fff;
  
        &:focus {
          border-color: #fff;
        }

        @media (max-width: 64em){
          border: 1px solid ${props => props.theme.border};
        }
      }
  
      label {
        margin-top: 1rem;
      }
  
      input[type="submit"] {
        margin-top: 1rem;
        display: flex;
        font-size: ${props => props.theme.fontlg};
        color: #000;
        background: #C6E7FF;
        width: 10rem;
        height: 3rem;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.1s;
        border: none;

        &:hover{
          transform: scale(1.1);
        } 

        @media (max-width: 64em){
          padding: 0.5rem;
          width: 8rem;
          font-size: ${props => props.theme.fontmd};
        }
      }
    }
`

const Form = () => {

    const form = useRef();

    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.user_email || !formData.message) {
        toast.error('Please fill in all fields');
        return;
        }

        emailjs
        .sendForm('service_gma91be', 'template_hiymyr1', form.current, {
            publicKey: 'yBLVMmcVF2-eVgz68',
        })
        .then(
            () => {
            setFormData({ user_name: '', user_email: '', message: '' });
            toast.success('Sent Message Success!')
            },
            (error) => {
            toast.error(error.text)
            console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              placeholder='Name'
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder='Email'
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <textarea 
              name="message" 
              placeholder='Message'
              value={formData.message}
              onChange={handleInputChange}
            />

            <input 
              data-aos="zoom-in-right"
              data-aos-duration="2000"
              type="submit" 
              value="Send" 
            />
      </form>
    </Container>
  );
};

export default Form;