import { Link, useLocation } from '@solidjs/router';
import { Component, createSignal, For, onMount } from 'solid-js';
import MyAudio from '@/assets/music.mp3';
import '@/App.css';
import Router from './Router';

const paths = [
	{
		title: 'Profile',
		icon: 'mdi mdi-account-settings-outline',
		path: '/',
	},
	{
		title: 'Contact',
		icon: 'mdi mdi-phone-outline',
		path: '/contact',
	},
	{
		title: 'Project',
		icon: 'mdi mdi-book-outline',
		path: '/project',
	},
	{
		title: 'About',
		icon: 'mdi mdi-view-gallery-outline',
		path: '/about',
	},
];

const App: Component = () => {
	const location = useLocation();
	const [audio, setAudio] = createSignal<any>();
	const [audioPlaying, setAudioPlaying] = createSignal<boolean>(false);

	function handleMusic() {
		if (audioPlaying()) {
			audio().pause();
		} else {
			audio().play();
		}
		setAudioPlaying(!audioPlaying());
	}

	onMount(() => {
		setAudio(new Audio(MyAudio));
	});

	return (
		<div class="min-h-screen bg-gray-50">
			<div class="nav h-15 px-6 flex z-20 flex-row items-center bg-white shadow lg:(fixed left-0 bottom-0 top-0 w-18 h-screen flex-col py-10 justify-between) transition relative">
				<div class="flex-1">
					<Link
						href="/"
						style={{ 'font-family': 'cursive' }}
						class="text-blue-500 text-2xl text-shadow transform lg:(-rotate-90 inline-block mt-8)"
					>
						Alfiansyah
					</Link>
				</div>
				<div class="fixed z-20 bottom-5 left-5 right-5 rounded-full bg-white shadow p-2 flex flex-row justify-evenly px-4 lg:(flex-1 flex-col relative p-0 left-0 right-0 py-4 mb-20 shadow-none)">
					<For each={paths}>
						{(item) => (
							<Link
								href={item.path}
								title={item.title}
								class="px-3 text-gray-600 hover:text-blue-500 transform transition hover:-translate-y-1 (lg:px-0 py-3)"
								classList={{ '!text-blue-500': location.pathname == item.path }}
							>
								<i class={'mdi text-2xl ' + item.icon}></i>
							</Link>
						)}
					</For>
				</div>
				<div class="flex-1 text-right lg:(absolute bottom-5 left-0 right-0 flex items-center justify-center)">
					<button class="outline-none">
						<i class="text-xl mdi mdi-weather-sunny text-yellow-500"></i>
					</button>
				</div>
			</div>
			<div class="px-4 pb-16 py-10 lg:(ml-18 py-0 pb-0) lg:min-h-screen view">
				<Router></Router>
			</div>
			<button
				class="outline-none border-gray-800 border-2 fixed lg:top-10 top-20 right-5 w-10 h-10 flex items-center justify-center rounded-full transition bg-red-100"
				onClick={handleMusic}
				classList={{ '!bg-red-500 animate-spin': audioPlaying() }}
			>
				<i class="mdi mdi-access-point text-xl"></i>
			</button>
		</div>
	);
};

export default App;
