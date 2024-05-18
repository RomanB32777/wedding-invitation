import classNames from "classnames";
import { FC } from "react";

import { TComponentWithClassName } from "@/shared/types";
import { Title } from "@/shared/ui";

export const Also: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("bg-white text-black", className)}>
		<Title text="А еще..." />

		<div className="flex flex-col gap-y-3 text-base">
			<p className="font-light">
				Мы уверены, что одного дня будет недостаточно, чтобы вместе спеть все наши любимые песни,
				поэтому мы будем рады, если вы присоединитесь к празднованию второго дня нашей свадьбы в
				расслабленной и непринужденной обстановке.
			</p>

			<p className="text-secondary">
				Загородный коттедж,
				<br /> с. Лакедемоновка, Заречная ул., 62
			</p>

			<p className="font-light">Время сбора гостей будет объявлено позже.</p>
			<p>Захватите с собой купальный костюм и впечатления от праздника!</p>
		</div>
	</div>
);
