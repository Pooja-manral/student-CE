// import { text } from 'express'
// import React from 'react'

// const Delete=()=> {
//     const handledelete=async(e)=>{
//         e.preventdefault()
//         const id=e.target.id.value
//         await axios.delete(/${id})
//         alert("delete user successfully")
//     }
//   return (
//     <div>
//         <h1>Delete User</h1>
//         <form onsubmit={handledelete}>
//             <input type="text" placeholder='enter product id' name='id'/>
//             <button type='submit'>Delete</button>
//         </form>
//     </div>
//   )
// }

// export default Delete
import React from 'react'
import axios from 'axios'
const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id.value;
    await axios.delete(`https://student-ce.onrender.com/users/${id}`)
    alert('Product deleted successfully')
  }
  return (
    <div>
      <h1>Delete Product</h1>
      <form onSubmit={handleDelete}>
        <input type="text" placeholder="Enter Product ID" name="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete