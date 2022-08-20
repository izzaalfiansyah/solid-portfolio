import { useParams } from '@solidjs/router';
import { Component, For, Show } from 'solid-js';
import { project } from './Project';

export const lang = {
	codeigniter: {
		web: 'https://codeigniter.com',
		img: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
	},
	laravel: {
		web: 'https://laravel.com',
		img: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
	},
	react: {
		web: 'https://reactjs.org',
		img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
	},
	vue: {
		web: 'https://vuejs.org',
		img: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
	},
	svelte: {
		web: 'https://svelte.dev',
		img: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
	},
};

const ProjectDetail: Component = () => {
	const params = useParams();
	const item = project.filter((p) => p.name.toLowerCase().replace(/ /gi, '-') == params.slug)?.[0];

	return (
		<>
			<div class="lg:min-h-100vh flex flex-wrap justify-center -mx-4 lg:py-10">
				<div class="w-full text-center mb-5 mt-5 px-4">
					<div class="text-blue-500 font-bold text-3xl">{item.name}</div>
					<div>{item.description}</div>
				</div>
				<div class="lg:w-5/6 w-full p-4 relative">
					<div class="text-right mb-4">
						<Show when={item.link}>
							<a
								href={item.link}
								target="_blank"
								class="uppercase mr-4 flex items-center bg-white rounded-full shadow h-10 px-4 p-1 hover:bg-blue-500 hover:text-white transition mt-4 float-left"
							>
								<i class="mdi mdi-link-variant"></i> Preview
							</a>
						</Show>
						<For each={item.language.length ? item.language : []}>
							{(item) => (
								<a
									href={lang[item.toLowerCase() as 'svelte'].web}
									class="bg-white rounded shadow p-1 inline-block text-center ml-2 w-10 h-10 hover:shadow-blue-500 transition mt-4"
								>
									<img
										src={lang[item.toLowerCase() as 'svelte'].img}
										alt=""
										class="h-full inline-block"
									/>
								</a>
							)}
						</For>
					</div>
					<div
						class="rounded lg:pb-4 flex flex-wrap lg:flex-nowrap overflow-x-auto"
						classList={{ 'lg:justify-center': item.photo.length == 1 }}
					>
						<For each={item.photo}>
							{(p) => (
								<img
									src={'/src/assets/project/' + p}
									class="rounded lg:w-2/3 lg:mr-4 lg:mb-0 mb-4 shadow lg:h-350px object-cover"
								/>
							)}
						</For>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectDetail;
