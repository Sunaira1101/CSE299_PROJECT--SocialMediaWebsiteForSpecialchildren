import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.css"

export default function Login() {
  
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
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
                    <input type="text" placeholder="Username" className="username" />
                    <input type="password" placeholder="Password" className="password" />
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}