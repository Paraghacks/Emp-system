import {useState,useEffect} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import app from "./FbConfig";

export default function Admin(){
  useEffect(()=>{
           let un=localStorage.getItem("un");
           if(un != null)
           {
              nav("/admin");
           }
},[]);
 const nav=useNavigate();
 const [un,setUn]=useState("");
 const [pw1,setPw1]=useState("");
 


 const hUn=(event)=>{setUn(event.target.value);}
 const hPw1=(event)=>{setPw1(event.target.value);}

const check=(event)=>{
   event.preventDefault();
   const auth=getAuth();
   signInWithEmailAndPassword(auth,un,pw1)
                     .then(res=>{
                         localStorage.setItem("un",un);
                         alert("Welcome Admin");
                         nav("/data");
                      })
                  .catch(err=>alert("You're not a Admin"));
            };
           

return(
<>
<center>
<b> Login</b>
<br/>
<form onSubmit={check}>
 <input type="text" placeholder="Enter your Email" onChange={hUn} value={un}/>
<br/><br/>
 <input type="password" placeholder="Enter your password" onChange={hPw1} value={pw1}/>
<br/><br/>

 <input type="submit" value="Login"/>
<br/><br/>
</form>
</center>
</>
);
}