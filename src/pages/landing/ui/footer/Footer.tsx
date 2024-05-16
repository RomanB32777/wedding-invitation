import { getDayjsWeddingDate } from "@/shared/lib/datetime";

export const Footer = () => {
	return <div>{getDayjsWeddingDate().unix()}</div>;
};
