import React from 'react'
import {Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../components/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../components/redux/slices/wishlistSlice';
import { addToCartList } from '../components/redux/slices/cartSlice';
import './home.css'

function Home() {
  //calling useFetch hook
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch =useDispatch()


  return (
      <Row className='p-4' style={{marginTop:"100px"}}>
       { data?.length>0?
        data.map((item)=>( <Col sm={12} md={4} lg={3} className='mb-5'>
        <Card className=' rounded-3 p-2 bg-primary text-light p-2 h-100 ' style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <Card.Img variant="top" src={item.thumbnail} className=' style rounded'  style={{height:"200px"}}/>
      <Card.Body>
        <p>Category : {item.category} </p>
        <Card.Title style={{overflowY:"hidden"}}>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,50)}...</p>
         <p>Brand : {item.brand}</p>
         <p>Rating : {item.rating} / 5</p>
         <p><b>Price : ₹{item.price}</b></p>
        </Card.Text>

        <div className='d-flex align-items-center justify-content-between'>
          <Button  onClick={()=>dispatch(addToWishList(item))} variant="outline-danger rounded-3 "><i  class=" style1 fa-solid fa-heart"></i></Button>
          <Button  onClick={()=>dispatch(addToCartList(item))} variant="outline-success rounded-3"><i class="style1 fa-solid fa-cart-shopping"></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>))
      : 
      <div  className='d-flex justify-content-center align-items-center flex-column '>
      <img className='w-25' src="https://cdn.shopify.com/s/files/1/0390/2985/files/loading_112729a5-01d5-4013-a39e-11375d9d4d6a.gif?v=1633414770" alt="no image" />
    
     </div>
        }
      </Row>
  )
}

export default Home