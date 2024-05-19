import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

import { Icons } from "@/shared/assets/icons";
import {
	baseMotionProps,
	fadeInAnimation,
	fadeInDirectionAnimation,
	growHeightAnimation,
} from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { MTitle } from "@/shared/ui";

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

export const Plan: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("text-white", className)}>
		<motion.div {...baseMotionProps}>
			<MTitle
				text="План дня"
				type="white"
				className="indent-2"
				variants={fadeInDirectionAnimation}
			/>
		</motion.div>

		<div className="[&>:first-child]:pt-0 [&>:last-child]:pb-0">
			{steps.map(({ time, title, icon, description }, index) => (
				<motion.div key={index} {...baseMotionProps} className="flex gap-x-3 py-3">
					<div className="font-oranienbaum text-2xl mt-2">
						<motion.p
							variants={fadeInDirectionAnimation}
							custom={{ delay: 1 + index } as IDirectionAnimation}
							className="w-14"
						>
							{time}
						</motion.p>
					</div>

					<div className="relative">
						<motion.div
							variants={fadeInAnimation}
							custom={1 + index}
							className="w-12 h-12 flex items-center justify-center border rounded-full border-white bg-primary"
						>
							{icon}
						</motion.div>

						{index !== steps.length - 1 && (
							<motion.div
								variants={growHeightAnimation}
								custom={index + 1}
								className="absolute w-px top-12 left-1/2 h-full bg-white"
							></motion.div>
						)}
					</div>

					<motion.div
						custom={{ direction: 1, delay: 1 + index } as IDirectionAnimation}
						variants={fadeInDirectionAnimation}
					>
						<p className="font-oranienbaum text-2xl mt-2 mb-1">{title}</p>
						<p className="text-base font-light">{description}</p>
					</motion.div>
				</motion.div>
			))}
		</div>
	</div>
);
