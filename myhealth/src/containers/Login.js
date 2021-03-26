import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // state false and form return true Login ; 
    !isLogin && validateForm()?alert('تم تسجيل بنجاح'):alert('الرجاء تاكد من صحة المدخلات ');
  }

  return (
    <div className="Login" >
  
      <Form onSubmit={handleSubmit}>  
      <h1>تسجيل الدخول</h1>
        <Form.Group size="lg" controlId="email" className='dv_email'>
          <Form.Label>    Email      </Form.Label>
          <Form.Control
          className='inputs'
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>   Password   </Form.Label>
          <Form.Control
             className='inputs'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} className='submit' onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
}

