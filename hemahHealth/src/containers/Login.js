import React, { useState,useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import axios from 'axios';
// import "./Login.css";
import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';


export default function Login() {
  const [userName, set_name] = useState('')
  const [userPassword, set_password] = useState('')
  const [userEmail, set_email] = useState('');

  const [isLogin, setisLogin] = useState(true);

//   useEffect(() => {



// }, []);
  function validateForm() {
    console.log(userName,userPassword,userEmail)
  console.log( userPassword &&userEmail  );
  if(  userPassword  && userEmail)
     return true ;
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    // state  false and form return true Login ; 
    if ( validateForm()){
      alert('تم تسجيل بنجاح');
    window.location.href='/Home'
     const post =()=>{

      const userData={
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
            // setisLogin(false) onClick={event =>  window.location.href='/your-href'} #update
            return user;
          
          } else {
            alert('Something went wrong while creating account')
          }
       })
  }
  // post() #update
  //  if end !isLogin && validateForm
}
alert('الرجاء تاكد من صحة المدخلات ');
  }
  return (
    <>
<Form>  <h1>Log in </h1>
        <Form.Group controlId="email" className='dv_email'>
          <Form.Label>    Email      </Form.Label>
          <Form.Control
          className='inputs'
          placeholder="omar@gmail.com"
            type="email"
            value={userEmail}
            autoFocus
            onChange={(e) =>{
               let em=e.target.value;
                set_email(em)}}
          />
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>   Password   </Form.Label>
          <Form.Control
             className='inputs'
            type="password"
            value={userPassword}
            onChange={(e) =>{ let ps=e.target.value; set_password(ps)}}
          />
        </Form.Group>
      
        <Button  type="submit"  className='submit' onClick={handleSubmit} color="primary">
          Login
        </Button>

      </Form>
    </>
  );
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))