import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest'
const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const sendRequest = useRequest()
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPost(response.data)
            }
        })
    }, [])
    return (
        <div className="">
            <div>
                <ul className="nav justify-content-center mt-3 mb-4">
                    <Link to="/allposts" className="nav-item" style={{ textDecoration: 'none' }}>
                        <li className="nav-link" style={{ color: "" }}><b>All posts</b></li>
                    </Link>
                    <Link to="/w className='d-flex justify-content-center align-items-center flex-wrapinter" className="nav-item" style={{ textDecoration: 'none' }}>
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
            {post ?
                <div className='d-flex justify-content-center'>
                    <div className="card mb-3" style={{ width: "1000px", height: "auto" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={post.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">Country : {post.country.country_name}</p>
                                    <p className="card-text">Category : {post.category.name}</p>
                                    <p className="card-text"><small className="text-muted">{post.description}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center mb-5">
                    < div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            < div className="d-flex justify-content-center mb-3">
                <Link to="/allposts" type="button" className="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}
export default SinglePost;