import React, { useEffect, useState } from 'react';
import '../styles/mocked-dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddUser from './AddUser';
import EditUser from './EditUser';

function MockedDashboard() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ email: '', username: '', password: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleAddUser = () => {
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setNewUser({ email: '', username: '', password: '' });
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditUser = (id) => {
        const user = users.find(user => user.id === id);
        setEditingUser(user);
    };

    const handleSaveEditUser = () => {
        setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
        setEditingUser(null);
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editingUser) {
            setEditingUser({ ...editingUser, [name]: value });
        } else {
            setNewUser({ ...newUser, [name]: value });
        }
    };

    return (
        <div>
            <div className='mocked-header'>Mocked Dashboard</div>
            <form className='mocked-form'>
                <table className='mocked-table'>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password || 'N/A'}</td>
                                <td>
                                    <FontAwesomeIcon icon={faPen} className="icon" onClick={() => handleEditUser(user.id)} />
                                    <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => handleDeleteUser(user.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {editingUser ? (
                    <EditUser 
                        editingUser={editingUser}
                        handleChange={handleChange}
                        handleSaveEditUser={handleSaveEditUser}
                        handleCancel={handleCancel}
                    />
                ) : (
                    <AddUser 
                        newUser={newUser}
                        handleChange={handleChange}
                        handleAddUser={handleAddUser}
                    />
                )}
            </form>
        </div>
    );
}

export default MockedDashboard;
