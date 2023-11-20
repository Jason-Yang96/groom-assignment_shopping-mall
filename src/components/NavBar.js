import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { GrLogin } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const NavBar = () => {
	const basketCount = useSelector((state) => state.basket.length);
	// console.log(basketCount);
	const linkStyle = {
		textDecoration: 'none',
		color: 'inherit',
	};
	return (
		<header>
			<Link
				to='/'
				style={linkStyle}>
				<h1 className='home'>Shop-It-Mall</h1>
			</Link>
			<div className='icon-container'>
				<div className='basket-container'>
					{/* Prb11: When basketCount === 0, the box don't need to exist
					 => Sol: Using conditional operator with inline style*/}
					<div
						className='basket-count'
						style={{ display: basketCount ? 'flex' : 'none' }}>
						{basketCount === 0 ? null : basketCount}
					</div>
					<MdOutlineShoppingCart className='basket-icon' />
					<Modal className={'modal'} />
				</div>
				<Link
					to='/login'
					style={linkStyle}>
					<RxAvatar />
				</Link>
				<GrLogin />
			</div>
		</header>
	);
};

export default NavBar;
