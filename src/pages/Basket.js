import React from 'react';
import './Basket.css';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineDelete } from 'react-icons/md';
import { basketDelete } from '../features/basket/basketSlice';

// I have to bring unique value from store. Now the same products was added repeatedly
const Basket = () => {
	const basketState = useSelector((state) => state.basket);
	const dispatch = useDispatch();
	console.log(basketState);

	const handleRemoveItem = (id) => {
		dispatch(basketDelete({ id }));
	};

	return (
		<div className='basket-container'>
			<div className='basket-title-container'>
				<h1 className='basket-title'>Basket</h1>
			</div>
			<div className='basket-list-container'>
				<ul className='basket-list'>
					{basketState.map((item) => (
						<div
							className='basket-list-item-container'
							key={item.id}>
							<div className='item-container'>
								<div className='img-container'>
									<img
										className='item-image'
										src={item.image}
										alt='product'
									/>
								</div>
								<div className='item-info'>
									<span className='item-category'>
										{item.category}
									</span>
									<span className='item-title'>
										{item.title}
									</span>
									<span className='item-price'>
										{item.price}
									</span>
								</div>
							</div>
							<div className='item-counter-container'>
								<button className='count-down'>-</button>
								<span className='count-result'>number</span>
								<button className='count-up'>+</button>
							</div>
							<div className='item-delete-button-container'>
								<button
									className='item-delete-button'
									onClick={() => handleRemoveItem(item.id)}>
									<MdOutlineDelete />
								</button>
							</div>
						</div>
					))}
				</ul>
			</div>
			<div className='expense-calculator-container'>
				<div>expense calculated result</div>
			</div>
		</div>
	);
};

export default Basket;
