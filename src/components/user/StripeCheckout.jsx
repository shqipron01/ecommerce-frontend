import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl, userToken } from '../common/http';
import { toast } from 'react-toastify';

const StripeCheckout = ({ cartItems }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${apiUrl}/make-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken()}`
        },
        body: JSON.stringify({
          product_id: cartItems.map(item => item.id)
        })
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('Something went wrong with payment processing');
      }
    } catch (error) {
      toast.error('Payment failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      disabled={loading}
      className="btn btn-primary"
    >
      {loading ? 'Processing...' : 'Pay with Stripe'}
    </button>
  );
};

export default StripeCheckout;