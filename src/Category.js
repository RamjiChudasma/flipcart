import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { AiOutlineHeart, } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsCartCheck, BsCurrencyRupee } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Category = () => {
    let [Category, setcategory] = useState([]);
    let [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setcategory(res.data)
                setloading(true)
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                // console.log(res.data)
                setproduct(res.data.products)

            })
            .catch((err) => {
                console.log(err);

            })

    }, [])
    let show = (item) => {
        axios.get(`https://dummyjson.com/products/category/${item}`)
            .then((res) => {
                setproduct(res.data.products)

            })
            .catch((err) => {
                console.log(err);

            })
    }
    let serch = (e) => {
        // alert(e.target.value)
        axios.get(`https://dummyjson.com/products/search?q=${e.target.value}`)
            .then((res) => {
                setproduct(res.data.products)

            })
            .catch((err) => {
                console.log(err);
            })
    }
    if (loading) {
        return (
            <>
                <Container>
                    <Row className="bg-white  catg z-2 pt-3  ">
                        <Col lg={2} className="border-end d-none d-md-block">
                            <h2>CATEGORY</h2>
                        </Col>
                        <Col lg={10}><h2 className="text-center"> <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => { serch(e) }}
                            />
                            <Button variant="outline-danger ">Search</Button>
                        </Form> </h2></Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="cat_height">
                            <Row className="hold_cat">
                                {
                                    Category.map((item) => {
                                        return (
                                            <Col className="cat_details" key={item} onClick={(e) => { show(item) }} lg={12}> <h6 >{item} </h6> </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>

                        <Col lg={10}>
                            <Row className="my-3 ">
                                {
                                    product.map((i, id) => {
                                        return (
                                            <Col key={id} lg={4} md={6} className=" my-3 ">
                                                <div className="overflow-hidden shadows">
                                                    <div className="card">
                                                        <div className=" cards position-relative">
                                                            <div className="pro"><img src={i.thumbnail} alt="" className=" " /></div>
                                                            <div className="d-flex justify-content-center  position-absolute bottom-0 icon_position ">

                                                                <div className="icon text-center"><AiOutlineHeart className=' fs-5'></AiOutlineHeart></div>
                                                                <div className="icon text-center"><BiSearch className=' fs-5'></BiSearch></div>
                                                                <div className="icon text-center"><BsCartCheck className=' fs-5'></BsCartCheck> </div>

                                                            </div>
                                                        </div>
                                                        <h4 className="ps-3 text-truncate heading text-center mt-4  "><Link to={`product/${i.id}`} className="">{i.title}</Link> </h4>

                                                        <p className="ps-3 text-center"> RS:- <b> <span className="text-success"><BsCurrencyRupee></BsCurrencyRupee> {i.price}</span> <s className="text-danger"><BsCurrencyRupee></BsCurrencyRupee> {i.price + 30}</s></b> </p>
                                                        <div className="w-100 text-center">
                                                            <Link to={`product/${i.id}`} className="">
                                                                <Button className="w-75 mx-auto mb-4 " variant="outline-warning">View Product</Button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>

                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
     else {
        return <div className="d-flex justify-content-center align-items-center h-100"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    }
}
export default Category;