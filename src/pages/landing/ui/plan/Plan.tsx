import classNames from "classnames";
import { motion, type Variants } from "framer-motion";
import { FC, ReactNode } from "react";

import { Icons } from "@/shared/assets/icons";
import { TComponentWithClassName } from "@/shared/types";
import { Title } from "@/shared/ui";

interface IStep {
	time: string;
	icon: ReactNode;
	title: string;
	description: string;
}

const steps: IStep[] = [
	{
		time: "17:30",
		icon: <Icons.GlassesSVG />,
		title: "WELCOME",
		description:
			"Время сбора гостей. Cобираясь на торжество, возьмите с собой улыбки и хорошее настроение.",
	},
	{
		time: "18:00",
		icon: <Icons.RingsSVG />,
		title: "Выездная регистрация",
		description: "Приготовьте платочки для трогательного момента",
	},
	{
		time: "18:30",
		icon: <Icons.CutlerySVG />,
		title: "Праздничный ужин",
		description: "Время танцев, вкусной еды, теплых пожеланий и развлечений",
	},
];

const textAnimation: Variants = {
	hidden: (direction: 1 | -1) => ({
		x: 30 * direction,
		opacity: 0,
	}),
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.7 },
	},
};

const lineAnimation: Variants = {
	hidden: {
		height: 0,
	},
	visible: (custom: number) => ({
		height: "100%",
		transition: { delay: custom * 0.5 },
	}),
};

export const Plan: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("text-white", className)}>
		<Title text="План дня" style="white" />

		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className="[&>:first-child]:pt-0 [&>:last-child]:pb-0"
		>
			{steps.map(({ time, title, icon, description }, index) => (
				<div key={index} className="flex gap-x-3 py-3">
					<div className="font-oranienbaum text-2xl mt-2">
						<motion.p variants={textAnimation} custom={-1} className="w-14">
							{time}
						</motion.p>
					</div>

					<div className="relative">
						<motion.div className="w-12 h-12 flex items-center justify-center border rounded-full border-white bg-primary">
							{icon}
						</motion.div>

						{index !== steps.length - 1 && (
							<motion.div
								custom={index + 1}
								variants={lineAnimation}
								className="absolute w-px top-12 left-1/2 h-full bg-white"
							></motion.div>
						)}
					</div>

					<motion.div variants={textAnimation} custom={1}>
						<p className="font-oranienbaum text-2xl mt-2 mb-1">{title}</p>
						<p className="text-base font-light">{description}</p>
					</motion.div>
				</div>
			))}
		</motion.div>
	</div>
);
