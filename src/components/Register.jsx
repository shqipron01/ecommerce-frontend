import React from 'react'
import Layout from './common/Layout'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiUrl } from './common/http';

const Register = () => {
    const { login } = useContext(AdminAuthContext);
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const navigate = useNavigate();

     const onSubmit = async (data) => {
    
            const res = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);

                if (result.status === 200) {
                    toast.success(result.message);
                    navigate('/account/login');
                } else {
                    //toast.error(result.message);
                    const formErrors = result.errors;
                    Object.keys(formErrors).forEach((field) => {
                        setError(field, {message: formErrors[field][0]});
                    })
                }
            })
        };

  return (
    <Layout>
      <div className='container d-flex justify-content-center py-5'>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='card shadow border-0 login'>
                        <div className='card-body p-4'>
                            <h3 className='border-bottom pb-2 mb-3'>Register</h3>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Name</label>
                                <input
                                    type="text"
                                    {
                                        ...register('name', {
                                            required: "The name field is required"
                                        })
                                    }
                                    className={`form-control ${errors.name && 'is-invalid'}`}
                                    placeholder='Enter your name'
                                />
                                { typeof errors.name?.message === 'string' && 
                                    <p className='invalid-feedback'>{errors.name.message}</p>
                                }
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Email</label>
                                <input
                                    type="email"
                                    {
                                        ...register('email', {
                                            required: "The email field is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })
                                    }
                                    className={`form-control ${errors.email && 'is-invalid'}`}
                                    placeholder='Enter your email'
                                />
                                { typeof errors.email?.message === 'string' && 
                                    <p className='invalid-feedback'>{errors.email.message}</p>
                                }
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="password" className='form-label'>Password</label>
                                <input
                                    type="password"
                                    {...register("password", { required: "The password is required." })}
                                    className={`form-control ${errors.password && 'is-invalid'}`}
                                    placeholder='Enter your password'
                                />
                                { typeof errors.password?.message ==='string' && 
                                    <p className='invalid-feedback'>{errors.password?.message}</p>
                                }
                            </div>

                            <button className='btn btn-secondary w-100'>Register</button>

                            <div className='d-flex justify-content-ceneter py-4 pb-2'>
                                Already have an account? &nbsp;<Link to="/account/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </form>
      </div>
    </Layout>
  )
}

export default Register