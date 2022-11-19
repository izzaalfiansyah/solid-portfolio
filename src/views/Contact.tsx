import { Component, For } from 'solid-js';

export const social_media = [
	{
		title: 'Facebook',
		link: 'https://facebook.com/profile.php?id=100027236859562',
		icon: 'facebook text-blue-500',
	},
	{
		title: 'Instagram',
		link: 'https://www.instagram.com/izzaalfiansyah_/',
		icon: 'instagram text-purple-500',
	},
	{
		title: 'Whatsapp',
		link: 'https://api.whatsapp.com/send?phone=6281231921351',
		icon: 'whatsapp text-green-500',
	},
	{
		title: 'Github',
		link: 'https://github.com/izzaalfiansyah',
		icon: 'github text-gray-800 dark:text-white',
	},
	{
		title: 'Email',
		link: 'mailto:iansyah724@gmail.com',
		icon: 'email text-red-500',
	},
];

const Contact: Component = () => {
	return (
		<>
			<div class="lg:min-h-100vh flex flex-wrap -mx-4 lg:py-10">
				<div class="w-full text-center mb-5 mt-5 px-4">
					<div class="text-blue-500 font-bold text-3xl">CONTACT</div>
					<div>The places where you can find me</div>
				</div>
				<div class="flex w-full flex-wrap">
					<div class="lg:w-1/2 w-full p-4">
						<For each={social_media}>
							{(item) => (
								<a
									target="_blank"
									href={item.link}
									class="bg-white dark:bg-gray-900 rounded mb-3 shadow p-4 flex transition hover:(transform scale-103)"
								>
									<div class="w-40px pr-3 text-center">
										<i class={'mdi mdi-' + item.icon}></i>
									</div>
									<div>{item.title}</div>
								</a>
							)}
						</For>
					</div>
					<div class="lg:w-1/2 w-full p-4">
						<div class="bg-white dark:bg-gray-900 shadow p-4 rounded">
							<div class="text-center">
								Dusun Karanganyar RT002/RW008, Desa Karangrejo, Kecamatan Gumukmas, Kabupaten Jember
							</div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.9330243867967!2d113.41835782915234!3d-8.329396672666993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ca3012ac46e0bfa!2zOMKwMTknNDUuOCJTIDExM8KwMjUnMDguMSJF!5e0!3m2!1sen!2sid!4v1649400288617!5m2!1sen!2sid"
								class="h-300px w-full mt-4 shadow"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
