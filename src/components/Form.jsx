import React, { useState } from 'react'
import './form.css'

export default function Form() {

    const [formData,setFormData]=useState([]);

    const [formValue,setFormValue]=useState({

        "date":new Date(Date.now()),

        "status":false
    });

    const handleChange=(e)=>{
        console.log(e.target.value);

        setFormValue({
            ...formValue,
            [e.target.id]:e.target.value}
            )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormData([...formData,formValue]);  
    }
    console.log("form data",formData)
    return (
        <div className='form-div'>

        <h1>Register</h1>
    <form className='form'>
        <input id='name' type="text" onChange={handleChange} placeholder='name'/>
        <input type="email" id='email' onChange={handleChange} placeholder='email'/>
        <input type='phone' id='phone' onChange={handleChange} placeholder='phone'/>
        <input type="password" id='password' onChange={handleChange} placeholder='password'/>
        {/* <input type="select" id='select'/> */}
         <select name="gender" id="gender" onChange={handleChange} placeholder='gender'>
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
         </select>
        <button onClick={handleSubmit}>submit </button>
    </form>
   </div>
  )
}
