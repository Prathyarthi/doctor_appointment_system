import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout';
import axiosInstance from '../axiosInstance';

function Home() {

    const getData = async () => {
        try {
            const response = await axiosInstance.post('/user/getUser', {
                token: localStorage.getItem('token')
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            // console.log(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Layout>
            Home
        </Layout>
    )
}

export default Home