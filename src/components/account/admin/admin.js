import { Routes, Route } from "react-router-dom";
import Categories from "./Categoris"
import Countries from "./Countries";
import Users from "./users";
import AdminSides from "./AdminSides";
import Post from "./AddPost";
import Posts from "./posts";
import AdminPosts from "./AdminPosts";
import EditAdminProfile from "./EditAdmiProfile";
import EditAdminPost from "./EditAdminPost";

const Admin = () => {

    return (
        <div className="container">
            <div className="row">
                <AdminSides/>
            <div className="col-lg-9">
                <Routes>
                    <Route exact path="/" element={<Users/>} />
                    <Route exact path="/categories" element={<Categories/>} />
                    <Route exact path="/countries" element={<Countries/>} />
                    <Route exact path="/users" element={<Users/>} />
                    <Route exact path="/add-post" element={<Post/>} />
                    <Route exact path="/posts" element={<Posts/>} />
                    <Route exact path="/adminposts" element={<AdminPosts/>} />
                    <Route exact path="/editadmin" element={<EditAdminProfile/>} />
                    <Route exact path="/editA/:id" element={<EditAdminPost/>} />
                </Routes>
            </div>
            </div>
        </div>
    )

}

export default Admin