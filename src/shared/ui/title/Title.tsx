import classNames from "classnames";

import type { FC } from "react";

import { TComponentWithClassName } from "../../types";

type TStyleTypes = "secondary" | "white";

interface ITitle extends TComponentWithClassName {
	text: string;
	style?: TStyleTypes;
}

const styleClasses: Record<TStyleTypes, string> = {
	secondary: "text-secondary",
	white: "text-white",
};

export const Title: FC<ITitle> = ({ text, style = "secondary", className }) => (
	<h3
		className={classNames(
			"first-letter:text-8xl first-letter:font-caravan uppercase font-oranienbaum text-2xl ",
			styleClasses[style],
			className
		)}
	>
		{text}
	</h3>
);
