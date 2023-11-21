import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCartList } from '../components/redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const cartlistArray = useSelector((state)=>state.cartReducer)
  console.log(cartlistArray);

  const dispatch =useDispatch()

  const [total,setTotal]=useState(0)

  const navigate = useNavigate()

  //function to find sum of given array

  const getTotal =()=>{
    setTotal(cartlistArray.map(item=>item.price).reduce((p1,p2)=>p1+p2,0))
  }
  console.log(total);
  
    useEffect(()=>{
      getTotal()
    },[cartlistArray])

    const handleCart = () => {
      toast.success('Thank you.! Your order has been placed')
      dispatch(emptyCart()) // Call the action creator function
      navigate('/')


    }

 
  return (
    <div className='p-4' style={{marginTop:"100px"}}>


{cartlistArray?.length>0?
    <div className="row ">
      
        <div className="col-md-6 d-flex justify-content-center justify-content-center flex-column">
          <table className='table shadow border '>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price(₹)</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cartlistArray?.map((item,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.thumbnail} style={{width:"100px"}} alt="" /></td>
                  <td> ₹{item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCartList(item.id))} variant='outline-danger' className='rounded'><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-md-5 d-flex justify-content-center justify-content-center flex-column">
          <div className='border shadow p-5'>
            <h3 className='text-primary text-center mb-5' style={{overflowY:"hidden"}}><b>Cart Summary</b></h3>
            <h5 style={{overflowY:"hidden"}}>Total Number of Products: <span className='text-success fw-border fs-2'><b>{cartlistArray.length} </b></span></h5>
            <h5 style={{overflowY:"hidden"}}>Price: <span className='text-success fw-border fs-2'> <b> ₹ {total}</b></span></h5>
            <button onClick={handleCart}  className='btn btn-outline-warning w-100 mt-5 rounded'>Proceed to Checkout</button>
            </div>
         
        </div>
        

       

    </div>
    
  
    
    :<div  className='d-flex justify-content-center align-items-center flex-column'>
    <img className='h-50' src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="no image" />
    <b className='mb-5 fs-3'>Your Cart is Empty</b>
    <button className='btn btn-primary rounded-3 mb-5'><Link className='text-light' style={{textDecoration:"none"}} to={'/'}>Back to Home</Link></button>
   </div>

    }



    </div>






  )
}

export default Cart