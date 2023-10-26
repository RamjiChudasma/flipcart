import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSearch } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';


const Menu = () => {
  let item = useSelector((state)=>state.cart.cart.length)
  return (
    <>
      <Navbar expand="lg" className="bg-white sticky-top shadow">
        <Container >
          <Navbar.Brand href="#">
            <img src={require('./img/1.png')} alt="" className='img-fluid' width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 fs-6"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link active href="#action1">
                <Link to='home'>Home</Link></Nav.Link>
              <Nav.Link active href="#action2">
                <Link to=''>Shop</Link>
              </Nav.Link>
              <NavDropdown active title="Product" id="navbarScrollingDropdown">
                <NavDropdown.Item href="product">
                  <Link to='product'>Action</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link active href="#">
                Page
              </Nav.Link>
              <Nav.Link active href="#">
                Blog
              </Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              <BiSearch className='fs-5' ></BiSearch>
              <MdOutlineAccountCircle className='ms-2 fs-5'></MdOutlineAccountCircle>
              <AiOutlineHeart className='ms-2 fs-5'></AiOutlineHeart>
              <Link to="cart" className='cart_icon position-relative'>
                <BsCartCheck className='ms-2 fs-5 '></BsCartCheck>
                <span className="position-absolute top-0 start-100 translate-middle p-2 text-white bg-danger border border-light rounded-pill">
                  {item}
                </span>

              </Link>
            </Form>
          </Navbar.Collapse>  
        </Container>
      </Navbar>

      <Carousel className='my-3'>
        <Carousel.Item>
          <img src={require('./img/s1.webp')} alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/s2.webp')} alt="" />


        </Carousel.Item>
        <Carousel.Item>
          <img src={require('./img/s1.webp')} alt="" />

        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default Menu;