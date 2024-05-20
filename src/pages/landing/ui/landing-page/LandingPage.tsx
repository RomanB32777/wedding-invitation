import { FC } from "react";

import { Also } from "../also";
import { Details } from "../details";
import { Footer } from "../footer";
import { Header } from "../header";
import { Invitation } from "../invitation";
import { Location } from "../location";
import { Plan } from "../plan";
import { ReplyForm } from "../reply-form";

const wrapperClasses = "px-4 pt-6 pb-14";

export const LandingPage: FC = () => {
	const guestsNum = new URLSearchParams(window.location.search).get("row");

	return (
		<div className="max-w-[576px] mx-auto bg-primary font-roboto overflow-hidden">
			<Header />
			<Invitation guestsNum={guestsNum} className={wrapperClasses} />
			<Plan className={wrapperClasses} />
			<Location className={wrapperClasses} />
			<Details className={wrapperClasses} />
			<Also className={wrapperClasses} />
			<ReplyForm guestsNum={guestsNum} className={wrapperClasses} />
			<Footer />
		</div>
	);
};
