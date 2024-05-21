import LoginImage from '../../assets/others/authentication2.png';
import LoginBg from '../../assets/others/authentication.png';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from 'react-simple-captcha';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(email, password);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      className='min-h-screen bg-no-repeat bg-cover flex items-center justify-center'
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div
        className=' rounded-lg shadow-2xl flex items-center justify-center flex-col lg:flex-row p-8'
        style={{ backgroundImage: `url(${LoginBg})` }}
      >
        <div className='hidden order-2 lg:block lg:w-3/4'>
          <img
            src={LoginImage}
            className='object-cover w-full h-full rounded-lg'
            alt='Login'
          />
        </div>
        <form className='w-full lg:w-1/2 p-6' onSubmit={handleSignUp}>
          <h1 className='text-3xl mb-5 text-center font-bold text-gray-700'>
            Register
          </h1>
          <div className='mb-4'>
            <label
              htmlFor='nameInput'
              className='block text-sm font-medium text-gray-600'
            >
              Your Name
            </label>
            <input
              type='text'
              name='name'
              id='nameInput'
              placeholder='Enter Your Name'
              className='input input-primary w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='emailInput'
              className='block text-sm font-medium text-gray-600'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='emailInput'
              placeholder='Enter your Email'
              className='input input-primary w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='passwordInput'
              className='block text-sm font-medium text-gray-600'
            >
              Password
            </label>
            <input
              type='password'
              name='pass'
              id='passwordInput'
              placeholder='Enter your Password'
              className='input input-primary w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-600'>
              <button>
                <LoadCanvasTemplate />
              </button>
            </label>
            <input
              type='text'
              name='captcha'
              placeholder='type Valid Captcha'
              className='input input-primary w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
            <button className='btn btn-xs btn-success'>Validate</button>
          </div>
          <div className='flex items-center justify-center'>
            <input
              type='submit'
              value='Register'
              className='btn btn-wide text-xl text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg px-6 py-2'
            />
          </div>
          <p className='text-lg font-medium text-center'>
            Old User? Go to{' '}
            <Link to='/login' className='link-primary'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
