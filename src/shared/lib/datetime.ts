import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const getDayjsWeddingDate = () => {
	const weddingDate = import.meta.env.VITE_WEDDING_DATE || "";
	return dayjs(weddingDate, "DD.MM.YYYY HH:mm");
};
