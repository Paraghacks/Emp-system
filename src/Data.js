import db from "./FbConfig";
import {get,child,ref,remove} from "firebase/database";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Data(){
  const nav = useNavigate();
  const [info,setInfo]=useState([]);
  useEffect(()=>{
  const dbref=ref(db);
  

  get(child(dbref,"create/"))
  .then((snapshot)=>{
                      if(snapshot.exists()){
                          setInfo([]); 
                          console.log(snapshot.val());
                          const data=snapshot.val()
                          if (data!==null){             
                                              Object.values(data).map((da)=>{
                                               setInfo((oldArray)=>[...oldArray,da]);
                                });
                              }
                         }
                          else
                        {
                               console.log("no data");
                        }
                  })
},[])
   const deluser=(name)=> {
       const r3 = ref(db,"create/"+name)
       remove(r3)
       .then( () => {
                      alert("recored deleted");
                      window.location.reload();
                    })
       .catch (err => console.log(err));
    }

const lo=(event)=>{
    event.preventDefault();
    localStorage.clear();
    nav("/admin");
  }
 const ol=(event)=>{
    event.preventDefault();
    nav("/create");
  }


return(
 <>
 <center>
 <h1> Data </h1>
 <table border="5" style={{Width:'50%'}}>
   <tr>
              <th> Eno </th>
              <th> Name </th>
              <th> Email </th>
              <th> Position </th>
              <th> Department</th>
               <th> Salary</th>
               <th> Location</th>
  </tr>  
{  
        info.map((e=>
<tr style={{"text-align":"center"}}>
  <td>{e.eno}</td>
  <td>{e.name}</td>
  <td>{e.email}</td>
  <td>{e.position}</td>
  <td>{e.department}</td>
  <td>{e.salary}</td>
  <td>{e.location}</td>
<td> <button onClick = { () =>{
if (window.confirm('are you sure???')) deluser(e.name)}}> Delete </button></td>
</tr>
))
}

</table>
<form onSubmit={lo}>
   <input type="submit" value="Logout"/>
    
   
</form>
<form onSubmit={ol}>
 <input type="submit" value="Create"/>
</form>
</center>
</>
);
}