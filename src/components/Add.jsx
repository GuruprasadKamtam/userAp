import React, { useState } from 'react'

const Add = () => {

    const [userData,setUserData] = useState();

    const updateChange = (e)=>{
        e.preventDefault();
        
    }
  return (
    <>
        <h2>Add User</h2>
        <div className="container">
            <div className="col-md-6">
            <form>
            <label htmlFor="Name">Name
            <input type='text' name='name' placeholder='Enter Name' className='form-control' autoComplete='off'
            onChange={updateChange}
            />  

            </label><br/><br/>
            <label htmlFor="Email">Email
            <input type='text' name='email' placeholder='Enter Email' className='form-control' autoComplete='off'/>  

            </label><br/><br/>
            <label htmlFor="phone">Phone number
            <input type='number' name='phone' placeholder='Enter Phone Number' className='form-control' autoComplete='off'/>  

            </label><br/><br/>
             <button className='btn btn-success'>Submit</button>
        </form> 
            </div>
        </div>
        
    </>
  )
}

export default Add
