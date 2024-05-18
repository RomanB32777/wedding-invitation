import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import "dayjs/locale/ru";

export const plural = (word: string, num: number) => {
	const forms = word.split("_");

	return num % 10 === 1 && num % 100 !== 11
		? forms[0]
		: num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
			? forms[1]
			: forms[2];
};

export const relativeTimeWithPlural = (number: number, withoutSuffix: boolean, key: string) => {
	const format: Record<string, string> = {
		s: withoutSuffix ? "секунда_секунд_секунд" : "секунду_секунд_секунд",
		ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
		m: withoutSuffix ? "минута_минут_минут" : "минуту_минут_минут",
		mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
		h: "час_часа_часов",
		hh: "час_часа_часов",
		d: "день_дня_дней",
		dd: "день_дня_дней",
		M: "месяц_месяца_месяцев",
		MM: "месяц_месяца_месяцев",
		y: "год_года_лет",
		yy: "год_года_лет",
	};

	return `${number} ${plural(format[key], +number)}`;
};

dayjs.locale("ru");
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime, {
	thresholds: [
		{ l: "s", r: 1 },
		{ l: "ss", r: 59, d: "second" },
		{ l: "m", r: 1 },
		{ l: "mm", r: 59, d: "minute" },
		{ l: "h", r: 1 },
		{ l: "hh", r: 23, d: "hour" },
		{ l: "d", r: 1 },
		{ l: "dd", d: "day" },
		{ l: "M", r: 1 },
		{ l: "MM", r: 11, d: "month" },
		{ l: "y", r: 1 },
		{ l: "yy", d: "year" },
	],
});
dayjs.extend(updateLocale);
dayjs.extend(duration);

dayjs.updateLocale("ru", {
	relativeTime: {
		future: "через %s",
		past: "%s назад",
		s: relativeTimeWithPlural,
		ss: relativeTimeWithPlural,
		m: relativeTimeWithPlural,
		mm: relativeTimeWithPlural,
		h: relativeTimeWithPlural,
		hh: relativeTimeWithPlural,
		d: relativeTimeWithPlural,
		dd: relativeTimeWithPlural,
		M: relativeTimeWithPlural,
		MM: relativeTimeWithPlural,
		y: relativeTimeWithPlural,
		yy: relativeTimeWithPlural,
	},
});

export const getDayjsWeddingDate = () => {
	const weddingDate = import.meta.env.VITE_WEDDING_DATE || "";

	return dayjs(weddingDate, "DD.MM.YYYY HH:mm");
};
