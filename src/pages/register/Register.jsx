import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
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
                    <input type="text" placeholder="Name" className="name" />
                    <input type="text" placeholder="Username" className="username" />
                    <input type="text" placeholder="Email" className="email" />
                    <input type="password" placeholder="Password" className="password" />
                    <button className="registerButton">Register</button>
                    
                </form>
            </div>
        </div>
      
    </div>
  )
}