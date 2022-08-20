import { Link, useLocation } from '@solidjs/router';
import { Component, createSignal, For, onMount } from 'solid-js';
import MyAudio from '@/assets/Bruno_Mars_-_The_Lazy_Song.mp3';
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
	const [audio, setAudio] = createSignal<HTMLAudioElement>(document.createElement('audio'));
	const [audioPlaying, setAudioPlaying] = createSignal<boolean>(false);
	const [darkMode, setDarkMode] = createSignal<boolean>(false);

	function handleMusic() {
		if (audioPlaying()) {
			audio().pause();
		} else {
			audio().play();
		}
		setAudioPlaying(!audioPlaying());
	}

	function darkInit() {
		if (localStorage.getItem('dark')) {
			setDarkMode(true);
			document.documentElement.classList.add('dark');
		} else {
			setDarkMode(false);
			document.documentElement.classList.remove('dark');
		}
	}

	function toggleDark() {
		setDarkMode(!darkMode());
		if (darkMode()) {
			localStorage.setItem('dark', '1');
		} else {
			localStorage.removeItem('dark');
		}
		darkInit();
	}

	onMount(() => {
		const music = document.createElement('audio');
		music.src = MyAudio;
		music.loop = true;

		setAudio(music);
		darkInit();
	});

	return (
		<div>
			<div class="min-h-screen bg-gray-50 dark:(bg-gray-800 text-white)">
				<div class="nav h-15 px-6 flex z-20 flex-row items-center bg-white dark:bg-gray-900 shadow lg:(fixed left-0 bottom-0 top-0 w-18 h-screen flex-col py-10 justify-between) transition relative">
					<div class="flex-1">
						<Link
							href="/"
							style={{ 'font-family': 'cursive' }}
							class="text-blue-500 text-2xl text-shadow transform lg:(-rotate-90 inline-block mt-8)"
						>
							Alfiansyah
						</Link>
					</div>
					<div class="fixed z-20 bottom-5 left-5 right-5 rounded-full transition bg-white dark:bg-gray-900 shadow p-2 flex flex-row justify-evenly px-4 lg:(flex-1 flex-col relative p-0 left-0 right-0 py-4 mb-20 shadow-none)">
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
						<button class="outline-none" onClick={toggleDark}>
							<i
								class="text-xl mdi text-yellow-500 mdi-weather-night"
								classList={{ 'mdi-weather-sunny': !darkMode() }}
							></i>
						</button>
					</div>
				</div>
				<div class="px-4 pb-16 py-10 lg:(ml-18 py-0 pb-0) lg:min-h-screen view">
					<Router></Router>
				</div>
				<button
					class="outline-none fixed lg:top-10 top-20 right-5 w-10 z-10 h-10 flex items-center justify-center rounded-full transition bg-purple-500 shadow-lg"
					onClick={handleMusic}
				>
					<i
						class="mdi dark:text-gray-900 text-white mdi-access-point text-xl"
						classList={{ 'animate-spin': audioPlaying() }}
					></i>
				</button>
			</div>
			<div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center font-semibold lg:text-5xl text-3xl bg-white dark:bg-gray-900 z-30 text-blue-500 animate-loading pointer-events-none">
				<span class="animate-bounce">Loading...</span>
			</div>
		</div>
	);
};

export default App;
