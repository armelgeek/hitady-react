import React,{useState,useEffect} from 'react';
import FoodCard from './components/FoodCard'
import { foodData } from '../data/foods.js'
const Foods = () => {
	const [foods,setFoods] = useState([]);
	const getAllFoods = () =>{
		setFoods(foodData);
	}
	useEffect(()=>{
		getAllFoods();
	},[])
    return (
      <div className="row">
		{
			foods.map(food => (
				<div className="col-xl-2 col-lg-3 col-md-4 col-6">
					<FoodCard key={ Math.random().toString(36).substr(2, 9) } food={food}/>
				</div>
			))
		}
		</div>     
    );
};

export default Foods;
