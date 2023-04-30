import React from 'react';
import botlogo from './assets/code.png';

const Card = ({ name }) => {
	return (
		// updated with className property 'mx-auto' to center the div.
		<div className="bg-white dark:bg-[#212134] w-[250px] text my-5 shadow-md p-4 rounded-md mx-auto">
			<img className="md:w-12 w-10" src={botlogo} alt="" />
			<div>
				<h1 className="text-[#2f1793] dark:text-white font-bold text-xl my-3">
					{name}
				</h1>
				<p className="mb-3 dark:text-[#b3bcc9]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptas enim dolor quibusdam earum ea.
				</p>
				<a
					className="bg-[#3e3cdb] hover:bg-[#2f1793] duration-300 text-white rounded-[4px] py-1 px-4"
					href=""
				>
					Invite
				</a>
			</div>
		</div>
	);
};

export default Card;
