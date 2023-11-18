import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
// import { fetchAdd } from '../features/product/productSlice';
import './Main.css';
// import { useDispatch } from 'react-redux';

const Main = () => {
	// const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	// P1: infinite re-rendering => S: input empty dependency array
	useEffect(() => {
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		try {
			const request = await axios.get();
			setProducts(request.data.slice(1, 2)); // log: products array(category, description, id, image-url, price, rating, title) * Don't forget these are all str values
			// P3: map method not able to read 1 obj => using slice and take array with one obj inside
		} catch (error) {
			console.error('Error: fetching products', error);
		}
	};
	return (
		<section>
			<h1>Products</h1>
			<div>
				<span>All</span>
				<span>Electronics</span>
				<span>Jewelry</span>
				<span>Menswear</span>
				<span>Womenswear</span>
			</div>
			{/* rendering card with img, title, $ price */}
			{/* P2: crazy css. too many product. => S: take just one and map it all */}
			<ul className='products-table'>
				{products.map((product) => (
					<div
						className='product'
						key={product.id}>
						<img
							src={product.image}
							alt='product'
						/>
						<span>{product.title}</span>
						<div>
							<button>장바구니에 담기</button>
							<span>{`$ ${product.price}`}</span>
						</div>
					</div>
				))}
			</ul>
		</section>
	);
};

export default Main;
