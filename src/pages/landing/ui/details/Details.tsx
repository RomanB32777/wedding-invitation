import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";

import { baseMotionProps, fadeInAnimation, fadeInDirectionAnimation } from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { MTitle } from "@/shared/ui";

import { IColorProps } from "../../model/types";

type TColor = Record<string, IColorProps>;

const colors: Record<"Gentlemen" | "Ladies", TColor> = {
	Gentlemen: {
		"#E9DDB5": { name: "Лен/савоярди" },
		"#FFFFFF": { name: "Белый", borderColor: "#54644480" },
		"#CDA482": { name: "Бежевый/какао" },
	},
	Ladies: {
		"#A8B891": { name: "Оливковый" },
		"#FDEDED": { name: "Пудрово-розовый" },
		"#F1CDB7": { name: "Персиковый" },
	},
};

export const Details: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("text-white", className)}>
		<motion.div {...baseMotionProps} variants={fadeInDirectionAnimation}>
			<MTitle text="Детали" type="white" />

			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 1 } as IDirectionAnimation}
				className="font-light text-base"
			>
				Будем рады, если вы поддержите цветовую палитру нашей свадьбы в своих нарядах
			</motion.p>
		</motion.div>

		<motion.div {...baseMotionProps} variants={fadeInAnimation} custom={2}>
			<div className="bg-white my-4 p-6 divide-y divide-primary-light">
				{Object.entries(colors).map(([title, item], blockIndex) => (
					<div key={blockIndex} className="py-3 [&:first-child]:pt-0 [&:last-child]:pb-0">
						<motion.p
							variants={fadeInAnimation}
							custom={3}
							className="font-oranienbaum text-secondary text-2xl text-center"
						>
							{title}
						</motion.p>

						<div className="flex justify-between py-3">
							{Object.entries(item).map(([color, { name, borderColor }], colorIndex) => (
								<motion.div
									key={color}
									variants={fadeInDirectionAnimation}
									custom={{ delay: 4 + colorIndex } as IDirectionAnimation}
									className="flex flex-col items-center gap-y-2 w-1/3"
								>
									<div
										style={{ backgroundColor: color, borderColor: borderColor || color }}
										className="w-12 h-12 border"
									></div>
									<p className="text-primary-dark font-light text-base text-center"> {name}</p>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>

			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 3 } as IDirectionAnimation}
				className="text-base"
			>
				Пожалуйста, не дарите нам живые цветы. Мы не успеем насладиться их красотой до отъезда
			</motion.p>
		</motion.div>
	</div>
);
