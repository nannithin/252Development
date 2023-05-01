import React, { useEffect, useRef, useState } from 'react';
import main from './assets/undraw_code_typing_re_p8b9.svg';
import codelogo from './assets/code.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './card';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/Hi';
import Discord from './discord';
import Fade from 'react-reveal/Fade';
import { FaArrowUp } from 'react-icons/Fa';

const Home = () => {
	const [vis, setVis] = useState(null);
	const goTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};
	const listentoscrool = () => {
		let hei = 250;
		const winscrol =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (winscrol > hei) {
			setVis(true);
		} else {
			setVis(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listentoscrool);
	}, []);
	const arrowRef = useRef(null);
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplayspeed: 5000,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<div id="home" className="z-[-19]">
				{vis && (
					<Fade bottom>
						<div
							className="fixed right-0 bottom-3 mx-7 my-7 z-[100] cursor-pointer bg-[#3e3cdb] rounded-full py-[8px] px-[8px]"
							onClick={goTop}
						>
							<FaArrowUp className="text-white text-xl" />
						</div>
					</Fade>
				)}
				<div className="md:flex justify-between w-[90%] md:my-[200px]">
					<img
						className="md:h-[70%] md:mt-0 mt-[70px] md:w-[40%] ml-6"
						src={main}
						alt=""
					/>

					<div className="md:max-w-[600px] md:flex-row text-center md:text-xl md:mt-0 mt-[40px] md:ml-0 ml-3">
						<h1 className="font-bold md:text-4xl dark:text-[#3e3cdb] text-black text-3xl md:ml-0 ml-[20px]">
							<span className="dark:text-white text-black">
								252
							</span>{' '}
							Development
						</h1>
						<p className="pt-[15px] ml-3 text-[#3e4452] font-medium dark:text-[#b3bcc9]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta hic repellat eius blanditiis quibusdam
							a modi id cupiditate corrupti? Ad sunt voluptates,
							eaque unde vero ex. Similique doloremque illo cum.
						</p>
					</div>
				</div>
				<div className="md:my-0 my-[70px]">
					<h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white  text-center capitalize">
						why choose us
					</h1>
					<div className="p-5 flex flex-wrap  justify-center gap-5 mx-auto my-3">
						{/* updated with className property 'border-[3px] border-transparent' instead of 'hover:border-[3px]' in line 72, 87, 102*/}
						<div className="card bg-white dark:bg-[#212134] w-[250px] md:my-0 my-3 p-4 rounded-md  mx-[3vw]  light:shadow-md duration-200 hover:scale-105">
							<img
								className="md:w-12 w-10 mx-auto py-4"
								src={codelogo}
								alt=""
							/>
							<h1 className="text-[#3e3cdb] dark:text-white text-xl font-semibold text-center">
								Web development
							</h1>
							<p className="pt-3 text-center dark:text-[#b3bcc9]">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Eaque libero nobis dolore
								repudiandae voluptatibus tempora modi at!
							</p>
						</div>
						<div className="card bg-white dark:bg-[#212134] w-[250px] md:my-0 my-3 p-4 rounded-md mx-[3vw]  light:shadow-md duration-200  hover:scale-105">
							<img
								className="md:w-12 w-10 mx-auto py-4"
								src={codelogo}
								alt=""
							/>
							<h1 className="text-[#3e3cdb] dark:text-white text-xl font-semibold text-center">
								Web development
							</h1>
							<p className="pt-3 text-center dark:text-[#b3bcc9]">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Eaque libero nobis dolore
								repudiandae voluptatibus tempora modi at!
							</p>
						</div>
						<div className="card bg-white dark:bg-[#212134] w-[250px] md:my-0 my-3 p-4 rounded-md mx-[3vw] light:shadow-md duration-200  hover:scale-105">
							<img
								className="md:w-12 w-10 mx-auto py-4"
								src={codelogo}
								alt=""
							/>
							<h1 className="text-[#3e3cdb] dark:text-white text-xl font-semibold text-center">
								Web development
							</h1>
							<p className="pt-3 text-center dark:text-[#b3bcc9]">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Eaque libero nobis dolore
								repudiandae voluptatibus tempora modi at!
							</p>
						</div>
					</div>
				</div>

				<div id="ourbots" className="w-full mx-auto md:my-10">
					<h1 className="my-5 text-3xl md:text-4xl font-bold dark:text-white text-black text-center">
						Our Bots
					</h1>

					<Slider ref={arrowRef} {...settings}>
						<Card name="Gaana" />
						<Card name="Bolt" />
						<Card name="OYO" />
						<Card name="Alex" />
						<Card name="Aqua" />
					</Slider>
					<div className="flex justify-center gap-5 md:gap-9 my-3 md:my-5">
						<button
							onClick={() => arrowRef.current.slickPrev()}
							className="text-2xl py-2 px-2 bg-[#3e3cdb] text-white rounded-full hover:bg-[#2f1793] duration-200"
						>
							<HiArrowSmLeft />
						</button>
						<button
							onClick={() => arrowRef.current.slickNext()}
							className="text-2xl py-2 px-2 bg-[#3e3cdb] text-white rounded-full hover:bg-[#2f1793] duration-200"
						>
							<HiArrowSmRight />
						</button>
					</div>
				</div>
				<div id="about" className="mt-[90px]">
					<Discord />
				</div>
			</div>
		</div>
	);
};

export default Home;
