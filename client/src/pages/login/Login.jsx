import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.css"

export default function Login() {
    const [inputs, setInputs] = useState({
        username:"",
        password:"",
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

  const {login} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
        await login(inputs);
        navigate("/")
    }catch(err){
        setErr(err.response.data);
    }
  };

  return (
    <div className="login">
        <div className="loginCard">
            <div className="loginLeft">
                {/* <img src="../../assets/bg.jpeg" alt="" /> */}
                <img src="../../assets/applogomain.png" alt="" className="logo" />
                <h1 className="title">Socmed</h1>
                <p className="description">
                    "A safe community for the guardians of our beloved
                    special children."
                    
                </p>
                <span className="createAccount">Don't have an account yet?</span>

                <Link to="/register">
                    <button className="buttonRegister">Register</button>
                </Link>
            </div>

            <div className="right">
                <h1 className="accountLogin">Login</h1>
                <form className="formLogin">
                    <input type="text" placeholder="Username" className="username" name="username" onChange={handleChange} />
                    <input type="password" placeholder="Password" className="password" name="password" onChange={handleChange}/>
                    
                    {err && err}
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}