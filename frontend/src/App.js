import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [form, setForm] = useState({});
  const [users, setUsers] = useState({});

  const handleForm = (e) =>{
    // console.log(e.target.value, e.target.name);
    setForm({
      ...form, // it stopes ovrwrite of object 
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    // to connect with server
    const response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      body: JSON.stringify(form),
      headers:{
        'Content-Type' : 'application/json'
      } 
    })
    const data = await response.json();
    console.log(data);
    // to update the fetched documents from database
    getUsers();
  }
  const getUsers = async() =>{
    const response = await fetch('http://localhost:8000/user', {
      method: 'GET'
    })
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  }
  useEffect(() =>{
    getUsers();
  }, [])
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* It does not take an object, thus we have to conver it in json */}
        {/* <p>{JSON.stringify(form)}</p> */}
        <label htmlFor="username">Username: </label>
        <input type='text' id='username' name='username' onChange={handleForm}></input>
        <br/>
        <br/>
        <label htmlFor="password">Password: </label>
        <input type='text' id='password' name='password' onChange={handleForm}></input>
        <br/>
        <br/>
        <input type='submit'></input>
      </form>
      <div>
        <ul>
          {users.map(user => <li key={user._id}>{user.username}, {user.password}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
