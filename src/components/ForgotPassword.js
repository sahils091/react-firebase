import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState(false);
  


  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setMessage("")
      setError("");
      setLoading(true);
     
       await resetPassword(emailRef.current.value);
       setMessage('Check Your Inbox for Further Instructions ')
     
    } catch {
      setError("Failed to Reset Password");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}


          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
           
           
            <Button type="submit" className="w-100" disabled={loading}>
      Reset Password
            </Button>
            <div className="w-100 text-center mt-3">  <Link to="/login">Log In</Link></div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Need an Account? <Link to="/signup">Sign Up</Link>  </div>
    </>
  );
};

export default ForgotPassword;