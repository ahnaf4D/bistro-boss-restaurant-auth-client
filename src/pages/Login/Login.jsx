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

const Login = () => {
  const handleLogin = (e) => {
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
      className='min-h-screen bg-no-repeat bg-cover flex items-center justify-center p-4'
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div
        className='rounded-lg shadow-2xl flex items-center justify-center flex-col lg:flex-row p-8 lg:p-12'
        style={{ backgroundImage: `url(${LoginBg})` }}
      >
        <div className='hidden lg:block lg:w-1/2 lg:mr-8'>
          <img
            src={LoginImage}
            className='object-cover w-full h-full rounded-lg'
            alt='Login'
          />
        </div>
        <form className='w-full lg:w-1/2 p-6 lg:p-8' onSubmit={handleLogin}>
          <h1 className='text-3xl mb-6 text-center font-bold text-gray-700'>
            Login
          </h1>
          <div className='mb-5'>
            <label
              htmlFor='emailInput'
              className='block text-sm font-medium text-gray-600 mb-1'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='emailInput'
              placeholder='Enter your Email'
              className='input input-primary w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='passwordInput'
              className='block text-sm font-medium text-gray-600 mb-1'
            >
              Password
            </label>
            <input
              type='password'
              name='pass'
              id='passwordInput'
              placeholder='Enter your Password'
              className='input input-primary w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-600 mb-2'>
              <button>
                <LoadCanvasTemplate />
              </button>
            </label>
            <input
              type='text'
              name='captcha'
              placeholder='Type Valid Captcha'
              className='input input-primary w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:outline-none'
              required
            />
            <button className='btn btn-xs btn-success mt-2'>Validate</button>
          </div>
          <div className='flex items-center justify-center mb-4'>
            <input
              type='submit'
              value='Login'
              className='btn btn-wide text-xl text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg px-6 py-2'
            />
          </div>
          <p className='text-lg font-medium text-center'>
            New User? Go to{' '}
            <Link to='/register' className='link-primary'>
              Signup page
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
