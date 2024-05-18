import classNames from "classnames";
import { FC } from "react";

import locationImg from "@/shared/assets/images/location.png";
import { TComponentWithClassName } from "@/shared/types";
import { Title, Button } from "@/shared/ui";

export const Location: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("bg-white text-black", className)}>
		<Title text="Локация" />

		<p className="text-base font-light">
			Ресторан «Feola&apos;s Kitchen & Wine»
			<br />
			г. Таганрог, ул. Шмидта, 16а
		</p>

		<div className="bg-grey p-4 mt-5 mb-8">
			<img src={locationImg} alt="Локация" className="w-full" />
			<p className="font-oranienbaum text-primary-dark text-center text-xl my-5">
				12 метров над уровнем моря
			</p>
		</div>

		<a
			href={import.meta.env.VITE_LOCATION_LINK}
			title="Карта"
			rel="nofollow noreferrer"
			target="_blank"
		>
			<Button>Посмотреть на карте</Button>
		</a>
	</div>
);
