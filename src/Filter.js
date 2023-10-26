import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { AiOutlineHeart,  } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsCartCheck, BsCurrencyRupee } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";
const Filter= ()=>{
    let [Category, setcategory] = useState([]);
    let [product, setproduct] = useState([]);
    const params=useParams()
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/categories`)
            .then((res) => {
                setcategory(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setproduct(res.data.products === params.item)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    return(
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
                        />
                        <Button variant="outline-danger ">Search</Button>
                    </Form> </h2></Col>
                </Row>
                <Row>
                    <Col lg={2} className="cat_height">
                        <Row className="hold_cat">
                            {
                                Category.map((item,id) => {
                                    return (
                                        <Col key={id} className="cat_details   " lg={12}> <h6 >{item}</h6> </Col>
                                    )
                                })
                            }


                        </Row>
                    </Col>
                    
                    <Col lg={10}>
                        <Row className="my-3 ">
                        
                            {
                                product.map((i) => {
                                    return (
                                        <Col key={i} lg={4} md={6} className=" my-3 ">
                                        
                                            <div className="">
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
                                             
                                                <Link to='product'> <Button className="w-100 " variant="outline-warning">Add  to cart</Button></Link>


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
export default Filter