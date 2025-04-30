// import React from 'react'

// const View=()=> {
//     const[users,setUsers]=useState([]);
//     useEffect(()=>{
//         viewdata();
//     })
//     const viewdata=async()=>{
//         const res=await axios.get();
//         console.log(res);
//         setUsers(res.data);
    
//     }
//   return (
//     <div >
//         <h1>Show data</h1>
//         <table>
//             <tr>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>AGE</th>
//             </tr>
//             {users.map((user)=>{
//             <tr key={user.id}>
//                 <th>{user.id}</th>
//                 <th>{user.name}</th>
//                 <th>{user.age}</th>
//             </tr>
//             })}
//         </table>
//     </div>
//   )
// }

// export default View
import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('https://student-ce.onrender.com/users');
        console.log(res);
        setUsers(res.data);
    }

  return (
    <div>
        <h1>Registerd Users List</h1>
        <table style={{border: '2px solid red',backgroundColor: 'greenyellow',width: '100%'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>
            ))}
        </table>
     </div>
  )
}

export default View