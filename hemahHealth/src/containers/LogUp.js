import React, { useState } from "react";
import { Button,Form } from 'react-bootstrap';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';
import "./Login.css";
import Login from "./Login";

export default function LogUp() {
  const [userName, set_name] = useState('')
  const [userPassword, set_password] = useState('')
  const [userEmail, set_email] = useState('');

  const [isLogin, setisLogin] = useState(false);

  function validateForm() {
    console.log(userName,userPassword,userEmail)
  console.log(userName  > 0 && userPassword  > 0 &&userEmail > 0 )
    return  userName && userPassword && userEmail
  }

  function handleSubmit(event) {
    event.preventDefault();
    // state  false and form return true Login ; 
    if (!isLogin && validateForm()){
      alert('تم تسجيل بنجاح');
     
     const post =()=>{

      const userData={
        username:userName,
        email:userEmail,
        password:userPassword
      };
    
      // post 
     axios.post('http://127.0.0.1:8000/api/signup', userData)
       .then(res => {
         let responseData = res.data
          if (responseData.status == 'success') {
            const user = responseData.user; 
            console.log(user); 
            // replace screen
            setisLogin(true)
            return user;
          
          } else {
            alert('Something went wrong while creating account')
          }
       })
  }
  post()
  //  if end !isLogin && validateForm
}
alert('الرجاء تاكد من صحة المدخلات ');
  }

  return (
   <div className="Login" >
  
     { isLogin ?<Form>  
      <h1>sign up</h1>
      <Form.Group size="lg" controlId="name" className='dv_email'>
          <Form.Label>    First Name      </Form.Label>
          <Form.Control
          className='inputs'
            autoFocus
            type="name"
            value={userName}
            onChange={(e) =>{
               let nm=e.target.value;
                set_name(nm)}}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email" className='dv_email'>
          <Form.Label>    Email      </Form.Label>
          <Form.Control
          className='inputs'
            type="email"
            value={userEmail}
            onChange={(e) =>{
               let em=e.target.value;
                set_email(em)}}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>   Password   </Form.Label>
          <Form.Control
             className='inputs'
            type="password"
            value={userPassword}
            onChange={(e) =>{ let ps=e.target.value; set_password(ps)}}
          />
        </Form.Group>
        <h1>Here: {userName}</h1>
        <Button block size="lg" type="submit"  className='submit' onClick={handleSubmit}>
          Login
        </Button>
      </Form>:<Login/>}
    </div>
  );
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))