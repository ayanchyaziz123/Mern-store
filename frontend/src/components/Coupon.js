import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listCoupons } from '../actions/productActions'
import Countdown from 'react-countdown';

function Coupon() {
    const dispatch = useDispatch()
    const couponList = useSelector(state => state.couponList)
    const { coupons, coupon_redemptions, loading, error } = couponList
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    

    useEffect(() => {
    
        dispatch(listCoupons());

    }, [dispatch])

    if (!couponList.coupons || !userLogin.userInfo) return null;

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <div>
                    
                    
                {
                        coupon_redemptions.map(coupon => coupon.user_id == userInfo._id  ? (
                            <>
                                <Countdown date={coupon.redemption_date} className=" h4"/>
                                
                            <div className="h5 bg-dark p-2 text-white">You are being discounted {coupon.total_discount} Tk. Coupon code is : {coupon.coupon_code} deadline : {coupon.redemption_date} </div>
                    </>): null) 
                }
                </div>
            )

    )
}

export default Coupon
