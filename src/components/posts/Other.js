import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
// import Admin from "./admin/Admin"
import { useRequest } from '../../hooks/useRequest'
export default function Summer() {
    const [posts, setPosts] = useState([]);
    const sendRequest = useRequest()
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/bycategory/${3}`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPosts(response.data)
            }
        })
    }, [])
    console.log(posts)
    return (
        <div>
            <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="/allposts" className="nav-item" style={{ textDecoration: 'none' }}>
                        <li className="nav-link" style={{ color: "" }}><b>All posts</b></li>
                    </Link>
                    <Link to="/winter" className="nav-item" style={{ textDecoration: 'none' }}>
                        <li className="nav-link" href="#"><b>Winter areas</b></li>
                    </Link>
                    <Link to="/summer" className="nav-item" style={{ textDecoration: 'none' }}>
                        <li className="nav-link" href="#"><b>Summer areas</b></li>
                    </Link>
                    <Link to="/other" className="nav-item" style={{ textDecoration: 'none' }}>
                        <li className="nav-link" href="#"><b>Other</b></li>
                    </Link>
                </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {posts && posts.length ? posts.map((post, i) => {
                    return (
                        < div className="d-flex justify-content-evenly flex-wrap" key={i}>
                            <Link to={"/singlepost/" + post.id} className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={post.image}
                                            alt={post.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    )
                })
                    :
                    <p>No posts available</p>
                }
            </div>
        </div>
    )
}