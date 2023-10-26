import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { BsCartCheck } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { get } from './feature/product_slice'


const Productview = () => {

    const dispatch = useDispatch()
    

    let [single, setsingle] = useState([])
    let [ola, setola] = useState([])
    let [thumb, setthumb] = useState('')

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then((res) => {
                setsingle(res.data);
                // console.log(res.data);
                setola(res.data.images)
                setthumb(res.data.thumbnail)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    let hello = (e) => {
        let value = e.target.src;
        setthumb(value)
    }
    let product = () => {
        dispatch(get(single))

    }

    let [cnt, setcnt] = useState(0)
    return (
        <>
            <Container>
                <Row className="my-5 bg  align-items-center " >
                    <Col lg={4} className="ms-auto p-0" >
                        <div className="set">
                            <img src={thumb} alt="" className="img-fluid " />
                        </div>
                        <div className="d-flex justify-content-between btns bg" >
                            {
                                ola.map((i) => {
                                    return (
                                        <div key={i} className="mini_img overflow-scroll" ><img src={i} alt="" onClick={(e) => { hello(e) }} /> </div>
                                    )
                                })
                            }

                        </div>
                    </Col>
                    <Col className=" me-auto  p-4" lg={5} >
                        <h1 className="">{single.title}</h1>
                        <p className="fs-5">{single.description}</p>
                        <span className="border border-black p-2">{single.rating}<AiFillStar className="text-warning"></AiFillStar> | 20 Ratings</span><hr />
                        <p className="fs-4"><b><BiRupee ></BiRupee>{single.price} </b> <span className="">MRP<BiRupee></BiRupee><s>{(single.price * single.discountPercentage / 100) + single.price}</s> </span><span className="text-danger">({single.discountPercentage} % OFF) </span> </p>
                        <p className="text-success">inclusive of all taxes</p>
                        <p className="fs-4"><b> <span className="">{single.stock} item</span></b> <Button variant="outline-info">In Stock</Button></p>
                        <button className="qntbtn" onClick={() => { if (cnt > 0) { setcnt(cnt - 1) } else { } }}>-</button><span className="fs-4 p-3 text-danger">{cnt}</span> <button className="qntbtn" onClick={() => { if (cnt < single.stock) { setcnt(cnt + 1) } }}>+</button><br />
                        <div>
                            <h5 className="mt-3">Color :</h5>
                            <div className="d-flex ">
                                <span className="color bg-info"></span>
                                <span className="color ms-2 bg-success"></span>
                                <span className="color ms-2 bg-warning"></span>
                            </div>
                        </div><hr />
                        <Button className="mt-5" variant="outline-success" onClick={product}><BsCartCheck className='me-2 fs-5'></BsCartCheck> Add to cart</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Productview;