import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import Contact from './views/Contact';
import Index from './views/Index';
import Project from './views/Project';
import ProjectDetail from './views/ProjectDetail';

const Router: Component = () => {
	return (
		<Routes>
			<Route path="/" component={Index}></Route>
			<Route path="/contact" component={Contact}></Route>
			<Route path="/project" component={Project}></Route>
			<Route path="/project/:slug" component={ProjectDetail}></Route>
		</Routes>
	);
};

export default Router;
