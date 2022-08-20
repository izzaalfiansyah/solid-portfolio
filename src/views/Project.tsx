import { Link } from '@solidjs/router';
import { Component, For } from 'solid-js';

export const project = [
	{
		name: 'Arsogi Group',
		description: 'Arsogi Group',
		link: 'http://arsogigrup.com',
		team: false,
		language: ['Laravel', 'Svelte'],
		photo: ['arsogi.png', 'arsogi2.png', 'arsogi3.png'],
	},
	{
		name: 'E-Library',
		description: 'Aplikasi untuk mengakses data peminjaman buku',
		team: false,
		language: ['Laravel', 'Vue'],
		photo: ['e-library.png', 'e-library2.png', 'e-library3.png'],
	},
	{
		name: 'Pasar Online',
		description: 'Pasar Online Tugas Akhir Pemrograman WEB',
		team: true,
		language: ['Codeigniter'],
		photo: ['pasaronline.png', 'pasaronline2.png'],
	},
	{
		name: 'Aset Desa Brebes',
		description: 'Aset tanah PT MG INTERMEDIATAMA',
		link: '',
		team: true,
		language: ['Laravel', 'Vue'],
		photo: ['asetdesa.png', 'asetdesa2.png', 'asetdesa3.png', 'asetdesa4.png'],
	},
	{
		name: 'Jurnal Mengajar',
		description: 'Jurnal mengajar SMKN 2 Jember',
		link: '',
		team: false,
		language: ['Laravel', 'React'],
		photo: ['jurnalmengajar.png', 'jurnalmengajar2.png', 'jurnalmengajar3.png'],
	},
	{
		name: 'SPP SMK PGRI 5 Jember',
		description: 'Sistem Informasi Aplikasi Pembayaran Sekolah SMK PGRI 5 Jember',
		team: true,
		language: ['CodeIgniter'],
		photo: ['sppsmk.png', 'sppsmk2.png'],
	},
	{
		name: 'Fopegram',
		description: 'Aplikasi portofolio konsultan IT',
		link: 'https://fopegram.id',
		team: true,
		language: ['Laravel', 'Svelte'],
		photo: ['fopegram.png', 'fopegram2.png', 'fopegram3.png'],
	},
	{
		name: 'PPDB SDUA',
		description: 'Aplikasi Pendaftaran Siswa Baru SD Ummu Aiman',
		team: true,
		language: ['CodeIgniter'],
		photo: ['ppdb.png', 'ppdb2.png'],
	},
	{
		name: 'Perpustakaan',
		description: 'Aplikasi E-Perpustakaan SDN Inpres Bhayangkara Kota Jayapura',
		team: true,
		language: ['CodeIgniter'],
		photo: ['perpustakaan.png', 'perpustakaan2.png'],
	},
	{
		name: 'Siphuda',
		description: 'Sistem Inventarisasi Produk Hukum Daerah Sekretariat DPRD Kabupaten Trenggalek',
		link: 'https://siphuda.com',
		language: ['Laravel', 'Svelte'],
		photo: ['siphuda.png', 'siphuda2.png'],
	},
	{
		name: 'Prima Usadha Jaya',
		description: 'Aplikasi manajemen service bengkel',
		link: 'https://primausadha.com',
		language: ['Laravel', 'Svelte'],
		photo: ['bengkel.png', 'bengkel2.png'],
	},
	{
		name: 'Administrasi Desa',
		description: 'Aplikasi perantara keluhan rakyat desa',
		link: '',
		language: ['CodeIgniter'],
		photo: ['administrasi.png'],
	},
	{
		name: 'Tes Skripsi',
		description: 'Aplikasi pengelolaan tes skripsi mahasiswa',
		team: true,
		link: 'https://e-mta.fkm.untad.ac.id/',
		language: ['CodeIgniter'],
		photo: ['skripsi.png'],
	},
	{
		name: 'Shabab Aqiqah',
		description: 'Aplikasi pengelolaan qurban & aqiqah',
		link: 'http://shababaqiqah.com/',
		language: ['CodeIgniter'],
		photo: ['shababaqiqah.png'],
	},
	{
		name: 'Rumah Ibadah',
		description: 'Aplikasi pencarian tempat ibadah suatu daerah',
		link: '',
		language: ['CodeIgniter', 'React'],
		photo: ['rumah-ibadah.png'],
	},
	{
		name: 'Absen Petugas Masjid',
		description: 'Aplikasi pengelolaan daftar hadir petugas masjid',
		link: '',
		language: ['Laravel', 'React'],
		photo: ['absensi-masjid.png'],
	},
	{
		name: 'Smegrima Kelulusan',
		description: 'Aplikasi cek kelulusan siswa SMK PGRI 05 Jember',
		team: true,
		link: 'https://esemkaprima.com/kelulusan',
		language: ['CodeIgniter'],
		photo: ['kelulusan.png', 'kelulusan2.png'],
	},
	{
		name: 'Puskesmas',
		description: 'Aplikasi pelayanan puskesmas Elly Uyo Adipura',
		link: '',
		language: ['CodeIgniter'],
		photo: ['rumah-sakit.png'],
	},
	{
		name: 'Zakat',
		description: 'Aplikasi Manajemen Zakat Desa Ujong Gunong Rayeuk',
		link: '',
		language: ['CodeIgniter'],
		photo: ['zakat.png'],
	},
	{
		name: 'Direktori Biodata',
		description: 'Aplikasi pengelolaan biodata pekerja',
		link: '',
		language: ['Codeigniter'],
		photo: ['direktori.png'],
	},
	{
		name: 'PMB Uniyap',
		description: 'Aplikasi pendaftaran mahasiswa baru Universitas Yapis Papua',
		link: 'https://pmb-uniyap.com',
		language: ['Laravel', 'Vue'],
		photo: ['pmb-uniyap.png', 'pmb-uniyap2.png'],
	},
	{
		name: 'Pengajuan Beasiswa',
		description: 'Aplikasi pengajaun beasiswa Poltas',
		link: '',
		language: ['CodeIgniter'],
		photo: ['beasiswa.png'],
	},
	{
		name: 'Pinjam Sarana',
		description: 'Aplikasi peminjaman sarana sekolah',
		link: '',
		language: ['CodeIgniter'],
		photo: ['pinjam-sarana.png'],
	},
	{
		name: 'Absensi QRCode',
		description: 'Aplikasi manajemen absensi berbasis QRcode',
		link: '',
		language: ['CodeIgniter'],
		photo: ['absensi-qrcode.png'],
	},
	{
		name: 'Sewa Kamar',
		description: 'Aplikasi Penyewaan Kamar',
		link: '',
		language: ['CodeIgniter', 'Vue'],
		photo: ['sewa-kamar.png', 'sewa-kamar2.png'],
	},
	{
		name: 'E-SPP',
		description: 'Aplikasi pengelolaan pembayaran SPP',
		link: '',
		language: ['CodeIgniter'],
		photo: ['e-spp.png'],
	},
	{
		name: 'Prima Store',
		description: 'Aplikasi market place kebutuhan siswa SMK PGRI 05 Jember',
		link: '',
		team: true,
		language: ['CodeIgniter'],
		photo: ['prima-store.png', 'prima-store2.png', 'prima-store3.png', 'prima-store4.png'],
	},
	{
		name: 'E-Kuisioner',
		description: 'Aplikasi pelacakan alumni mahasiswa',
		link: 'http://e-kuesioner.com',
		language: ['CodeIgniter'],
		photo: ['e-kuisioner.png'],
	},
	{
		name: 'Toko',
		description: 'Aplikasi penjualan barang toko',
		link: '',
		language: ['CodeIgniter'],
		photo: ['toko.png'],
	},
	{
		name: 'Vicate',
		description: 'Aplikasi manajemen sertifikat online',
		link: 'http://vicate.org',
		language: ['CodeIgniter'],
		photo: ['vicate.png', 'vicate2.png'],
	},
	{
		name: 'Pilkada',
		description: 'Aplikasi pemilihan ketua daerah',
		link: '',
		language: ['CodeIgniter'],
		photo: ['pilkada.png', 'pilkada2.png'],
	},
];

