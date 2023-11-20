// dispatched from NavBar, after clicking the avatar
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {
	auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from './filebase'; // Adjust the path accordingly

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	// const [isLogged, setIsLogged] = useState(false);

	const navigate = useNavigate();

	const handleCreateAccount = async () => {
		try {
			setErrorMsg('');
			await createUserWithEmailAndPassword(auth, email, password);
			setEmail('');
			setPassword('');
		} catch (err) {
			//console.log(err.code);
			switch (err.code) {
				case 'auth/weak-password':
					setErrorMsg('More than 6 digits');
					alert(errorMsg);
					break;
				case 'auth/invalid-email':
					setErrorMsg('Wrong E-Mail Address');
					alert(errorMsg);
					break;
				case 'auth/email-already-in-use':
					setErrorMsg('Alreay Registed Account');
					alert(errorMsg);
					break;
				default:
					setErrorMsg('Logging-In Error');
					alert(errorMsg);
			}
		}
	};

	const handleLogin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log('Logged in successfully');
			// setIsLogged(true);
			navigate('/');
		} catch (error) {
			console.error('Error logging in:', error.message);
		}
	};

	return (
		<div className='log-in-card'>
			<h2>Login</h2>
			<form className='log-in-form'>
				<label>Email:</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Password:</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					type='button'
					onClick={handleLogin}>
					Login
				</button>
				<button
					type='button'
					onClick={handleCreateAccount}>
					Create
				</button>
			</form>
		</div>
	);
};

export default Login;
