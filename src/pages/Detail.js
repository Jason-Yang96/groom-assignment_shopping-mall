import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd } from '../features/basket/basketSlice';
import axios from '../api/axios';
import './Detail.css';

const Detail = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState([]);

	const dispatch = useDispatch();
	const handleAddProduct = (id, category, image, title, price) => {
		dispatch(basketAdd({ id, category, image, title, price }));
	};
	console.log(useSelector((state) => state.basket));
	// Prb7: when using useEffect, need to use arrow? if then, why? =>
	// Sol: just do it first. Then think.
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(`/${productId}`);
			// console.log(request);
			setProduct(request.data);
		}
		fetchData();
	}, [productId]);

	return (
		<div className='product-container'>
			<img
				className='product-img'
				src={product.image}
				alt='product'
			/>
			<div className='product-info-container'>
				<div className='product-info'>
					<span>{product.category}</span>
					<span>{product.title}</span>
					<span>{`$ ${product.price}`}</span>
					<p>{product.description}</p>
				</div>
				<div className='basket-buttons'>
					<button
						onClick={() =>
							handleAddProduct(
								product.id,
								product.category,
								product.image,
								product.title,
								product.price
							)
						}>
						Add to Basket
					</button>
					<button onClick={navigate('/basket')}>Go to Basket</button>
				</div>
			</div>
		</div>
	);
};

export default Detail;
export const handleAddProduct = (
	dispatch,
	id,
	category,
	image,
	title,
	price
) => {
	dispatch(basketAdd({ id, category, image, title, price }));
};