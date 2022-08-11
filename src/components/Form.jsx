import React, { useState } from 'react'
import './form.css'
import axios from 'axios'

export default function Form() {

    const [formData,setFormData]=useState([]);

    const [formValue,setFormValue]=useState({

        "name":"",
        "password":"",
        "phone":"",
        "email":"",
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
        axios.post('http://localhost:4444/userz',formValue)
        .then((res)=>{
            console.log("data added",res.data);
            setFormValue({
                "date":"",
                "status":"",
                "name":"",
                "password":"",
                "phone":"",
                "email":""
            })
        })
        .catch((err)=>console.log("adding data error"))
        
    }
    console.log("form data",formData)
    return (
        <div className='form-div'>

        <h1>Register</h1>
    <form className='form'>
        <input id='name' type="text" value={formValue.name} onChange={handleChange} placeholder='name'/>
        <input type="email" id='email' value={formValue.email} onChange={handleChange} placeholder='email'/>
        <input type='phone' id='phone' value={formValue.phone} onChange={handleChange} placeholder='phone'/>
        <input type="password" id='password' value={formValue.password} onChange={handleChange} placeholder='password'/>
        {/* <input type="select" id='select'/> */}
         <select name="gender" id="gender" value={formValue.gender} onChange={handleChange} placeholder='gender'>
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
