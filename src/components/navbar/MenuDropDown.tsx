// import React from 'react'
import { Link } from "react-router-dom";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	// NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";

const MenuDropDown = ({
	title,
	options,
}: {
	title: string;
	options: { link: string; name: string }[];
}) => {
	return (
		<NavigationMenu className="">
			<NavigationMenuItem className="list-none ">
				<NavigationMenuTrigger className="bg-white hover:bg-white">
					{title}
				</NavigationMenuTrigger>
				<NavigationMenuContent className="flex flex-col gap-4 p-5">
					{options.map((option, id) => (
						<NavigationMenuLink key={id} className="">
							<Link to={`/${option.link}`} className="">
								{option.name}
							</Link>
						</NavigationMenuLink>
					))}
				</NavigationMenuContent>
			</NavigationMenuItem>
		</NavigationMenu>
	);
};

export default MenuDropDown;
