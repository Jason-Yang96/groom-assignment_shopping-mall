import React from 'react';
import './NavBar.css';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { GrLogin } from 'react-icons/gr';

const NavBar = () => {
	return (
		<header>
			<h1>Shop-It-Mall</h1>
			<div>
				<MdOutlineShoppingCart />
				<RxAvatar />
				<GrLogin />
			</div>
		</header>
	);
};

export default NavBar;
