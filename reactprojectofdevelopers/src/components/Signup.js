import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
            <center>
            <h1>Signup</h1>
           
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
                <input type="submit" onClick={submit} />

            </form>
    
            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>
             </center>
        </div>
    )
}

export default Login