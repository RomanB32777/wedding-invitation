export interface IColorProps {
	name: string;
	borderColor?: string;
}

export interface IGuestNumProp {
	guestsNum: string | null;
}

export interface IFormReplyQuestion {
	title: string;
	type: Extract<React.HTMLInputTypeAttribute, "checkbox" | "radio">;
	options: string[];
}
