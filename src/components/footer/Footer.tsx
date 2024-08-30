import {
	FaDiscord,
	FaGithub,
	FaMedium,
	FaPeopleGroup,
	FaTwitter,
} from "react-icons/fa6";

const connect = [
	{ handle: "Discord", icon: FaDiscord, link: "#" },
	{ handle: "Twitter", icon: FaTwitter, link: "#" },
	{ handle: "Github", icon: FaGithub, link: "#" },
	{ handle: "Goup", icon: FaPeopleGroup, link: "#" },
	{ handle: "Meduim", icon: FaMedium, link: "#" },
];
const products = [
	{ handle: "Home", link: "#" },
	{ handle: "Products", link: "#" },
	{ handle: "Documentations", link: "#" },
	{ handle: "Partners", link: "#" },
	{ handle: "Smooth", link: "#" },
	{ handle: "Dappnode Driving School", link: "#" },
];
const help = [
	{ handle: "Billing & Invoice", link: "#" },
	{ handle: "Order Management", link: "#" },
	{ handle: "Shipping", link: "#" },
	{ handle: "Returns", link: "#" },
	{ handle: "Contact us", link: "#" },
];
const see = [
	{ handle: "About Us", link: "#" },
	{ handle: "Terms & Conditions", link: "#" },
	{ handle: "Privacy Policy", link: "#" },
	{ handle: "Legal Terms and Conditions", link: "#" },
	{ handle: "Cookie Policy", link: "#" },
];

const allLink = [
	// { title: "CONNECT WITH US", links: connect },
	{ title: "PRODUCTS", links: products },
	{ title: "HELP", links: help },
	{ title: "SEE ALSO", links: see },
];

const Footer = () => {
	return (
		<footer className="">
			<div className="bg-[#002c41] max-md:text-base">
				<section className="md:container max-md:px-3  py-20 text-white">
					<p className="mb-10  text-center text-xl font-bold">
						Supported through grants and funds from:
					</p>
					<div className="flex flex-wrap justify-evenly gap-5 items-center">
						{[
							"/images/Eth.org_200x.avif",
							"/images/ECF_network_200x.avif",
							"/images/Avatar_Circle_x3.avif",
							"/images/Giveth_200x.avif",
							"/images/logo_ce.avif",
							"/images/Block.is_200x.avif",
							"/images/NGI_200x.avif",
							"/images/EN_Funded.avif",
							"/images/GOB_MTES.webp",
							"/images/Logo_PRTR.avif",
						].map((p, i) => (
							<a href="#" className="" key={i}>
								<img src={p} alt="" className="max-w-32 max-h-52" />
							</a>
						))}
					</div>
				</section>
				<section className="md:container max-md:px-3 ">
					<div className=" py-20 text-white  md:gap-4 p-5 max-sm:p-0 text-xs md:flex justify-end">
						<div className="mx-2 w-[calc(25% - 20px)]"></div>
						<div className="mx-2 w-[calc(18.75% - 20px)] pt-7 ">
							<p className="mb-5">CONNECT WITH US</p>
							<ul className="">
								{connect.map((c, i) => (
									<li className="flex items-center gap-2 mb-2">
										<c.icon className="text-sm" />
										<a
											href={c.link}
											target="_blank"
											rel="noreferrer"
											key={i}
											className="">
											{c.handle}
										</a>
									</li>
								))}
							</ul>
						</div>
						{allLink.map((l, i) => (
							<div className="mx-2 w-[calc(18.75% - 20px)] py-7" key={i}>
								<p className="mb-5">{l.title}</p>
								<ul className="">
									{l.links.map((c, i) => (
										<li className="flex items-center gap-2 mb-2">
											<a
												href={c.link}
												target="_blank"
												rel="noreferrer"
												key={i}
												className="">
												{c.handle}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
				<section className="md:container max-md:px-3  ">
					<div className="py-5 flex items-center">
						<img src="/images/logo_black.avif" alt="" className="w-14 h-14" />
						<p className=" text-[#6c7478] text-xs">
							DappNode ™️| Decentralized P2P Networking | © 2024
						</p>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
