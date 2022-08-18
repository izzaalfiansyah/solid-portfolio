import { Component } from 'solid-js';
import ProfileImage from '@/assets/me.png';
import CV from '@/assets/cv.pdf';
import { Link } from '@solidjs/router';

const Index: Component = () => {
	const names = ['Muhammad Izza', 'Alfiansyah'];

	return (
		<div class="flex flex-wrap flex-col lg:flex-row items-center lg:h-100vh">
			<div class="lg:flex-1 text-center">
				<div class="text-center lg:text-70px text-38px font-bold">
					{names.map((name) => (
						<div>
							{[...name].map((i) => (
								<span
									class="transition transform hover:(rotate-45 text-blue-500) text-shadow"
									classList={{ 'hover:inline-block': i !== ' ' }}
								>
									{i}
								</span>
							))}
						</div>
					))}
				</div>
				<div class="lg:my-8 my-4 font-semibold text-gray-500">
					FULL STACK <span class="text-blue-500">DEVELOPER</span>
				</div>
				<div class="text-center">
					<a
						href={CV}
						target="_blank"
						class="bg-white shadow text-blue-500 uppercase rounded px-4 p-2 font-semibold m-2 text-sm inline-block transform transition hover:scale-110"
					>
						DOWNLOAD CV
					</a>
					<Link
						href="/about"
						class="bg-blue-500 shadow text-white uppercase rounded px-4 p-2 font-semibold m-2 text-sm inline-block transform transition hover:scale-110"
					>
						CONTACT ME
					</Link>
				</div>
			</div>
			<div class="lg:flex-1 order-first lg:order-last">
				<div class="flex justify-center">
					<img
						src={ProfileImage}
						class="rounded-full lg:w-350px w-200px p-2 border-4 border-blue-500 lg:mb-0 mb-14 cursor-pointer transition transform hover:-translate-y-5"
					/>
				</div>
			</div>
		</div>
	);
};

export default Index;
