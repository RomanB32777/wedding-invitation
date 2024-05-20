import dayjs from "dayjs";
import { motion } from "framer-motion";
import { FC, useEffect, useMemo, useState } from "react";

import footerImg from "@/shared/assets/images/footer.png";
import { baseMotionProps, fadeInAnimation, fadeInDirectionAnimation } from "@/shared/constants";
import { getDayjsWeddingDate, relativeTimeWithPlural } from "@/shared/lib/datetime";
import { IDirectionAnimation } from "@/shared/types";
import { MTitle } from "@/shared/ui";

interface IWeddingDiff {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
}

const weddingDate = getDayjsWeddingDate();

const defaultDiff: IWeddingDiff = {
	days: relativeTimeWithPlural(0, false, "dd"),
	hours: relativeTimeWithPlural(0, false, "hh"),
	minutes: relativeTimeWithPlural(0, false, "mm"),
	seconds: relativeTimeWithPlural(0, false, "ss"),
};

export const Footer: FC = () => {
	const [diff, setDiff] = useState(weddingDate.isAfter() ? weddingDate.diff() : 0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDiff((prev) => {
				if (Math.floor(prev / 1000) <= 0) {
					// TODO confetti here

					clearInterval(interval);

					return 0;
				}

				return prev - 1000;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const diffValues: IWeddingDiff = useMemo(() => {
		const withSuffix = true;

		const daysDiff = Math.floor(dayjs.duration(diff).asDays());
		const hoursDiff = Math.floor(dayjs.duration(diff).asHours() % 24);
		const minutesDiff = Math.floor(dayjs.duration(diff).asMinutes() % 60);
		const secondsDiff = Math.floor(dayjs.duration(diff).asSeconds() % 60);

		return {
			days: daysDiff ? dayjs.duration(daysDiff, "day").humanize(withSuffix) : defaultDiff.days,
			hours: hoursDiff ? dayjs.duration(hoursDiff, "hour").humanize(withSuffix) : defaultDiff.hours,
			minutes: minutesDiff
				? dayjs.duration(minutesDiff, "minute").humanize(withSuffix)
				: defaultDiff.minutes,
			seconds: secondsDiff
				? dayjs.duration(secondsDiff, "second").humanize(withSuffix)
				: defaultDiff.seconds,
		};
	}, [diff]);

	return (
		<>
			<div className="relative bg-white px-10 pt-6 pb-60 text-black text-center">
				<motion.div {...baseMotionProps}>
					<MTitle text="Ждем вас через" className="mb-4" variants={fadeInAnimation} custom={1} />

					<motion.div
						variants={fadeInAnimation}
						custom={2}
						className="flex divide-x divide-primary-dark text-primary-dark"
					>
						{Object.values(diffValues).map((item, index) => {
							// TODO без удаления через тут можно ли обойти, например через конфигурацию dayjs
							const [value, text] = (item as string).replace("через ", "").split(" ");

							return (
								<motion.div
									variants={fadeInDirectionAnimation}
									custom={{ axis: "y", delay: 3 + index } as IDirectionAnimation}
									className="flex-1"
									key={index}
								>
									<p className="font-oranienbaum text-5xl">{value}</p>
									<p className="font-light text-base">{text}</p>
								</motion.div>
							);
						})}
					</motion.div>

					<motion.img
						variants={fadeInAnimation}
						custom={3}
						src={footerImg}
						alt="Фото"
						className="absolute top-56 left-1/2 -translate-x-1/2 w-80"
					/>
				</motion.div>
			</div>

			<motion.div {...baseMotionProps} className="pt-32 pb-8">
				<MTitle
					variants={fadeInDirectionAnimation}
					custom={{ axis: "y", delay: 3, direction: 1 } as IDirectionAnimation}
					text="Ваши Дима и Настя"
					type="white"
					className="relative text-center z-10 first-letter:!text-9xl first-line:!text-3xl"
				/>
			</motion.div>
		</>
	);
};
