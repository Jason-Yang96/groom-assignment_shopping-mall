import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './pages/Main';

function App() {
	return (
		<>
			<NavBar />
			<Main />
			<Footer />
		</>
	);
}

export default App;
