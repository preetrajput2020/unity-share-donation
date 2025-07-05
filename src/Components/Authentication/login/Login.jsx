import LoginCard from "./LoginCard";
import Navbar from "../Navbar";
import { useContext } from "react";

export default function Login() {
 
  
  return (
    <div className="loginContainer">
      <div className="tryi">
        <Navbar title="SignUp" />
        <LoginCard />
      </div>
    </div>
  );
}