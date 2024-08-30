import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../components/ui/carousel";
const carouselData = [
	{
		title: "Ethereum validator",
		img: "/images/NODE_Packages_4.webp",
		data: "Earn rewards while securing Ethereum Current APR is 4.9% ",
	},
	{
		title: "Bitcoin node",
		img: "/images/NODE_Packages_1.webp",
		data: "Support the Bitcoin network by validating transactions and blocks.",
	},
	{
		title: "Gnosis Chain validator",
		img: "/images/NODE_Packages_3.webp",
		data: "Earn rewards while securing Gnosis Chain. Current APR is 13%",
	},
	{
		title: "Storj node",
		img: "/images/NODE_Packages_2.webp",
		data: "Earn rewards for sharing unused disk space and bandwidth to power the Storj network. ",
	},
	{
		title: "Rotki",
		img: "/images/NODE_Packages_400x_1.webp",
		data: "Run a private portfolio tracker and analytics tool on your Dappnode",
	},
	{
		title: "OwnCloud",
		img: "/images/NODE_Packages_2_.webp",
		data: "Run a private cloud on your Dappnode – store and access all your files securely from anywhere.",
	},
	{
		title: "Avalanche node + wallet",
		img: "/images/NODE_Packages_1w.webp",
		data: "Support the Avalanche network by validating transactions and blocks – access a secure local wallet",
	},
	{
		title: "",
		img: "/images/NODE_Packages_3_40.webp",
		data: "Over 100 of your favorite apps ready to run on your node",
	},
];
const CarouselComponent = () => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full ">
			<CarouselContent>
				{carouselData.map((data, index) => (
					<CarouselItem
						key={index}
						className={`md:basis-1/2 lg:basis-1/6 text-white ${
							index % 2 === 0 ? "" : "mt-32"
						}`}>
						<div className="flex flex-col justify-center items-center max-w-36 mx-auto">
							<img src={data.img} alt={data.title} className="max-w-44" />
							<p className="p-3 font-bold text-lg">{data.title}</p>
						</div>

						<div className="p-3 px-5  mx-auto">
							<p className="text-sm text-gray-200 text-start">{data.data}</p>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselComponent;
