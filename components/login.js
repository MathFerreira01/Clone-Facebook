import React from "react";
import Image from "next/image";
import Logo from "../assets/Facebook-logo.png";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image 
        src={Logo} 
        alt="/" 
        width={300} 
        height={550} 
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
