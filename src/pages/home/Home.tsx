// import React from "react";
import AnimationHero from "../../components/AnimationHero";
import { Button } from "../../components/ui/button";
import { IoMdArrowForward } from "react-icons/io";
import CarouselComponent from "../components/carousel";
import { FaDiscord } from "react-icons/fa";
import { FaGithub, FaPeopleGroup, FaTwitter } from "react-icons/fa6";
// import { SiGithub } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";

const data = [
	{
		img: "./images/individual.avif",
		title: "Individuals power Web3",
		desc: `Web3 networks like Ethereum are decentralized because people all
								over the world run software that powers it on computers in their
								homes.`,
	},
	{
		img: "./images/web3_reward.avif",
		title: "Web3 networks reward them",
		desc: `Networks like Ethereum, Gnosis Chain and Avalanche reward people who install their validator app, which helps to run the network.`,
	},
	{
		img: "./images/dappnode_makes.avif",
		title: "Dappnode makes it easy",
		desc: `Dappnode takes care of the technical stuff so anyone can play a role in creating an open, equitable internet and access the rewards that are offered in return.`,
	},
];
const twitData = [
	"/images/twit1.webp",
	"/images/twit2.webp",
	"/images/twit3.webp",
	"/images/twit4.webp",
	"/images/twit5.webp",
	"/images/twit6.webp",
];

