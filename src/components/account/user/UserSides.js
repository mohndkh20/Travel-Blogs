import { Link } from "react-router-dom"
const UserSides = () => {
    return (
        <div>
                <ul className="nav justify-content-center mt-3 mb-2 gap-5">
                    <Link to="addpost" className="nav-item" style={{ textDecoration: 'none'}}>
                        <b>Add post</b>
                    </Link>
                    <Link to="posts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <b>Your Posts</b>
                    </Link>
                    <Link to="edituser" className="nav-item" style={{ textDecoration: 'none'}}>
                        <b>Edit Your Profile</b>
                    </Link>
                </ul>
            </div> 
    );
};
export default UserSides