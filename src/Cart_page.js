import { Col, Container, Row, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, removeitem } from "./feature/product_slice"
const Cart_page = () => {
    let single_product = useSelector((state) => state.cart.cart);
    let bills = useSelector((state) => state.cart.bill)
    // console.log(bills);
    // console.log(single_product);
    let dispatch = useDispatch()
    let place_order =()=>{
        
        alert()
    }


    return (
        <>
            <Container>
                <h1>Your Cart</h1>
                <Row className="cart_row" >
                    <Col md={9} className="final_bill">
                        <table className="table abc   w-100 " >
                            <thead>
                                <tr className="sticky-top">
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {single_product.map((item, index) => {

                                    return (
                                        <tr key={item.id} className="  align-items-center" >
                                            <td className=""> <img src={item.thumbnail} alt="" className="photo" /></td>
                                            <td valign="middle">{item.title}</td>
                                            <td valign="middle">{item.price}</td>
                                            <td valign="middle">
                                                <button className="qntbtn" onClick={() => { dispatch(decrement(index)) }}>-</button><span className="fs-4 p-3 text-danger">{item.qty}</span> <button className="qntbtn" onClick={() => { dispatch(increment(index)) }}>+</button>   
                                            </td>
                                            <td valign="middle">${item.total}</td>
                                            <td valign="middle">
                                                <Button variant="danger" onClick={() => { dispatch(removeitem(index)) }}>Remove</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </Col>
                    <Col md={3} className="final_bill">
                        <div className="cart-summary">
                            <h3>Cart Summary</h3>
                            <p>Subtotal: ${bills}</p>
                            <p>Tax: 18%</p>
                            <p>Total ${bills % 18 + bills}</p>
                            <Button variant="success" onClick={place_order}>Buy Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Cart_page