import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Footer from './../../Shared/Footer/Footer';

const UserList = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(`https://genesys-task.onrender.com/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const data = {
        email: user?.email,
        FirstName: user?.displayName,
        LastName: user?.displayName,
    }

    console.log(data)
    const email = user?.email;
    fetch(`https://genesys-task.onrender.com/user/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user),
    })

    return (
        <div>
            <div className="overflow-x-auto py-24 bg-white px-10 mx-auto">
                <h1 className='text-xl mb-3 '>UserList</h1>
                <table className="w-full">
                    <thead>
                        <tr>
                            
                            <th className='text-start font-normal p-3'>Name</th>
                            <th className='text-start font-normal p-3'>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody className='border-b'>
                        {
                            users?.map((user ,index) => <tr className='border-b'>
                                
                                <td className='p-3'>{user.displayName}</td>
                                <td className='p-3'>{user.email}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
                <h1 className='font-semibold pl-3 mt-3 border-b text-lg'>{users?.length} Users</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserList;