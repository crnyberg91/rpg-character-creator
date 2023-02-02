import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { GiTavernSign } from 'react-icons/gi';
import { ImProfile } from 'react-icons/im';

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			name: 'Home',
			icon: <GiTavernSign size={30} color='white' />,
			link: '/',
		},
		{
			id: 2,
			name: 'GitHub',
			icon: <FaGithub size={30} color='white' />,
			link: 'https://github.com/crnyberg91/rpg-character-creator',
		},
		{
			id: 3,
			name: 'Portfolio',
			icon: <ImProfile size={30} color='white' />,
			link: 'https://github.com/crnyberg91',
		},
	];

	return (
		<div className='flex justify-between items-center w-full h-20 text-stone-200 static bg-black border-stone-200 border-b-4 px-4'>
			<h1 className='text-5xl font-signature ml-2'>RPG Character Sheet</h1>
			<ul className='hidden md:flex'>
				{links.map(({ id, name, icon, link }) => (
					<li
						key={id}
						className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
						title={name}
					>
						<a href={link} target='_blank'>
							{icon}
						</a>
					</li>
				))}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-500'>
					{links.map(({ id, name, icon, link }) => (
						<li
							key={id}
							className='px-4 cursor-pointer capitalize py-6 text-4xl justify-center items-center'
						>
							<a
								href={link}
								target='_blank'
								className='grid justify-items-center'
								rel='noreferrer'
							>
								{name}
								{icon}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
