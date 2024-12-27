import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./store";
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
			<ToastContainer
				autoClose={7_000}
				newestOnTop={true}
			/>
		</BrowserRouter>
	</Provider>
);