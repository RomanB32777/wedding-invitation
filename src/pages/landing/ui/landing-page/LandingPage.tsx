import { FC } from "react";

import { Footer } from "../footer";
import { Header } from "../header";
import { Location } from "../location";
import { Plan } from "../plan";
import { ReplyForm } from "../reply-form";

export const LandingPage: FC = () => {
	const guestsNum = Number(new URLSearchParams(window.location.search).get("row")) || 0;

	return (
		<div className="max-w-screen-sm mx-auto bg-primary font-roboto">
			<Header guestsNum={guestsNum} />
			<Plan />
			<Location />
			<ReplyForm guestsNum={guestsNum} />
			<Footer />
		</div>
	);
};
