import React,{useState} from 'react';
import { LoginImage, Logo, MailIcon, GoogleIcon, FacebookIcon } from '../EntryFile/imagePath'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';


const SignInPage = (props) => {

    const[eye,seteye]=useState(true);


    const onEyeClick = () =>{
        seteye(!eye)
        }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password must not exceed 20 characters'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });


    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        props.history.push('/dream-pos/dashboard')
    };

    return (
        <>
            <div className="main-wrapper">
                <Helmet>
                    <title>SignIn - Dream POS</title>
                    <meta name="description" content="SignIn page" />
                </Helmet>
                <div className="account-content">
                    <div className="login-wrapper">
                        <div className="login-content">
                            <div className="login-userset">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="login-logo">
                                        <img src={Logo} alt="img" />
                                    </div>
                                    <div className="login-userheading">
                                        <h3>Sign In</h3>
                                        <h4>Please login to your account</h4>
                                    </div>
                                    <div className="form-login">
                                        <label>Email</label>
                                        <div className="form-addons">
                                            <input
                                                type="text"
                                                {...register('email')}
                                                className={` ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Enter your email address"
                                                defaultValue="admin@dreamguystech.com"
                                            />
                                            <img src={MailIcon} alt="img" />
                                            <div className="invalid-feedback">{errors.email?.message}</div>

                                        </div>
                                    </div>
                                    <div className="form-login">
                                        <label>Password</label>
                                        <div className="pass-group">
                                            <input
                                                type={eye ? "password" : "text"}
                                                className={` ${errors.password ? 'is-invalid' : ''}`}
                                                placeholder="Enter your password"
                                                {...register('password')}
                                                defaultValue={123456}
                                            />
                                            <span  onClick={onEyeClick} className={`fas toggle-password ${eye ? "fa-eye-slash":"fa-eye"} `} />
                                            <div className="invalid-feedback">{errors.password?.message}</div>

                                        </div>

                                    </div>
                                    <div className="form-login">
                                        <div className="alreadyuser">
                                            <h4>
                                                <Link to="/forgetPassword" className="hover-a">
                                                    Forgot Password?
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="form-login">
                                        <button className="btn btn-login" >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                                <div className="signinform text-center">
                                    <h4>
                                        Don’t have an account?{" "}
                                        <Link to="/signUp" className="hover-a">
                                            Sign Up
                                        </Link>
                                    </h4>
                                </div>
                                <div className="form-setlogin">
                                    <h4>Or sign up with</h4>
                                </div>
                                <div className="form-sociallink">
                                    <ul>
                                        <li>
                                            <Link to="/signin">
                                                <img
                                                    src={GoogleIcon}
                                                    className="me-2"
                                                    alt="google"
                                                />
                                                Sign Up using Google
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signin">
                                                <img
                                                    src={FacebookIcon}
                                                    className="me-2"
                                                    alt="google"
                                                />
                                                Sign Up using Facebook
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="login-img">
                            <img src={LoginImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignInPage;