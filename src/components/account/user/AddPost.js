import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../hooks2/useRequest"
const AddPost = () => {
    const navigate = useNavigate()
    const descriptionRef = useRef()
    const imageRef = useRef()
    const titleRef = useRef()
    const categorieseRef = useRef()
    const countriesRef = useRef()
    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCountries, setSelectedCountries] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const handleCountryToggle = (e) => {
        const countriesClone = [...selectedCountries]
        if (e.target.checked) {
            countriesClone.push(e.target.value)
        } else {
            countriesClone.splice(countriesClone.indexOf(e.target.value), 1)
        }
        setSelectedCountries(countriesClone)
    }
    const handleCategoryToggle = (e) => {
        const categoriesClone = [...selectedCategories]
        if (e.target.checked) {
            categoriesClone.push(e.target.value)
        } else {
            categoriesClone.splice(categoriesClone.indexOf(e.target.value), 1)
        }
        setSelectedCategories(categoriesClone)
    }
    useEffect(() => {
        sendRequest(process.env.REACT_APP_API_URL + "/countries")
            .then((response) => {
                setCountries(response?.data)
            })
        sendRequest(process.env.REACT_APP_API_URL + "/categories")
            .then((response) => {
                setCategories(response?.data)
            })
    }, [])
    const sendRequest = useRequest()
    const addpost = () => {
        const formdata = new FormData();
        formdata.append('title', titleRef.current.value)
        formdata.append('description', descriptionRef.current.value)
        formdata.append('category_id', categorieseRef.current.value)
        formdata.append('country_id', countriesRef.current.value)
        formdata.append('image', imageRef.current.files[0])
        sendRequest(process.env.REACT_APP_API_URL + "/posts/add", {}, formdata, { auth: true }, 'POST')
            .then((response) => {
                // window.alert(response?.messages)
                if (response?.success) {
                    alert('Post Created')
                    navigate('/account/posts')
                }
            })
    }
    return (
        <div className="custombox clearfix">
            <h5 className="small-title mb-5">Create Post</h5>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">
                        <input type={"text"} ref={titleRef} className="form-control mb-5" placeholder="Title" />
                        <div className="container-fluid">
                            <div className="container-fluid">
                                <h5>Select Post Country</h5>
                                <div className="row mb-4">
                                    <div className="my-2 col-md-4 col-lg-3">
                                        <select className="form-select" ref={countriesRef} onClick={handleCountryToggle}>
                                            <optgroup placeholder="Select Country" label="Select Countryy">
                                                {countries?.map((country, i) => {
                                                    return (
                                                        <>
                                                            <option value="none" selected disabled hidden>Select Country</option>
                                                            <option value={country.id} key={i}>{country?.country_name}</option>
                                                        </>
                                                    )
                                                })}
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="container-fluid">
                                <h5>Select Post Category</h5>
                                <div className="row mb-4">
                                    <div className="my-2 col-md-4 col-lg-3">
                                        <select className="form-select" ref={categorieseRef} onClick={handleCategoryToggle}>
                                            <optgroup placeholder="Select Category" label="Select Category">
                                                {categories?.map((category, i) => {
                                                    return (
                                                        <>
                                                            <option value="none" selected disabled hidden>Select Category</option>
                                                            <option value={category.id} key={i}>{category?.name}</option>
                                                        </>
                                                    )
                                                })}
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type={"file"} ref={imageRef} className="form-control my-5 col-md-4 col-lg-3" placeholder="image" />
                        <textarea ref={descriptionRef} className="form-control" placeholder="Post Content"></textarea>
                        <button onClick={addpost} type="button" className="btn btn-primary mt-5 col-md-4 col-lg-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddPost