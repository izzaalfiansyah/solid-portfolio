/* @refresh reload */
import { render } from 'solid-js/web';

import 'virtual:windi.css';
import '@/index.css';
import '@mdi/font/css/materialdesignicons.css';
import App from '@/App';
import { Router, hashIntegration } from '@solidjs/router';

render(
	() => (
		<Router source={hashIntegration()}>
			<App />
		</Router>
	),
	document.getElementById('root') as HTMLElement,
);