const Home = () => {
	return (
		<div className=" text-cyan-950">
			<section className="md:container max-md:px-5  mt-24">
				<div className=" max-w-[739px]">
					<h1 className="text-4xl">The easiest way to power Web3</h1>
					<p className="text-xl max-md:text-base text-gray-500 py-5">
						Now anyone can run decentralized networks like Ethereum and Bitcoin
						and earn rewards. Zero hassle, it just works.
					</p>
				</div>

				{/* <div className=""></div> */}
			</section>
			<section className="container mb-9">
				<div className="max-w-[700px] mx-auto pb-9">
					<AnimationHero />
				</div>
			</section>
			<section className="md:container max-md:px-5 ">
				<div className="max-w-[770px] mx-auto">
					{data.map((item) => (
						<div className="flex max-md:flex-col  items-center gap-5 my-8 mb-5">
							<img src={item.img} alt={item.title} className="w-28 h-28" />
							<div className="">
								<h3 className="text-2xl max-md:text-xl max-md:text-center mb-2  font-semibold">
									{item.title}
								</h3>
								<p className="text-gray-500 text-base max-md:text-center ">
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="md:container max-md:px-5 ">
				<div className="w-fit mx-auto pt-16 pb-20">
					<img
						src="/images/How_it_works_-_UI.webp"
						alt="How it works"
						className=""
					/>
				</div>
			</section>
			<section className="md:container max-md:px-5 ">
				<div className="">
					<h1 className="text-3xl max-sm:text-3xl font-bold text-center py-9">
						Choose <span className="text-purple-600">your</span> path
					</h1>
					<div className="flex justify-center mb-9">
						<img
							src="/images/logo_black.avif"
							alt=""
							className="max-w-28 max-sm:max-w-14"
						/>
					</div>
				</div>
				<div className="mb-28 flex flex-col gap-10 md:flex-row md:justify-center items-center">
					<Card
						title="Home"
						firstText="The "
						MiddleText="plug-and-play"
						lastText=" way"
						desc="Home is an all-in-one magic machine powered by Dappnode Core. The easiest way for you to get up and running with just a few clicks. No technical knowledge required."
						Component={() => (
							<Button className="bg-[#07cee1]">
								Buy <IoMdArrowForward className="ml-1" />
							</Button>
						)}
						img="/images/Node_1_400x.webp"
						color="#07cee1"
					/>
					<Card
						title="Core"
						firstText="The "
						MiddleText="DIY"
						lastText=" way"
						color="#f5b201"
						desc="Core is free open source software that anyone can use to power their own machine. Have your own machine? Set up a server before? This one's for you."
						Component={() => (
							<Button className="bg-[#f5b201] py-3 px-8">
								Install <IoMdArrowForward className="ml-1" />
							</Button>
						)}
						img="/images/Server2_400x.webp"
					/>
				</div>
			</section>
			<div className="bg-[#002c41]">
				<section className="md:container max-md:px-5  pb-28">
					<div className="pt-20 pb-4 text-white flex flex-col items-center justify-center">
						{/* <div className=""></div> */}
						<img src="/images/logo_black.avif" alt="" className="" />
						<p className="text-[40px] max-sm:text-3xl font-bold">
							Your Web3 app store
						</p>
						<div className="">
							<p className="text-lg text-gray-300">
								Support your pick of Web3 chains and apps by running them on
								your dappnode
							</p>
						</div>
					</div>
					<hr className="text-gray-300" />
					<div className="p-9">
						<CarouselComponent />
						<div className="text-white">
							<p className="text-center mt-9">
								Check our{" "}
								<a href="/" className="text-blue-400">
									app explorer
								</a>{" "}
								to see all available apps
							</p>
						</div>
					</div>
				</section>
			</div>
			<section className="md:container max-md:px-5 ">
				<h2 className="text-[40px] max-sm:text-3xl font-bold text-center pt-20 pb-[31px]">
					<span className="text-purple-500 ">Loved</span> since 2018
				</h2>
				<div className=" relative">
					<div className="bg-[#002c41] "></div>
					<div className="mx-auto flex flex-wrap gap-5  justify-center items-center">
						{twitData.map((item, index) => (
							<img
								src={item}
								alt="p"
								className="max-w-72 shadow-lg rounded-lg"
								key={index}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="md:container max-md:px-5 ">
				<div className="pt-14 pb-9 max-w-[700px] mx-auto">
					<h2 className=" text-center text-4xl max-sm:text-3xl font-bold mb-6">
						An <span className="text-purple-500">open & supportive</span>{" "}
						community
					</h2>
					<p className="text-gray-700 text-center">
						A global community of 3,000+ people coming together to learn from
						and support each other. All helping to advance the decentralization
						of the internet.
					</p>
				</div>
				<div className="flex justify-center items-center">
					<img src="/images/community_2x.webp" alt="" className="" />
				</div>
				<div className="p-6 pb-16">
					<div className="flex flex-col items-center  justify-center">
						<p className="text-center text-sm mb-4">CONNECT WITH US</p>
						<Button className="bg-cyan-950 hover:bg-cyan-800 max-w-64 py-9 px-9">
							<FaDiscord size={25} className="mr-5" />
							Join us on Discord <IoMdArrowForward />
						</Button>
					</div>
					<div className="flex text-cyan-950 text-sm gap-9 max-sm:gap-5 items-center justify-center mt-7">
						<div className="flex items-center gap-1">
							<FaPeopleGroup size={25} />
							<span className="">Forum</span>
						</div>
						<div className="flex items-center gap-1">
							<FaGithub size={25} />
							<span className="">Github</span>
						</div>
						<div className="flex items-center gap-1">
							<FaTwitter size={25} />
							<span className="">Twitter</span>
						</div>
					</div>
				</div>
			</section>
			<section className="md:container max-md:px-3 ">
				<div className="pt-12 max-w-[532px] mx-auto">
					<div className="py-6">
						<h2 className="text-[40px] max-sm:text-3xl font-bold text-center mb-6">
							Partners & builders
						</h2>
						<p className="text-center">
							Dappnode can help you to decentralize your protocol and allow
							users to run private instances of your app.
						</p>
					</div>
				</div>
				<div className="">
					<div className="flex w-full max-md:flex-col max-md:items-center justify-around">
						<div className="w-[40%] max-md:w-full ">
							<div className="flex flex-col items-center pb-6">
								<img
									src="/images/Partner_book_400x.webp"
									alt=""
									className="max-w-72 w-full"
								/>
								<div className="">
									<p className="text-3xl max-sm:text-xl font-bold mb-6 text-start">
										Decentralize your network with Dappnode
									</p>
									<hr />
									<p className="my-3 ">
										A Dappnode partnership enables you to:
									</p>
									<ul className="">
										<li className="flex items-center mb-3">
											<GiCheckMark className="mr-3 text-blue-400" size={20} />
											Access a distrubuted network of nodes
										</li>
										<li className="flex items-center mb-3  ">
											<GiCheckMark
												className="mr-3 text-blue-400 text-lg"
												size={20}
											/>
											Release custom hardware and bring your brand into the
											homes of Web3 users
										</li>
										<li className="flex items-center mb-3">
											<GiCheckMark className="mr-3 text-blue-400" size={20} />
										</li>
									</ul>
								</div>
							</div>

							<div className="flex gap-3 max-sm:gap-1 justify-start">
								<Button variant={"outline"}>
									Work with us <IoMdArrowForward />
								</Button>{" "}
								<Button variant={"outline"}>Our partners</Button>
							</div>
						</div>
						<div className="w-[40%] max-md:w-full">
							<div className="flex flex-col items-center pb-6">
								<img
									src="/images/Blueprint_book_400x.webp"
									alt=""
									className="max-w-72 w-full"
								/>
								<div className="">
									<p className="text-3xl max-sm:text-xl font-bold mb-6 text-start">
										Build for the Dappnode app store
									</p>
									<hr />
									<p className="my-3 ">Dappnode helps builders:</p>
									<ul className="">
										<li className="flex items-center mb-3">
											<GiCheckMark className="mr-3 text-blue-400" size={20} />
											Create a Dappnode-ready version of your app with our
											simple SDK
										</li>
										<li className="flex items-center mb-3  ">
											<GiCheckMark
												className="mr-3 text-blue-400 text-lg"
												size={20}
											/>
											Make your app available to thousands of node-runners
										</li>
										<li className="flex items-center mb-3">
											<GiCheckMark className="mr-3 text-blue-400" size={20} />
											Bring auto-updates to your infra runners
										</li>
									</ul>
								</div>
							</div>

							<div className="flex gap-3 max-sm:gap-1 justify-start">
								<Button variant={"outline"}>
									Github <IoMdArrowForward />
								</Button>{" "}
								<Button variant={"outline"}>Devs doc</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="md:container max-md:px-3  my-14">
				<div className=" py-14  ">
					<div className="md:-mb-16">
						<img
							src="/images/Frame_900_600x.webp"
							alt=""
							className="max-w-72 w-full mx-auto"
						/>
					</div>
					<div className="bg-slate-200 w-full md:flex justify-around rounded-3xl   max-sm:py-8 py-16  max-sm:px-5 px-10">
						<div className="flex-1">
							<h3 className="text-3xl max-sm:text-xl font-bold py-10">
								Partner: <strong>Gnosis Chain</strong>
							</h3>
							<hr />
							<ul className=" text-sm mt-8">
								<li className="flex items-center mb-3 gap-3">
									<GiCheckMark className="text-blue-400" /> Deployed more than
									1132 validators
								</li>
								<li className="flex items-center mb-3 gap-3">
									<GiCheckMark className="text-blue-400" /> Produced and sold
									custom hardware
								</li>
							</ul>
						</div>
						<div className="flex-1">
							<div className="flex gap-3 items-center py-5">
								<img
									src="/images/image_161.webp"
									alt=""
									className="w-16 rounded-full"
								/>
								<div className="">
									<h3 className="text-lg font-bold ">Martin Köppelmann 🇺🇦</h3>
									<p className="">Co-Founder & CEO of Gnosis</p>
								</div>
							</div>

							<hr />
							<p className="my-8">
								"Validator decentralization is extremely important for us, so we
								partnered with Dappnode to make it a reality"
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const Card = ({
	title,
	firstText,
	MiddleText,
	lastText,
	desc,
	Component,
	img,
	color,
}: any) => {
	return (
		<div className="max-w-[400px] p-9 max-sm:p-5 pt-3 bg-slate-100 rounded-lg">
			<div className="">
				<div
					className={`bg-[${color}] mx-auto rounded-full max-w-64 h-64 ben flex items-center justify-center`}>
					{/* <div className={`bg-[${color}] rounded-full w-52 h-52  ben`}></div> */}
					<img src={img} alt="Node_1_400x" className="  w-52 h-52" />
				</div>
				<p className="">DappNode</p>
				<h1 className="text-4xl max-sm:text-3xl pb-6">{title}</h1>
			</div>
			<hr className="mb-10" />
			<div className="">
				{/* {firstText}
				<strong>{MiddleText}</strong> {lastText} */}
				<p className="text-base text-gray-800 pb-4">
					{firstText}
					<strong>{MiddleText}</strong> {lastText} <br />
					<br />
					{desc}
				</p>
			</div>
			<div className="mt-5">
				<Component />
			</div>
		</div>
	);
};
export default Home;
