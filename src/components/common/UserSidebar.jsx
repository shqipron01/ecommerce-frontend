// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/Auth';

const UserSidebar = () => {
    const {logout} = useContext(AuthContext);
    const [userRole, setUserRole] = useState(null);

     useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (user && user.role) {
            setUserRole(user.role);
        }
    }, []);
  return (
    <div className='card shadow mb-5 sidebar'>
        <div className='card-body p-4'>
            <ul>
                {userRole === 'admin' && (
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                )}
                <li>
                    <Link to="/account">Account</Link>
                </li>
                <li>
                    <Link to='/account/orders'>Orders</Link>
                </li>
                <li>
                    <Link to="#">Change Password</Link>
                </li>
                <li>
                    <a href="#" onClick={logout}>Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default UserSidebar