import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout';

function Home() {

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/user/getUser', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(response.data.user);
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