import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const UserList = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const [ users,setUsers ]= useState();

    useEffect(()=>{
        fetch(`http://localhost:5000/user`)
        .then(res=> res.json())
        .then(data=>setUsers(data))
    },[])
    
    const data = {
        email : user?.email,
        FirstName : user?.displayName,
    }

console.log(data)
    fetch(`http://localhost:5000/user`,{
        method: 'PUT',
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(user),
    })

    return (
        <div>
            
        </div>
    );
};

export default UserList;