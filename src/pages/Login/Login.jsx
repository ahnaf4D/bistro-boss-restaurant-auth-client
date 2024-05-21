import LoginImage from '../../assets/others/authentication2.png';
import LoginBg from '../../assets/others/authentication.png';

const Login = () => {
  return (
    <div
      className='min-h-screen bg-no-repeat bg-cover flex items-center justify-center'
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className='bg-white bg-opacity-90 rounded-lg shadow-2xl flex items-center justify-center flex-col lg:flex-row p-8'>
        <div className='hidden lg:block lg:w-1/2'>
          <img
            src={LoginImage}
            className='object-cover w-full h-full rounded-lg'
            alt='Login'
          />
        </div>
        <form className='w-full lg:w-1/2 p-6'>
          <h1 className='text-3xl mb-5 text-center font-bold text-gray-700'>
            Login
          </h1>
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
          <div className='flex items-center justify-center'>
            <input
              type='submit'
              value='Login'
              className='btn btn-wide text-xl text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg px-6 py-2'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
