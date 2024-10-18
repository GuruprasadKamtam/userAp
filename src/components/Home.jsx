import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css";

const Home = () => {

    const [state,setState] = useState({
        users:[],
        loading: true,
        search : "",
        fUsers: []
    });
    //const [loading,setLoading] = useState(true);

    useEffect(()=>{
        
        let getData = async()=>{
            try{
            let results = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(results.data);
            setState(()=>({
                ...state,
                users: results.data,
                loading: false
            }
                
            )); 
            //setUsers(results.data);
            
            //setLoading(false);

            }catch(error){
                console.log(error.message);
            }
            
            
            
        };getData();
    },[])

    let {users,loading,search,fUsers} = state;

    const searchUser = (e)=>{
        e.preventDefault();
        setState(()=>({
            ...state,
            search: e.target.value
        }
            
        )); 
        
        // const filteredUsers = users.filter.toLowerCase().includes(search.toLowerCase());
        // setState(()=>({
        //     ...state,
        //     users: filteredUsers
        // }))
        
    }
  return (
    <>

        <div className="container">
            <div className="col-md-6">
                
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Add new User</button>
                <div className="card border border-dark">
                    <div className="card-header bg-primary text-white text-center">Users List</div>    
                    <form>
                    <input type="text" name='search' placeholder='Search Names'className='form-control'
                    autoComplete='off' onChange={searchUser}
                    />
                </form>
                </div>
                
                
                     {
                        loading ? <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831'

                        /> : <>
                        {
                            users.map((user,id)=>(
                                <>
                                <div className="card  bg-warning border-dark" key={id} onClick={()=>{alert(user.address.street,user.address.suite,user.address.city)}}>
    
                                <p  className='ms-2'>Name: <b>{user.name}</b></p>
                                <p className='ms-2'>Email: <b>{user.email}</b></p>
                                <p className='ms-2'>Company: <b>{user.company.name}</b></p>
                                </div>
                                </>
                                
                            ))
                        }
                        </>
                    }

                        
                     
                
            </div>
                
        </div> 



    </>
  )
}

export default Home