const Project: Component = () => {
	return (
		<>
			<div class="lg:min-h-100vh flex flex-wrap -mx-4 lg:py-10">
				<div class="w-full text-center mb-5 mt-5 px-4">
					<div class="text-blue-500 font-bold text-3xl">PROJECT</div>
					<div>Collection of works or achievements that I made individually or in groups</div>
				</div>
				<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full p-4">
					<For each={project}>
						{(item) => (
							<Link
								href={'/project/' + item.name.toLowerCase().replace(/ /gi, '-')}
								class="bg-white dark:bg-gray-900 rounded relative shadow overflow-hidden group"
							>
								<div
									class="absolute -top-1 right-2 p-1 px-2 text-xs uppercase shadow dark:bg-gray-900 bg-white rounded-b-lg z-3"
									classList={{ 'text-green-500': item.team, 'text-blue-500': !item.team }}
								>
									{item.team ? 'Group' : 'Individual'}
								</div>
								<img
									src={'/assets/project/' + item.photo[0]}
									class="lg:h-180px h-150px object-cover w-full transform scale-90 transition rounded group-hover:scale-100"
									alt=""
								/>
								<div class="absolute top-0 left-0 right-0 bottom-0 bg-white dark:(bg-gray-900) text-blue-500 transition hidden group-hover:flex items-center justify-center rounded z-2 text-2xl uppercase font-semibold">
									<div class="text-center">{item.name}</div>
								</div>
							</Link>
						)}
					</For>
				</div>
			</div>
		</>
	);
};

export default Project;
