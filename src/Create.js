import db from "./FbConfig";
import {useState} from "react";
import {ref,set,get,child} from "firebase/database";


export default function Create(){
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [eno,setEno]=useState("");
  const [position,setPosition]=useState("");
  const [department,setDepartment]=useState("");
  const [location,setLocation]=useState("");
  const [salary,setSalary]=useState("");

 const hEmail=(event)=>{setEmail(event.target.value);}
 const hName=(event)=>{setName(event.target.value);}
 const hEno=(event)=>{setEno(event.target.value);}
 const hPosition=(event)=>{setPosition(event.target.value);}
 const hDepartment=(event)=>{setDepartment(event.target.value);}
 const hLocation=(event)=>{setLocation(event.target.value);}
 const hSalary=(event)=>{setSalary(event.target.value);}

   const save=(event)=>{
   event.preventDefault();
   const r1=ref(db);
   get(child(r1,"create/"+name))
   .then ((snapshot)=>{
       if(name == "")
          {
                 alert("please enter name");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                 setSalary("");
         }
        else if ((name == "") || (name.trim() == "") || (name.trim().length<2) || (! name.match(/^[A-Za-z]+$/)))
         {
           alert("Name is invalid");
           setEmail("");
              setName("");
              setEno("");
              setPosition("");
              setDepartment("");
              setLocation("");
              setSalary("");
 
          }
      else if(email == "")
          {
                 alert("please enter email");
              setEmail("");
              setName("");
              setEno("");
              setPosition("");
              setDepartment("");
              setLocation("");
              setSalary("");
 }
  else if(eno == "")
          {
                 alert("please enter employee number");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                 setSalary("");
         }
 else if(position == "")
          {
                 alert("please enter position ");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                 setSalary("");
         }
 else if(department == "")
          {
                 alert("please enter department");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                setSalary("");
         }
 else if(location == "")
          {
                 alert("please enter location");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                setSalary("");
         }
 else if(salary == "")
          {
                 alert("please enter salary");
                 setEmail("");
                 setName("");
                 setEno("");
                 setPosition("");
                 setDepartment("");
                 setLocation("");
                 setSalary("");
         }
   else
{
      let data={email,name,eno,position,department,location,salary};
      const r2=ref(db,"create/"+name);
      set(r2,data);
      alert("Employee recorded");
      setEmail("");
      setName("");
      setEno("");
      setPosition("");
      setDepartment("");
      setLocation("");
      setSalary("");
     }
  })
  .catch(err=>console.log(err));
}

return(
<>
<center>
<b>Employee details</b>
<br/>
<form onSubmit={save}>
<input type="number" placeholder="Enter Employee number" onChange={hEno} value={eno}/>
<br/><br/>
<input type="text" placeholder="Enter Name"  onChange={hName} value={name}/>
<br/><br/>
<input type="email" placeholder="Enter email"  onChange={hEmail} value={email}/>
<br/><br/>
<input type="text" placeholder="Enter position"  onChange={hPosition} value={position}/>
<br/><br/>
<input type="text" placeholder="Enter department"  onChange={hDepartment} value={department}/>
<br/><br/>
<input type="text" placeholder="Enter location"  onChange={hLocation} value={location}/>
<br/><br/>
<input type="number" placeholder="Enter package"  onChange={hSalary} value={salary}/>
<br/><br/>
<input type="submit"/>
</form>
</center>
</>
);
}