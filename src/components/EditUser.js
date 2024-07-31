import React from 'react';
import '../styles/add-edit-users.scss';

const EditUser = ({ editingUser, handleChange, handleSaveEditUser, handleCancel }) => {
    return (
   
                <div className="add-edit-form">
                    <input
                        type="text"
                        name="email"
                        value={editingUser.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="username"
                        value={editingUser.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={editingUser.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button type="button" onClick={handleSaveEditUser}>Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
    );
};

export default EditUser;
