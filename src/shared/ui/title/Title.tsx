import classNames from "classnames";
import { motion } from "framer-motion";
import { forwardRef } from "react";

import { TComponentWithClassName } from "../../types";

type TStyleTypes = "secondary" | "white";

interface ITitle extends TComponentWithClassName {
	text: string;
	type?: TStyleTypes;
}

const styleClasses: Record<TStyleTypes, string> = {
	secondary: "text-secondary",
	white: "text-white",
};

export const Title = forwardRef<HTMLHeadingElement, ITitle>(
	({ text, type = "secondary", className }, ref) => (
		<h3
			className={classNames(
				"first-letter:text-8xl first-letter:font-caravan uppercase font-oranienbaum text-2xl",
				styleClasses[type],
				className
			)}
			ref={ref}
		>
			{text}
		</h3>
	)
);

Title.displayName = "Title";

export const MTitle = motion(Title);
