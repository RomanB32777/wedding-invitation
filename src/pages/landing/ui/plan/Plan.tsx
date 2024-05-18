import classNames from "classnames";
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

export const Plan: FC<TComponentWithClassName> = ({ className }) => (
	<div className={classNames("text-white", className)}>
		<Title text="План дня" style="white" />

		<div className="[&>:first-child]:pt-0 [&>:last-child]:pb-0">
			{steps.map(({ time, title, icon, description }, index) => (
				<div key={index} className="flex gap-x-3 py-3">
					<div className="font-oranienbaum text-2xl mt-2">
						<p className="w-14">{time}</p>
					</div>

					<div className="relative">
						<div className="w-12 h-12 flex items-center justify-center border rounded-full border-white bg-primary">
							{icon}
						</div>

						{index !== steps.length - 1 && (
							<div className="absolute w-px top-12 left-1/2 h-full bg-white animate-gh animation-delay-200"></div>
						)}
					</div>

					<div>
						<p className="font-oranienbaum text-2xl mt-2 mb-1">{title}</p>
						<p className="text-base font-light">{description}</p>
					</div>
				</div>
			))}
		</div>
	</div>
);
