import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const MainComponents = () => {
   const [users, setUsers] = useState([]);
   const [filteredUsers, setFilteredUsers] = useState([])
   const [gender, setGender] = useState('');
   const [search, setSearch] = useState('');

   const fetchUsers = async()=>{
    const response = await fetch("https://dummyjson.com/users");
    const users = await response.json();
    setUsers(users.users)
   }

   useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        let userData = users
        if(gender){
            userData = userData.filter((user, index) => user.gender === gender)
        }
        if(search){
            userData = userData.filter((user, index) => (
                user.firstName.toLowerCase().includes(search.toLowerCase()) ||
                user.lastName.toLowerCase().includes(search.toLowerCase()) ||
                user.maidenName.toLowerCase().includes(search.toLowerCase())
            ))
        }

        setFilteredUsers(userData)
    }, [gender, users, search])
  
   
   

  return (
    <>
    <Nav/>
    <div>
    <select class="form-select" onChange={(e)=>(setGender(e.target.value))} aria-label="Default select example">
        <option value="" selected>All</option>
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
    <input type='text' value={search} onChange={e=>setSearch(e.target.value)}/>
   {
    filteredUsers.map((user,index)=>{
     return  <div class="card" style={{width: "18rem"}}>
            <img src={user.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{user.firstName} {user.lastName}</h5>
                <p>{user.gender}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
})
   }
    </div>
      
    </>
  )
}

export default MainComponents
