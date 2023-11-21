import React from 'react';
import './Modal.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Modal = ({ style }) => {
	const basketState = useSelector((state) => state.basket);
	const navigate = useNavigate();
	const totalExpense = basketState.reduce(
		(total, item) => total + parseFloat(item.price) * item.count,
		0
	);
	return (
		<div
			style={style}
			className='modal-container'>
			<div className='basket-title-container'>
				<h1 className='basket-title'>Basket</h1>
			</div>
			<div className='basket-list-container'>
				<ul className='basket-list'>
					{basketState.map((item) => (
						<>
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
											{`$ ${item.price} X ${
												item.count
											} = $ ${(
												parseFloat(item.price) *
												parseInt(item.count)
											).toLocaleString()}`}
										</span>
									</div>
								</div>
							</div>
							<hr />
						</>
					))}
				</ul>
			</div>
			<div className='calculation-result-with-buy-btn'>
				<div className='expense-calculator-container'>
					<div>Total Expense: $ {totalExpense.toLocaleString()}</div>
				</div>
				<button onClick={() => navigate('/basket')}>
					Move to Basket
				</button>
			</div>
		</div>
	);
};

export default Modal;
