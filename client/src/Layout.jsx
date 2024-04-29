import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function Layout() {
	return (
		<main>
			<Navbar />
			<Outlet />

			<Footer />
		</main>
	);
}
