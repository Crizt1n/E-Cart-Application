import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to access state useSelector hook is used
  const WishList =useSelector((state)=>state.wishlistReducer)  // here the state represent store
  console.log(WishList);
  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);
  return (
    <Navbar expands="lg" className='bg-primary position-fixed top-0 w-100' style={{zIndex:"1"}} >
        <Container>
            <Navbar.Brand > <Link to={'/'} style={{color:"white",textDecoration:"none"}} className='fs-2'><i class="fa-solid fa-bag-shopping"></i> E-Cart </Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto ">
                    <Nav.Link className=' btn border rounded  me-3' > <Link to={'/wishlist'} style={{color:"white",textDecoration:"none"}} ><i class="fa-solid fa-heart " style={{color:"red"}}></i> WishList <Badge className='rounded-4' style={{fontSize:"10px"}} bg="secondary">{WishList.length}</Badge></Link></Nav.Link>
                    <Nav.Link  className='btn border rounded'> <Link to={'/cart'} style={{color:"white",textDecoration:"none"}} ><i class="fa-solid fa-cart-shopping" style={{color:"yellow"}}> </i> Cart <Badge className='rounded-4' style={{fontSize:"10px"}} bg="secondary">{cart.length}</Badge></Link> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header