import { type Variants, type MotionProps } from "framer-motion";

import { IDirectionAnimation } from "../types";

const initialName = "hidden";
const visibleName = "visible";

export const baseMotionProps: MotionProps = {
	initial: initialName,
	whileInView: visibleName,
	viewport: { amount: 0.3, once: true },
};

export const fadeInAnimation: Variants = {
	[initialName]: {
		opacity: 0,
	},
	[visibleName]: (delay = 0) => ({
		opacity: 1,
		transition: { duration: 0.5, delay: delay * 0.2 },
	}),
};

export const fadeInDirectionAnimation: Variants = {
	[initialName]: (props: IDirectionAnimation) => ({
		[props?.axis || "x"]: 30 * (props?.direction || -1),
		opacity: 0,
	}),
	[visibleName]: (props: IDirectionAnimation) => ({
		opacity: 1,
		[props?.axis || "x"]: 0,
		transition: { duration: 0.5, delay: (props?.delay || 0) * 0.2 },
	}),
};

export const growHeightAnimation: Variants = {
	[initialName]: {
		height: 0,
	},
	[visibleName]: (delay: number) => ({
		height: "100%",
		transition: { duration: 0.5, delay: delay * 0.2 },
	}),
};
