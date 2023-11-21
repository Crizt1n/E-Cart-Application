import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../components/redux/slices/wishlistSlice';
import { addToCartList } from '../components/redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch =useDispatch()

  const handlewishlist= (item)=>{
    dispatch(addToCartList(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div className='p-4' style={{marginTop:"100px"}}>
      <Row>
   { wishlistArray?.length>0?
   wishlistArray?.map((item)=> ( <Col sm={12} md={4} lg={3} className='mb-5'>
   <Card className='rounded-3 p-2 bg-primary text-light p-2' style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
 <Card.Img variant="top" src={item.thumbnail} className='rounded'  style={{height:"200px"}}/>
 <Card.Body>
   
   <Card.Title style={{overflowY:"hidden"}}>{item.title.slice(0,28)}..</Card.Title>
   <Card.Text>
    <p>{item.description.slice(0,60)}...</p>
    <p><b>Price : ₹{item.price}</b></p>
   </Card.Text>

   <div className='d-flex align-items-center justify-content-between'>
   <Button  variant="outline-danger rounded-3 " onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
     <Button variant="outline-success rounded-3" onClick={()=>handlewishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
   </div>
 </Card.Body>
</Card>
   </Col>)) :
   <div  className='d-flex justify-content-center align-items-center flex-column '>
    <img  src="https://media2.giphy.com/media/fsEqTEoq52XYed6wE6/giphy.gif?cid=ecf05e47f31bo0oncscd48cfs8pffsgj68cpf1nbal2gztjn&ep=v1_gifs_related&rid=giphy.gif&ct=s" alt="no image" />
    <b className='mb-5 fs-3'>Your WishList is Empty</b>
    <button className='btn btn-primary rounded-3 mb-5'><Link className='text-light' style={{textDecoration:"none"}} to={'/'}>Back to Home</Link></button>
   </div>
    }
      </Row>
    
    </div>
  )
}

export default WishList