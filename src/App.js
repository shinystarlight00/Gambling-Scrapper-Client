import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Stores
import { setWeb } from './store/reducers/webReducer';
import { setUser } from './store/reducers/userReducer';

// Components
import Header from './components/header';
import Nav from './components/nav';

// Pages
import Dashboard from './pages/dashboard';
import Login from './pages/login';

export default function App() {

	const dispatch = useDispatch();

	const user = useSelector(state => state.user);
	const web = useSelector(state => state.web);

	let token = localStorage.getItem("access_token");

	useEffect(() => {
		if (token && !user) {
			fetch(process.env.REACT_APP_API + "/auth/check-login", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					"access-token": token
				}
			})
			.then(data => data.json())
			.then(data => {
				if (data.success) dispatch(setUser(data.user));
				else localStorage.removeItem("access_token");
			});
		}
	}, [user]);

	if (!user) return <Login />;
	return (
		<div id="main">
			<Nav
				web={web}
				set={name => {
					dispatch(setWeb(name));
					localStorage.setItem("web", name);
				}}
			/>

			<main>
				<Header title={web + " Statistics"} />

				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="*" element={<Dashboard />} />
				</Routes>
			</main>
		</div>
	);
}