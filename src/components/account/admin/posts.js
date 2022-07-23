import React, { useEffect, useState } from "react"
import { useRequest } from "../hooks2/useRequest"
import { Link } from "react-router-dom"

const Posts = () => {

    const sendRequest = useRequest()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPosts(response.data)
            }
        })
    }, [])

    const deletPost = (id) => {
        if (window.confirm('Do you want to delete this post ?')) {
            sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
                auth: true,
            }, 'DELETE').then((response) => {
                if (response?.success) {
                    const currentPosts = [...posts]
                    const filteredPosts = currentPosts.filter((post) => post.id !== id)
                    setPosts(filteredPosts)
                }
            })
        }
    }

    return (
        <>
        <table className="w-70 table table-striped">
            <thead>
                <tr>
                    <th>Post Title</th>
                    <th>Category</th>
                    <th>Country</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, i) => {
                    return (
                        <tr key={i}>
                            <td>{post?.title}</td>
                            <td>{post.category.name}</td>
                            <td>{post.country.country_name}</td>
                            <td >
                                <button onClick={() => { deletPost(post.id) }} className="btn btn-primary" >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Posts