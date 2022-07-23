import * as React from 'react';
import { Link } from 'react-router-dom';


export default function post() {
    return (
        <div>
            <div>
                <ul className="nav justify-content-center mt-3 mb-2" style={{ textDecoration: 'none'}}>
                    <Link to="/allposts" className="nav-item textDecoration: none">
                        <li className="nav-link textDecoration: 'none" style={{ color: ''}}><b>All posts</b></li>
                    </Link>
                    <Link to="/winter" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" href="#"><b>Winter areas</b></li>
                    </Link>
                    <Link to="/summer" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" href="#"><b>Summer areas</b></li>
                    </Link>
                    <Link to="/other" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" href="#"><b>Other</b></li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}


















// import React from "react";
// import { Link } from "react-router-dom";



// export const Posts = () => {
//     return (
//         <div>
//             <div className="d-flex justify-content-center">
//                 <h1>
//                     welcom to Posts
//                 </h1>
//             </div>
//             <div className="d-flex justify-content-center">
//                 <h1>
//                     If you want to go to SinglePost,
//                     <Link to="/SinglePost">click here</Link>
//                 </h1>
//             </div>
//             < div className="d-flex justify-content-center">
//                 <Link to="/" type="button" className="btn btn-primary">Back</Link>
//             </div>
//         </div>
//     )
// }


// export default Posts;