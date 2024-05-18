import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";

import footerImg from "@/shared/assets/images/footer.png";
import { getDayjsWeddingDate, relativeTimeWithPlural } from "@/shared/lib/datetime";
import { Title } from "@/shared/ui";

interface IWeddingDiff {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
}

const defaultDiff: IWeddingDiff = {
	days: relativeTimeWithPlural(0, false, "dd"),
	hours: relativeTimeWithPlural(0, false, "hh"),
	minutes: relativeTimeWithPlural(0, false, "mm"),
	seconds: relativeTimeWithPlural(0, false, "ss"),
};

export const Footer: FC = () => {
	const [diff, setDiff] = useState<IWeddingDiff>(defaultDiff);

	useEffect(() => {
		const weddingDate = getDayjsWeddingDate();

		const interval = setInterval(() => {
			const currentDate = dayjs();

			if (!currentDate.isBefore(weddingDate)) {
				setDiff(defaultDiff);
				clearInterval(interval);

				// confetti here

				return;
			}

			const daysDiff = weddingDate.diff(currentDate, "day");
			const hoursDiff = weddingDate.diff(currentDate, "hour") % 24;
			const minutesDiff = weddingDate.diff(currentDate, "minute") % 60;
			const secondsDiff = weddingDate.diff(currentDate, "second") % 60;

			setDiff({
				days: daysDiff ? dayjs.duration(daysDiff, "day").humanize(true) : defaultDiff.days,
				hours: hoursDiff ? dayjs.duration(hoursDiff, "hour").humanize(true) : defaultDiff.hours,
				minutes: minutesDiff
					? dayjs.duration(minutesDiff, "minute").humanize(true)
					: defaultDiff.minutes,
				seconds: secondsDiff
					? dayjs.duration(secondsDiff, "second").humanize(true)
					: defaultDiff.seconds,
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="relative bg-white px-10 pt-6 pb-56 text-black text-center">
				<Title text="Ждем вас через" className="mb-4" />

				<div className="flex divide-x divide-primary-dark text-primary-dark ">
					{diff &&
						Object.values(diff).map((item, index) => {
							// TODO без удаления через тут можно ли обойти, например через конфигурацию dayjs
							const [value, text] = (item as string).replace("через ", "").split(" ");

							return (
								<div className="flex-1" key={index}>
									<p className="font-oranienbaum text-5xl">{value}</p>
									<p className="font-light text-base">{text}</p>
								</div>
							);
						})}
				</div>

				<img
					src={footerImg}
					alt="Фото"
					className="absolute top-60 left-1/2 -translate-x-1/2 w-80"
				/>
			</div>

			<div className="pt-32 pb-10">
				<Title
					text="Ваши Дима и Настя"
					style="white"
					className="relative text-center z-10 first-letter:!text-9xl first-line:!text-3xl"
				/>
			</div>
		</>
	);
};
