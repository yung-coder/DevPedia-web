import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='/about-us'
						element={<AboutUs />}
					/>
					<Route
						path='/services'
						element={<Services />}
					/>
					<Route
						path={'/contact-us'}
						element={<Contact />}
					/>
				</Route>
			</Routes>
			{/* <Navbar />
      <HomePage />
      <Footer /> */}
		</>
	);
}

export default App;
