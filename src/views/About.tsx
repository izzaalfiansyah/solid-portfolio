import { Link } from '@solidjs/router';
import { Component, For } from 'solid-js';

const About: Component = () => {
	return (
		<>
			<div class="lg:min-h-100vh flex flex-wrap -mx-4 lg:py-10 justify-center">
				<div class="w-full text-center mb-5 mt-5 px-4">
					<div class="text-blue-500 font-bold text-3xl">ABOUT ME</div>
					<div>A short piece about my personal background</div>
				</div>
				<div class="w-full lg:w-4/6 p-4">
					<div class="bg-white dark:bg-gray-900 rounded shadow p-4 mb-4 transition hover:(transform scale-105)">
						<p class="mb-4">
							Hello! My Name is Muhammad Izza Alfiansyah and you can call me Alfian. I Live in
							Jember Regency, East Java, Indonesia. I started programming when I was in high school
							at{' '}
							<a href="https://esekmaprima.com" target="_blank" class="text-purple-500">
								SMK PGRI 5 Jember
							</a>
							, The most meritorious place in my ability development.
						</p>
						<p>
							I am very enthusiastic about learning new things in the world of technology. Now, I
							work as a fullstack developer at{' '}
							<a href="https://fopegram.id" target="_blank" class="text-purple-500">
								Fopegram
							</a>
							. I am also a student who is studying at{' '}
							<a href="https://polije.ac.id" target="_blank" class="text-purple-500">
								Politeknik Negeri Jember
							</a>
							.
						</p>
					</div>
					<div class="p-4 shadow bg-white dark:bg-gray-900 rounded mb-4 transition hover:(transform scale-105)">
						Some of my skills are:
						<div class="grid lg:grid-cols-3 md:grid-cols-2 mt-3 mb-3">
							<For
								each={[
									'HTML',
									'CSS',
									'JS',
									'PHP',
									'DART',
									'CodeIgniter',
									'Laravel',
									'Bootstrap',
									'Tailwind',
									'React',
									'Vue',
									'Svelte',
									'Flutter',
								]}
							>
								{(item) => (
									<div>
										<li>{item}</li>
									</div>
								)}
							</For>
						</div>
						You can see my experience at{' '}
						<Link href="/project" class="text-purple-500">
							project
						</Link>
						.
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
