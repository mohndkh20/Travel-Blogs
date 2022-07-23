import { Link } from "react-router-dom"

const AdminSides = () => {
    return (
        <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="add-post" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Add post</b></li>
                    </Link>
                    <Link to="posts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>All Posts</b></li>
                    </Link>
                    <Link to="adminposts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Your Posts</b></li>
                    </Link>
                    <Link to="users" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Users</b></li>
                    </Link>
                    <Link to="countries" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Countries</b></li>
                    </Link>
                    <Link to="categories" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Categories</b></li>
                    </Link>
                    <Link to="editadmin" className="nav-item" style={{ textDecoration: 'none'}}>
                        <li className="nav-link" ><b>Edit Your Profile</b></li>
                    </Link>
                </ul>
            </div> 
    );
};

export default AdminSides