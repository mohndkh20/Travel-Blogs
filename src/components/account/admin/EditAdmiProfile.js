import {  useState, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { useRequest } from "../hooks2/useRequest"
const EditProfile = () => {
    const navigate = useNavigate()
    // const  id = useParams()
    const sendRequest = useRequest()
    const auth = useContext(AuthContext)
    const [user, setUser] = useState({
        firstname: auth?.user?.firstname,
        lastname: auth?.user?.lastname,
        username: auth?.user?.username,
        email: auth?.user?.email,
        password: '',
    })
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const addUser = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/update/${auth?.user?.id}`, {}, {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }, {
            type: 'json',
            auth: true
        }, 'PUT')
            .then((response) => {
                window.alert(response?.messages)
                if (response?.success) {
                    navigate('/account/editadmin')
                }
            });
    }
    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Edit Account</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mt-4 mb-4 d-flex justify-content-center">
                        <img src={auth?.user?.avatar} />
                    </div>
                    <div className="form-wrapper">
                        <h6>Edit Your First Name:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, firstname: e.target.value }) }}
                            value={user?.firstname} ref={firstnameRef} className="form-control" placeholder="first name" />
                        <h6>Edit Your Last Name:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, lastname: e.target.value }) }}
                            value={user?.lastname} ref={lastnameRef} className="form-control" placeholder="last name" />
                        <h6>Edit Your Email:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                            value={user?.email} ref={emailRef} className="form-control" placeholder="email" />
                        <h6>Edit Your Username :</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                            value={user?.username} ref={usernameRef} className="form-control" placeholder="username" />
                        <h6 className="small-password">Edit Your Password :</h6>
                        <input type={"password"}
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                            value={user?.password} ref={passwordRef} className="form-control" placeholder="password" />
                        <button onClick={addUser} type="button" className="btn btn-primary my-5">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;