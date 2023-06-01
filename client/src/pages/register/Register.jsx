import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";



export default function Register() {
    
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) =>{
        e.preventDefault();
        // setInputs('')

        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)
        } catch(err){
            setErr(err.response.data);

        }
    };

    console.log(err)


  
  
    return (
    <div className="register">
        <div className="card">
            <div className="left">
                {/* <img src="../../assets/bg.jpeg" alt="" /> */}
                <img src="../../assets/applogomain.png" alt="" className="logo" />
                <h1 className="title">Socmed</h1>
                <p className="description">
                    "A safe community for the guardians of our beloved
                    special children."
                </p>
                <p className="titletwo">JOIN TODAY!</p>
                <span className="createAccount">Do you have an account already?</span>
                
                <Link to="/login">
                    <button className="buttonLogin">Login</button>
                </Link>
            </div>

            <div className="right">
                <h1 className="accountRegister">Register</h1>
                <form className="formRegister">
                    <input type="text" placeholder="Username" className="username" name="username" onChange={handleChange} />
                    <input type="text" placeholder="Email" className="email" name="email" onChange={handleChange} />
                    <input type="password" placeholder="Password" className="password" name="password" onChange={handleChange} />
                    <input type="text" placeholder="Name" className="name" name="name" onChange={handleChange} />
                    
                    {err && err}
                    <button onClick={handleClick} className="registerButton">Register</button>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}