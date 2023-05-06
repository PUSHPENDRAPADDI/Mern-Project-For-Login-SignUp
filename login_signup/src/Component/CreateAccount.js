import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "../Style/Style.css"

const question = "What was your childhood nickname?"; // example question

const CreateAccount = (props) => {
  const [passShow, setPassShow] = useState(false);
  const [inputdata, setInputdata] = useState({
    id: 1,
    name: "",
    email: "",
    password: "",
    secretQuestion: "",
    role: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.type === "select-one") {
      setInputdata({ ...inputdata, role: e.target.value })
    } else {
      const { name, value } = e.target;
      setInputdata({ ...inputdata, [name]: value })
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, secretQuestion, role } = inputdata;

    if (name === "") {
      toast.error("Enter Your Name")
    } else if (email === "") {
      toast.error("Enter Your Email")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email")
    } else if (secretQuestion === "") {
      toast.error("Please Enter Your secret Question")
    } else if (role === "") {
      toast.error("Please select your role")
    } else if (password === "") {
      toast.error("Enter Your Password")
    } else if (password.length < 6) {
      toast.error("password length minimum 6 character")
    } else {
      props.createAccount(inputdata)
    }
  }
  if (props.createdUser !== "") {
    console.log("Sunny");
    navigate("/login")
  }
  
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage
              your tasks! We hope that you will get like it.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={handleChange} />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Enter Your Email Address' onChange={handleChange} />
            </div>
            <div className="form_input">
              <label htmlFor="secretQuestion">{question}</label>
              <input type="text" name="secretQuestion" id="secretQuestion" placeholder='Enter Your NickName' onChange={handleChange} />
            </div>
            <div className="form_input">
              <label style={{ width: "100%" }} htmlFor="secret-question">Role</label>
              <select style={{ height: "45px", width: "100%", border: "1px solid #d7d5d5", borderRadius: "5px" }} id="secret-question" onChange={handleChange}>
                <option value="admin">Admin</option>
                <option value="reader">Reader</option>
                <option value="Owner">Owner</option>
              </select>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} name="password" id="password" placeholder='Enter Your password' onChange={handleChange} />
                <div className='showpass' onClick={() => setPassShow(!passShow)} >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit} >Sign Up</button>
            <p>Don't have and account </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default CreateAccount;