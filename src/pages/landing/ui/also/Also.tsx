import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";

import { baseMotionProps, fadeInDirectionAnimation } from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { MTitle } from "@/shared/ui";

export const Also: FC<TComponentWithClassName> = ({ className }) => (
	<motion.div {...baseMotionProps} className={classNames("bg-white text-black", className)}>
		<MTitle text="А еще..." className="indent-2" variants={fadeInDirectionAnimation} />

		<div className="flex flex-col gap-y-3 text-base">
			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 1 } as IDirectionAnimation}
				className="font-light"
			>
				Мы уверены, что одного дня будет недостаточно, чтобы вместе спеть все наши любимые песни,
				поэтому мы будем рады, если вы присоединитесь к празднованию второго дня нашей свадьбы в
				расслабленной и непринужденной обстановке.
			</motion.p>

			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 2 } as IDirectionAnimation}
				className="text-secondary"
			>
				Загородный коттедж, с. Лакедемоновка, Заречная ул., 62
			</motion.p>

			<motion.p
				variants={fadeInDirectionAnimation}
				custom={{ delay: 3 } as IDirectionAnimation}
				className="font-light"
			>
				Время сбора гостей будет объявлено позже.
			</motion.p>
			<motion.p variants={fadeInDirectionAnimation} custom={{ delay: 4 } as IDirectionAnimation}>
				Захватите с собой купальный костюм и впечатления от праздника!
			</motion.p>
		</div>
	</motion.div>
);
