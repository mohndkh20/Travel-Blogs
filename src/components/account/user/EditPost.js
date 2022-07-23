import { useEffect, useState, useRef } from "react";
import { useNavigate , useParams } from "react-router-dom";
import { useRequest } from "../hooks2/useRequest";

const EditAdminPost = () => {
	const navigate = useNavigate()
	const {id}  = useParams()
	const sendRequest = useRequest()
	const [post, setPost] = useState({
		title: '',
		description: ''
	})
	useEffect(() => {
		sendRequest (`${process.env.REACT_APP_API_URL}/posts/${id}` , {}, {}, { auth: true })
			.then(response => {
				if (response?.success) {
					setPost(response?.data)
					const postCategories = response?.data?.categories?.map((c) => c.id)
					const postCountries = response?.data?.countries.map((t) => t.id)
					setSelectedCategories(postCategories)
					setSelectedCountries(postCountries)
				}
			})
	}, [])
	const imageRef = useRef()
	const titleRef = useRef()
	const descriptionRef = useRef()
	const countriesRef = useRef()
	const categorieseRef = useRef()
	const [countries, setCountries] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedCountries, setSelectedCountries] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const handlecountryToggle = (e) => {
		const tagsCountries = [...selectedCountries]
		const value = parseInt(e.target.value)
		if (tagsCountries.indexOf(value) === -1) {
			tagsCountries.push(value)
		} else {
			tagsCountries.splice(tagsCountries.indexOf(value), 1)
		}
		setSelectedCountries(tagsCountries)
	}
	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		const value = parseInt(e.target.value)
		if (categoriesClone.indexOf(value) === -1) {
			categoriesClone.push(value)
		} else {
			categoriesClone.splice(categoriesClone.indexOf(value), 1)
		}
		setSelectedCategories(categoriesClone)
	}

    useEffect(() => {
    sendRequest(process.env.REACT_APP_API_URL + "/countries")
	.then((response) => {
        setCountries(response?.data);
    });
    sendRequest(process.env.REACT_APP_API_URL + "/categories")
	.then((response) => {
        setCategories(response?.data);
        }
    );
    }, []);

	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('description', descriptionRef.current.value)
		formdata.append('category_id', categorieseRef.current.value)
		formdata.append('country_id', countriesRef.current.value)
		formdata.append('image', imageRef.current.files[0])
		sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, formdata, { auth: true }, 'PUT')
			.then((response) => {
				window.alert(response?.messages)
				if (response?.success) {
					navigate('/account')
				}
			})
	}
	return (
		<div className="custombox clearfix">
			<h5 className="small-title">Edit Post</h5>
			    <div className="row">
				    <div className="col-lg-12">
					    <div className="form-wrapper">
						<input type={"text"}
							onChange={(e) => { setPost({ ...post, title: e.target.value }) }}
							value={post?.title} ref={titleRef} className="form-control" placeholder="Title" />
						<div className="container-fluid">
						    <div className="container-fluid">
						        <h5>Select Post Country</h5>
							        <div className="row mb-4">
							            <div  className="my-2 col-md-4 col-lg-3">
							                <select className="form-select" ref={countriesRef} onClick={handlecountryToggle}>
										        <optgroup placeholder="Select Country" label="Select Country">
                                                            
												    {countries?.map((country, i) => {
									            	    return (
															<>
                                                                    <option value={country.id} selected={post?.country?.country_name === country?.country_name ? true : false} key={i}>{country?.country_name}</option>
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
							            <div  className="my-2 col-md-4 col-lg-3">
							                <select className="form-select" ref={categorieseRef} onClick={handleCategoryToggle}>
										        <optgroup placeholder="Select Category" label="Select Category">
												    {categories?.map((category, i) => {
									            	    return (
															<>  
                                                                    <option value={category.id} selected={post?.category?.name === category?.name ? true : false} key={i}>{category?.name}</option>
															</>
										                )
									                })}
							                    </optgroup>
							                </select>
							            </div>
							        </div>
						        </div>
						    </div>
						{
							post?.image && <img src={post?.image} width='100' style={{ height: 'auto' }} />
						}
						<input type={"file"} ref={imageRef} className="form-control" placeholder="Image " />
						<textarea ref={descriptionRef} className="form-control" placeholder="Post Content" defaultValue={post?.description}></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditAdminPost;
