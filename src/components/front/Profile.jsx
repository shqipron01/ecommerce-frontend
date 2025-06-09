import React, { useState } from 'react'
import Layout from './common/Layout'
import Sidebar from './common/Sidebar'
import { Link } from 'react-router-dom'
import UserSidebar from './common/UserSidebar'
import { useForm } from 'react-hook-form'
import { apiUrl, userToken } from '../common/http'
import { toast } from 'react-toastify'

const Profile = () => {

  const [loading, setLoading] = useState(true);

  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState:{ errors },
  } = useForm({
    defaultValues: async () => {
      const response = await fetch(`${apiUrl}/get-profile-details`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${userToken()}`
        }
      });
      const result = await response.json();
      setLoading(false);
      reset ({
        name: result.name,
        email: result.email,
        address: result.address,
        mobile: result.mobile,
        city: result.city,
        state: result.state,
        zip: result.zip
      });
    }
  });

  const updateAccount =async (data) => {
    const response = await fetch(`${apiUrl}/update-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${userToken()}`
        },
        body: JSON.stringify(data)
      });
    const result = await response.json();
    if (result.status === 200) {
      toast.success(result.message);
    } else {
      const formErrors = result.errors;
      Object.keys(formErrors).forEach(field => {
        setError(field, { message: formErrors[field][0] });
      });
    }
  }

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-between mt-5 pb-3'>
            <h4 className='h4 pb-0 mb-0'>My Account</h4>
          {/*  <Link to="" className='btn btn-primary'>Button</Link> */}
          </div>
          <div className='col-md-3'>
            <UserSidebar />
          </div>
          <div className='col-md-9'>
            {
              loading == true && <Loader/>
            }
            {
            loading == false &&
            <form onSubmit={handleSubmit(updateAccount)}>
            <div className='card shadow'>
                <div className="card-body p-4">
                  <div className='row'>
                    <div className='mb-3 col-md-6'>
                      <label htmlFor="name" className='form-label'>Name</label>
                      <input 
                      {
                        ...register('name', {required: 'The name field is required',})
                      }
                        type="text" 
                        id='name' 
                        className={`form-control ${errors.name && 'is-invalid'}`}
                        placeholder='Enter your name' />
                        {errors.name && (<p className='text-danger'>{errors.name?.message}</p>)}
                    </div>
                     <div className='mb-3 col-md-6'>
                      <label htmlFor="email" className='form-label'>Email</label>
                      <input 
                      {
                             ...register('email', {
                                required: "The email field is required",
                                pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                             }
                          })
                      }
                      type="text" 
                      id='email'
                      className={`form-control ${errors.email && 'is-invalid'}`} 
                      placeholder='Enter your email' />
                      {errors.email && (<p className='text-danger'>{errors.email?.message}</p>)}
                    </div>
                  </div>  
                  <div className='row'>
                    <div className='mb-3'>
                      <label htmlFor="address" className='form-label'>Address</label>
                      <textarea 
                      {
                        ...register('address', {required: 'The address field is required'})
                      }
                      id='address' 
                      className={`form-control ${errors.address && 'is-invalid'}`} 
                      placeholder='Enter your address'></textarea>
                      {errors.address && (<p className='text-danger'>{errors.address?.message}</p>)}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='mb-3 col-md-6'>
                      <label htmlFor="mobile" className='form-label'>Mobile</label>
                      <input 
                      {
                        ...register('mobile', {required: 'The mobile field is required'})
                      }
                      type="text" 
                      id='mobile' 
                      className={`form-control ${errors.mobile && 'is-invalid'}`}  
                      placeholder='Enter your mobile' />
                      {errors.mobile && (<p className='text-danger'>{errors.mobile?.message}</p>)}
                    </div>
                    <div className='mb-3 col-md-6'>
                      <label htmlFor="city" className='form-label'>City</label>
                      <input 
                      {
                        ...register('city', {required: 'The city field is required'})
                      }
                      type="text" 
                      id='city'
                       className={`form-control ${errors.city && 'is-invalid'}`}  
                      placeholder='Enter your city' />
                      {errors.city && (<p className='text-danger'>{errors.city?.message}</p>)}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='mb-3 col-md-6'>
                      <label htmlFor="state" className='form-label'>State</label>
                      <input 
                      {
                        ...register('state', {required: 'The state field is required'})
                      }
                      type="text" 
                      id='state' 
                       className={`form-control ${errors.state && 'is-invalid'}`}   
                      placeholder='Enter your state' />
                      {errors.state && (<p className='text-danger'>{errors.state?.message}</p>)}
                    </div>
                    <div className='mb-3 col-md-6'>
                      <label htmlFor="zip" className='form-label'>Zip</label>
                      <input 
                      {
                        ...register('zip', {required: 'The zip field is required'})
                      }
                      type="text" 
                      id='zip'
                       className={`form-control ${errors.zip && 'is-invalid'}`}   
                      placeholder='Enter your zip' />
                      {errors.zip && (<p className='text-danger'>{errors.zip?.message}</p>)}
                    </div>
                  </div>
                </div>
            </div>
            <button className='btn btn-primary mt-4 mb-5'>Update</button>
            </form>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile