import React,{ useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/actions/cartActions';
const FoodCard = ({ food }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const addToCart = () => {
    dispatch(addProduct(
      { 
        id: food.id,
        name: food.name,
        price: food.price,
        count: count,
    }
  ))
}
    return (
        <div className="card card-sm card-product-grid" key={ Math.random().toString(36).substr(2, 9) } >
            <a href="#" class="img-wrap"> <img src="images/items/5.jpg"/> </a>
            <figcaption class="info-wrap">
                <a href="#" class="title">{food.name}</a>
                <div class="price mt-1">  <NumberFormat value={food.price} displayType={'text'} thousandSeparator={true} suffix={'Ar'} /> </div>
            </figcaption>
            <button type="button" onClick={() => addToCart()} className="btn btn-primary btn-sm">Add to cart</button>
        </div>
        
    );
};
export default FoodCard;
