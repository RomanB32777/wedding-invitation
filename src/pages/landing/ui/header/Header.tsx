import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";

import card1Img from "@/shared/assets/images/card1.png";
import card2Img from "@/shared/assets/images/card2.png";
import { baseMotionProps, fadeInAnimation, fadeInDirectionAnimation } from "@/shared/constants";
import { getDayjsWeddingDate } from "@/shared/lib/datetime";
import { IDirectionAnimation } from "@/shared/types";

import styles from "./Header.module.scss";

export const Header: FC = () => {
	return (
		<motion.div {...baseMotionProps} className="relative overflow-hidden text-white pt-5 pb-14">
			<motion.h1
				variants={fadeInAnimation}
				className="relative z-10 font-caravan text-8xl text-center"
			>
				Дима и Настя
			</motion.h1>

			<div className="min-h-[364px]">
				<motion.img
					src={card1Img}
					alt="Карточка 1"
					variants={fadeInDirectionAnimation}
					className="absolute -left-12 w-[296px] z-10"
				/>
				<motion.img
					src={card2Img}
					alt="Карточка 2"
					variants={fadeInDirectionAnimation}
					custom={{ direction: 1 } as IDirectionAnimation}
					className="absolute top-[86px] -right-24 w-[296px]"
				/>
			</div>

			<div className="px-4">
				<motion.p
					variants={fadeInAnimation}
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
