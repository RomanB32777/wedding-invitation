import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, useMemo } from "react";

import { fetchGuests } from "@/shared/api";
import { Icons } from "@/shared/assets/icons";
import loader from "@/shared/assets/images/loader.gif";
import { baseMotionProps, fadeInDirectionAnimation } from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { MTitle } from "@/shared/ui";

import { IGuestNumProp } from "../../model/types";

type TInvitation = IGuestNumProp & TComponentWithClassName;

export const Invitation: FC<TInvitation> = ({ guestsNum, className }) => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ["guests", guestsNum],
		queryFn: () => fetchGuests(guestsNum),
		refetchOnWindowFocus: false,
	});

	const content = useMemo(() => {
		if (isLoading) {
			return (
				<div className="flex items-center justify-center">
					<img src={loader} alt="loader" className="w-4/5" />
				</div>
			);
		}

		if (isError) {
			return (
				<p className="text-center text-base font-light">
					Произошла ошибка загрузки данных - перезагрузите страницу или проверьте подключение к
					интернету.
					{error?.message && <span>({error?.message})</span>}
				</p>
			);
		}

		if (data) {
			return (
				<motion.div {...baseMotionProps}>
					<MTitle text={data.title || ""} variants={fadeInDirectionAnimation} />

					<div className="font-light text-base flex flex-col gap-y-3">
						<motion.p
							variants={fadeInDirectionAnimation}
							custom={{ delay: 1 } as IDirectionAnimation}
						>
							{data.paragraph}
							<Icons.HeartSVG className="inline-block ml-1" />
						</motion.p>

						<motion.p
							variants={fadeInDirectionAnimation}
							custom={{ delay: 2 } as IDirectionAnimation}
						>
							В этот летний вечер мы будем петь, танцевать, пить tiramisù, обниматься и отмечать
							один из самых важных дней в нашей жизни вместе.
						</motion.p>
					</div>
				</motion.div>
			);
		}
	}, [data, error?.message, isError, isLoading]);

	return (
		<div className={classNames("bg-white text-black", className, { "!pb-6": isLoading })}>
			{content}
		</div>
	);
};
