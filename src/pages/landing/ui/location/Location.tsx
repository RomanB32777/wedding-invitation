import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";

import locationImg from "@/shared/assets/images/location.png";
import { baseMotionProps, fadeInAnimation, fadeInDirectionAnimation } from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { Button, MTitle } from "@/shared/ui";

export const Location: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("bg-white text-black", className)}>
		<motion.div {...baseMotionProps}>
			<MTitle variants={fadeInDirectionAnimation} text="Локация" className="indent-2" />

			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 1 } as IDirectionAnimation}
				className="text-base font-light"
			>
				Ресторан «Feola&apos;s Kitchen & Wine»
				<br />
				г. Таганрог, ул. Шмидта, 16а
			</motion.p>
		</motion.div>

		<motion.div {...baseMotionProps}>
			<motion.div variants={fadeInAnimation} custom={2} className="bg-grey p-4 mt-5 mb-8">
				<img src={locationImg} alt="Локация" className="w-full" />
				<p className="font-oranienbaum text-primary-dark text-center text-xl my-5">
					12 метров над уровнем моря
				</p>
			</motion.div>

			<motion.a
				href={import.meta.env.VITE_LOCATION_LINK}
				title="Карта"
				rel="nofollow noreferrer"
				target="_blank"
				variants={fadeInAnimation}
				custom={3}
			>
				<Button>Посмотреть на карте</Button>
			</motion.a>
		</motion.div>
	</div>
);
