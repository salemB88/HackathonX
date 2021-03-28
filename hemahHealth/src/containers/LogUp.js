import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';
import "./Login.css";
// import Login from "./Login";
// import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';


export default function LogUp() {
  const [userName, set_name] = useState('')
  const [userPassword, set_password] = useState('')
  const [userEmail, set_email] = useState('');

  const [isLogin, setisLogin] = useState(false);
// all complate return true .
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
     setisLogin(!isLogin)
      // post 
     axios.post('http://127.0.0.1:8000/api/signup', userData)
       .then(res => {
         let responseData = res.data
          if (responseData.status == 'success') {
            const user = responseData.user; 
            console.log(user); 
            // replace screen
           // #update    setisLogin(true)
            return user;
          
          } else {
            alert('الرجاء تاكد من صحة المدخلات ');
          }
       })
  }
  post()
  //  if end !isLogin && validateForm
}

  }

  return (
   <div className="Login" >
   {/* { !isLogin ? */}
   <Form>  
      <h1 color="primary">sign up</h1>
      <Form.Group size="lg" controlId="name" className='dv_email'>
          <Form.Label>    First Name      </Form.Label>
          <Form.Control
          className='inputs'
            autoFocus
            placeholder='Omar'
            type="name"
            value={userName}
            onChange={(e) =>{
               let nm=e.target.value;
                set_name(nm)}}
          />
        </Form.Group>
        <Form.Group  controlId="email" className='dv_email'>
          <Form.Label>    Email      </Form.Label>
          <Form.Control
          className='inputs'
          placeholder='omar@gmail.com'
            type="email"
            value={userEmail}
            onChange={(e) =>{
               let em=e.target.value;
                set_email(em)}}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>   Password   </Form.Label>
          <Form.Control
             className='inputs'
             placeholder='***'
            type="password"
            value={userPassword}
            onChange={(e) =>{ let ps=e.target.value; set_password(ps)}}
          />
        </Form.Group>
     
        <Button   type="submit"  className='submit' onClick={handleSubmit} variant="outlined" color="primary">
          Sign Up 
        </Button>
      </Form>
      <div className="switcher" onClick={()=>{setisLogin(!isLogin); }}><h4 >{!isLogin ? 'Sin in': 'Sin up'}</h4>  </div>
      </div>
  );
}

