import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import Contact from './views/Contact';
import Index from './views/Index';

const Router: Component = () => {
	return (
		<Routes>
			<Route path="/" component={Index}></Route>
			<Route path="/contact" component={Contact}></Route>
		</Routes>
	);
};

export default Router;
