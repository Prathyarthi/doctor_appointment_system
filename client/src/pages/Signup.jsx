import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';
import axiosInstance from '../axiosInstance';

function Signup() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOnClick = async () => {
        try {
            dispatch(showLoading())
            const response = await axiosInstance.post('user/signup', {
                username,
                email,
                password
            });
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message)
                toast("Redirecting to login page")
                navigate('/signin')
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='h-screen flex justify-center items-center bg-slate-800'>
            <div className='flex flex-col h-1/2 w-1/5 p-6 border rounded-2xl bg-white'>
                <div className='m-5 font-bold text-center text-3xl text-gray-800'>
                    Signup
                </div>
                <div className='flex flex-col space-y-4'>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                        value={username}
                        type="text"
                        placeholder='Username'
                        className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400'
                    />
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                        value={email}
                        type="email"
                        placeholder='Email'
                        className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400'
                    />
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        value={password}
                        type="password"
                        placeholder='Password'
                        className='border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400'
                    />
                </div>
                <button onClick={handleOnClick}
                    className='bg-blue-500 text-white m-3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Signup
                </button>
                <div className='flex float-end underline pb-2'>
                    <Link to="/signin">Signin?</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
