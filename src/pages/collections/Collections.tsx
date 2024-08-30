import { Link } from "react-router-dom";

export const Collections = () => {
	return (
		<>
			<section className="md:container max-md: p-2">
				<div className="flex max-md:flex-col md: gap-7">
					<Card />
					<Card />
				</div>
			</section>
			<section className="md:container max-md: p-2">
				<div className="py-6 text-center">
					<p className="mb-6 text-xl">Inside:</p>
					<h2 className="text-5xl font-bold -pt-2 mb-6">
						The highest quality hardware
					</h2>
					<span className="">for the best reliability</span>
				</div>
			</section>
			<section className="md:container max-md: p-2 ">
				<div className="flex items-center py-9 justify-center gap-5 flex-wrap">
					<img
						src="/images/image_2023-03-21.avif"
						alt=""
						className="max-xs:w-full"
					/>
					<img
						src="/images/image_2023-03-21_.avif"
						alt=""
						className="max-xs:w-full"
					/>
					<img
						src="/images/photo_2023-03-22_14.avif"
						alt=""
						className="max-xs:w-full"
					/>
				</div>
			</section>
		</>
	);
};

const Card = () => {
	return (
		<div className="mb-[50px] py-10">
			<div className="-mb-48">
				<img
					src="/images/Diseno_sin_titulo_20_400x.webp"
					alt="product_1"
					className="mx-auto"
				/>
			</div>
			<div className="bg-gray-100 rounded-3xl pt-9 pb-5 max-pb-2 px-7 max-sm:px-2 max- m-2">
				<div className="pt-14 pb-7 max-sm:pb-2 px-2">
					<div className="">
						<span className="text-2xl text-gray-600">Dappnode</span>
						<h2 className="text-[40px] max-sm:text-4xl max-sm:py-3 font-bold">
							Gnosis Chain Home
						</h2>
						<p className="pt-3 pb-8 border-b-2 mb-5 text-lg text-gray-900">
							Limited Edition Dappnode Home. Comes with 3 GNO Tokens for free.
						</p>
					</div>

					<div className="flex  items-center gap-5 ">
						<p className="text-4xl max-sm:text-3xl text-blue-600">
							<small className="">
								<em>from</em>
							</small>
							<span className="">1,846.00€</span>
						</p>
						<span className="text-sm text-gray-500">Taxes not included</span>
					</div>
					<ul className="mt-5 mb-[20px] ml-3  text-sm text-gray-700 list-disc">
						<li className="border-t py-4">Intel NUC i5</li>
						<li className="border-t py-4">64 GB DDR4 RAM</li>
						<li className="border-t py-4">4TB NVMe or 2 TB NVMe</li>
					</ul>
					<div className="mt-4 mb-5">
						<Link
							to="#"
							className=" bg-blue-600 text-sm hover:bg-blue-700 px-16 text-white p-4 rounded-md">
							Buy now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
