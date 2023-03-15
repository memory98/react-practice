import React, { useState } from 'react';
import styles from './assets/css/RegisterForm.css';
const RegisterForm = () => {
  const [emailForm, setEmailForm] = useState({
    no:null,
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange= e => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  }

  const insertEmail = async() => {
    try{
      const response = await fetch('/api/insert', {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailForm)
      });
  
      if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);
      }
      
      setEmailForm([json.data, ...tasks]);
  } catch(err) {
      console.log(err.message);
    }
  }

  const onSubmitEmail = e => {
      insertEmail();
  }
    return (
        <form className={styles.RegisterForm} onSubmit={onSubmitEmail}>
        <input type='text' name='firstName' placeholder='성' value={emailForm.firstName} onChange={handleChange} className={styles.InputFirstName} />
        <input type='text' name='lastName' placeholder='이름' value={emailForm.lastName} onChange={handleChange} className={styles.InputLastName} />
        <input type='text' name='email' placeholder='이메일' value={emailForm.email} onChange={handleChange} className={styles.InputEmail} />
        <input type='submit' value='등록' />
      </form> 
    );
};

export default RegisterForm;