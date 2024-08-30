// import React from "react";

import MenuDropDown from "./MenuDropDown";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-7 container">
			<div className="">
				<img src="./images/logo.avif" alt="" className="max-md:max-w-[150px]" />
			</div>
			<div className="flex gap-7 items-center max-md:hidden">
				<MenuDropDown
					title="Shop"
					options={[
						{ link: "collections", name: "Shop All" },
						{ link: "#", name: "Hot Releases" },
					]}
				/>
				<MenuDropDown
					title="Products"
					options={[
						{ link: "#", name: "DappNode Core" },
						{ link: "#", name: "DappNode Home" },
						{ link: "#", name: "Smooth" },
					]}
				/>
				<MenuDropDown
					title="Learning"
					options={[
						{ link: "#", name: "Documentation" },
						{ link: "#", name: "Driving School" },
						{ link: "#", name: "Blogs" },
					]}
				/>
				<MenuDropDown
					title="Working with us"
					options={[{ link: "#", name: "Our Partners" }]}
				/>
				<CgProfile />
				<BsCart3 />
			</div>
			<div className="md:hidden">
				<MobileNavbar />
			</div>
		</nav>
	);
};

const MobileNavbar = () => (
	<Sheet>
		<SheetTrigger asChild>
			<Button
				variant="outline"
				size="icon"
				className="lg:hidden outline-none border-0">
				<MenuIcon className="h-6 w-6" />
				<span className="sr-only">Toggle navigation menu</span>
			</Button>
		</SheetTrigger>
		<SheetContent side="left" className="w-full">
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>Shop</AccordionTrigger>

					<AccordionContent className="flex flex-col gap-2">
						{[
							{ link: "collections", name: "Shop All" },
							{ link: "#", name: "Hot Releases" },
						].map((item, i) => (
							<Link to={`/${item.link}`} key={i}>
								{item.name}
							</Link>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Products</AccordionTrigger>

					<AccordionContent className="flex flex-col gap-2">
						{[
							{ link: "#", name: "DappNode Core" },
							{ link: "#", name: "DappNode Home" },
							{ link: "#", name: "Smooth" },
						].map((item, i) => (
							<Link to={`/${item.link}`} key={i}>
								{item.name}
							</Link>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Learning</AccordionTrigger>

					<AccordionContent className="flex flex-col gap-2">
						{[
							{ link: "#", name: "Documentation" },
							{ link: "#", name: "Driving School" },
							{ link: "#", name: "Blogs" },
						].map((item, i) => (
							<Link to={`/${item.link}`} key={i}>
								{item.name}
							</Link>
						))}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>Working with us</AccordionTrigger>

					<AccordionContent className="flex flex-col gap-2">
						{[{ link: "#", name: "Our Partners" }].map((item, i) => (
							<Link to={`/${item.link}`} key={i}>
								{item.name}
							</Link>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</SheetContent>
	</Sheet>
);

export default Navbar;
