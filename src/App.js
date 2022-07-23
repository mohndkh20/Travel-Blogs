import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
import SignUp from "./components/account/SignUp";
import Login from "./components/account/Login";
import Nav from "./components/Nav";
import AllPosts from "./components/posts/AllPosts";
import Account from "./components/account/Account";
import Posts from "././components/account/user/Posts";
import AddPost from "./components/account/user/AddPost";
import EditProfile from "./components/account/user/EditProfile";
import EditPost from "./components/account/user/EditPost";
import Summer from "./components/posts/Summer";
import Winter from "./components/posts/Winter";
import Other from "./components/posts/Other";
import Categories from "./components/account/admin/Categoris";
import Countries from "./components/account/admin/Countries";
import Users from "./components/account/admin/users";
import Post from "./components/account/admin/AddPost";
import AdminPosts from "./components/account/admin/AdminPosts";
import EditAdminProfile from "./components/account/admin/EditAdmiProfile";
import EditAdminPost from "./components/account/admin/EditAdminPost";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/other" element={<Other />} />


          <Route path="/account" element={<Account/>} >
            <Route path="/account/posts" element={<Posts/>}/>
            <Route path="/account/addpost" element={<AddPost/>}/>
            <Route path="/account/edit/:id" element={<EditPost/>}/>
            <Route path="/account/edituser" element={<EditProfile/>}/> 
          </Route> 


          <Route path="/account" element={<Account/>} >
            <Route path='/account/countries' element={<Countries />} />
            <Route path='/account/categories' element={<Categories />} />
            <Route path='/account/users' element={<Users />} />
            <Route path='/account/add-post' element={<Post />} />
            <Route path='/account/adminposts' element={<AdminPosts />} />
            <Route path='/account/editadmin' element={<EditAdminProfile />} />
            <Route path='/account/editA/:id' element={<EditAdminPost />} />
          </Route> 


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

