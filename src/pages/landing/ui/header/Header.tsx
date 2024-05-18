import classNames from "classnames";
import { FC } from "react";

import card1Img from "@/shared/assets/images/card1.png";
import card2Img from "@/shared/assets/images/card2.png";
import { getDayjsWeddingDate } from "@/shared/lib/datetime";

import styles from "./Header.module.scss";

export const Header: FC = () => {
	return (
		<div className={"relative overflow-hidden text-white pt-5 pb-14"}>
			<h1 className="relative z-10 font-caravan text-8xl text-center">Дима и Настя</h1>

			<div className="min-h-80">
				<img src={card1Img} alt="Карточка 1" className="absolute -left-4 w-[264px] z-10" />
				<img src={card2Img} alt="Карточка 2" className="absolute top-24 -right-4 w-[264px]" />
			</div>

			<div className="px-4">
				<p
					className={classNames(
						styles.date,
						"relative font-oranienbaum text-primary-lightest text-center"
					)}
				>
					{getDayjsWeddingDate().format("DD.MM.YYYY")}
				</p>
			</div>
		</div>
	);
};
