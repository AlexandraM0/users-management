import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

//fetch users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost/webapp/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
                
            </ul>
        </div>
    );
};

export default Dashboard;
