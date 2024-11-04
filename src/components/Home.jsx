import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Home = () => {
  let [query, setQuery] = useState({
    text: "",
  });

  const [state, setState] = useState({
    users: [],
    loading: true,
    text: "",
    fUsers: [],
  });


  const [user,setUser] = useState({
    name: ""
  });
  //const [loading,setLoading] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let getData = async () => {
      try {
        let results = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        //console.log(results.data);
        setState(() => ({
          ...state,
          users: results.data,
          fUsers: results.data,
          loading: false,
        }));
        //setUsers(results.data);

        //setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  let { users, loading, search, fUsers } = state;

  const searchUser = (e) => {
    e.preventDefault();
    setQuery({
      ...query,
      text: e.target.value,
    });
    //console.log(query.text);

    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // console.log(filteredUsers);

    setState({
      ...state,
      fUsers: filteredUsers
    });
  };

  const handleChange = (e)=>{
    e.preventDefault();
    setUser({
        ...user,
        name: e.target.value
    })
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    setState({
      ...state,
      users : user,
      fUsers: user
    })

  }

  const deleteUser = (id)=>{
    const data = users.filter((person)=>person.id != id);
   // console.log(data);
    
    setState(()=>(
      {
        ...state,
        users: data,
        fUsers: data
      }
    ))
    // console.log(users);
    
  }
  console.log(users);
  
  return (
    <>
      <div className="container">
        <div className="col-md-6">
        <Button variant="primary" onClick={handleShow}>
            Add new user
        </Button>
          <div className="card border border-dark">
            <div className="card-header bg-primary text-white text-center">
              Users List
            </div>
            <form>
              <input
                type="text"
                name="text"
                value={query.text}
                placeholder="Search Names"
                className="form-control"
                autoComplete="off"
                onChange={searchUser}
              />
            </form>
          </div>

          {loading ? (
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />
          ) : (
            <>
              {fUsers.map((user, id) => (
                <>
                  <div
                    className="card  bg-warning border-dark"
                    key={user.id}
                   
                  >
                    <p className="ms-2">
                      Name: <b>{user.name}</b>
                    </p>
                    <p className="ms-2">
                      Email: <b>{user.email}</b>
                    </p>
                    <p className="ms-2">
                      Company: <b>{user.company.name}</b>
                    <button onClick={()=>{deleteUser(id)}}
                      className="btn btn-danger"
                      > Delete</button>
                    </p>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={user.name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={user.email}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> */}
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
