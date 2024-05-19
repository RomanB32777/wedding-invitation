import classNames from "classnames";
import { motion, type Variants } from "framer-motion";
import { FC } from "react";

import card1Img from "@/shared/assets/images/card1.png";
import card2Img from "@/shared/assets/images/card2.png";
import { getDayjsWeddingDate } from "@/shared/lib/datetime";

import styles from "./Header.module.scss";

const textAnimation: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: (custom = 0) => ({
		opacity: 1,
		transition: { duration: 0.5, delay: custom * 0.3 },
	}),
};

const imageAnimation: Variants = {
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

export const Header: FC = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="relative overflow-hidden text-white pt-5 pb-14"
		>
			<motion.h1
				variants={textAnimation}
				className="relative z-10 font-caravan text-8xl text-center"
			>
				Дима и Настя
			</motion.h1>

			<div className="min-h-[364px]">
				<motion.img
					src={card1Img}
					alt="Карточка 1"
					variants={imageAnimation}
					custom={-1}
					className="absolute -left-12 w-[296px] z-10"
				/>
				<motion.img
					src={card2Img}
					alt="Карточка 2"
					variants={imageAnimation}
					custom={1}
					className="absolute top-[86px] -right-24 w-[296px]"
				/>
			</div>

			<div className="px-4">
				<motion.p
					variants={textAnimation}
					custom={1}
					className={classNames(
						styles.date,
						"relative font-oranienbaum text-primary-lightest text-center"
					)}
				>
					{getDayjsWeddingDate().format("DD.MM.YYYY")}
				</motion.p>
			</div>
		</motion.div>
	);
};
