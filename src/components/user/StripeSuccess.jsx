// StripeSuccess.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiUrl, userToken } from '../common/http';

const StripeSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    const sessionId = params.get('session_id');
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (!sessionId || !orderData) {
      toast.error('Missing data or session.');
      navigate('/checkout');
      return;
    }

    fetch(`${apiUrl}/save-order-stripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken()}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        session_id: sessionId,
        address: orderData.address,
        contact: orderData.contact,
        email: orderData.email,
        name: orderData.name,
        city: orderData.city,
        state: orderData.state,
        zip: orderData.zip,
        mobile: orderData.mobile,
        cart: orderData.cart
      })
    })
    .then(res => res.json())
    .then(result => {
      if (result.status === 200) {
        toast.success('Order completed!');
        navigate(`/order/confirmation/${result.order_id}`);
        localStorage.removeItem('cart');
      } else {
        toast.error(result.message || 'Order failed!');
      }
    })
    .catch(() => {
      toast.error('Unexpected error.');
    });
  }, []);

  return <p className="text-center p-5">Processing your order, please wait...</p>;
};

export default StripeSuccess;
