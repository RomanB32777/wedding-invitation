import type { FC } from "react";

type TStyleTypes = "secondary" | "white";

interface ITitle {
	text: string;
	style?: TStyleTypes;
}

const styleClasses: Record<TStyleTypes, string> = {
	secondary: "text-secondary",
	white: "text-white",
};

export const Title: FC<ITitle> = ({ text, style = "secondary" }) => (
	<h3 className={styleClasses[style]}>
		<span className="font-caravan text-8xl">{text[0]}</span>
		<span className="font-oranienbaum text-2xl uppercase">{text.slice(1)}</span>
	</h3>
);
