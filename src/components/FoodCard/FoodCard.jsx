import PropTypes from 'prop-types';
const FoodCard = ({ food }) => {
  return (
    <div>
      <div className='card card-compact  bg-gray-200 p-4 shadow'>
        <figure className='relative'>
          <img src={food.image} alt='Shoes' width={275} height={183} />
          <p className='absolute top-4  p-2 ml-48 rounded text-xl bg-gray-800 text-white'>
            ${food.price}
          </p>
        </figure>
        <div className='card-body text-center'>
          <h2 className='card-title text-center mx-auto'>{food.name}</h2>
          <p>{food.recipe}</p>
          <div className='card-actions justify-center '>
            <button className='btn text-orange-400 bg-gray-700 hover:bg-slate-200 hover:text-black'>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
// Props types
FoodCard.propTypes = {
  food: PropTypes.object,
};
