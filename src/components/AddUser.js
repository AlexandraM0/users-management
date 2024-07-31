import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/add-edit-users.scss';

const AddUser = ({ newUser, handleChange, handleAddUser }) => {
    return (
                <div className="add-edit-form">
                    <input
                        type="text"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button type="button" onClick={handleAddUser}>
                        <FontAwesomeIcon icon={faPlus} className="icon" />
                        Add a new user
                    </button>
                </div>
    );
};

export default AddUser;
