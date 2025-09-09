"use client"
import React from 'react'
import { useRouter } from 'next/navigation';


const Loginpage = () => {
  const route = useRouter();
  const [formDetails, setFormDetails] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({ email: "", password: "" });

  
  // form validation
  const validateData = () => {
    const {email, password} = formDetails;
    let newErrors = { email: "", password: "" };
    //valide email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
      newErrors.email = "Email is Required";
    }else if(!emailRegex.test(email)){
      newErrors.email = "Email is not valid";
    }
    // validate password
    if(!password){
      newErrors.password = "Password is Required";
    }else if(password.trim().length < 6){
      newErrors.password = "Password must be at least 6 characters";
    }
    setError(newErrors);
    return newErrors;
  }
  
  // form submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateData();
    // if any errors exist, stop form submission
    if (validationErrors.email || validationErrors.password) return;

    // Form submission logic
    console.log("Form submitted:", formDetails);

    // make  API call
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({email:formDetails.email, password:formDetails.password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if(response.ok){
      console.log("Login successful");
      // route.push('/dashboard');
    }else{
      alert("Login failed");
    }

    //reset values
    setFormDetails({email: "",password: ""});
    setError({email: "",password: ""});
  }
 
  // handle change
  const handleChange = (e) => {
    // clear error message
    setError({...error, [e.target.name]: ""});
    // update form details
    setFormDetails({...formDetails, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={onSubmitHandler} noValidate>
        <label htmlFor="email">Email</label>   
        <input type="email" id="email" name="email" placeholder='Enter your email' value={formDetails.email} onChange={handleChange} />
        {error.email && <p>{error.email}</p>}
        <br />
        <label htmlFor="password">Password</label>   
        <input type="password" id="password" name="password" placeholder='Enter your password' value={formDetails.password} onChange={handleChange} />
        <p><i>**Don't use spaces in starting or ending</i></p>
        {error.password && <p>{error.password}</p>}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Loginpage
