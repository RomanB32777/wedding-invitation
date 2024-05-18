import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { FC, useMemo } from "react";

import { fetchGuests } from "@/shared/api";
import { Icons } from "@/shared/assets/icons";
import { TComponentWithClassName } from "@/shared/types";
import { Title } from "@/shared/ui";

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
				<p>
					<svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
					Загрузка...
				</p>
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
				<>
					<Title text={data.title || ""} />

					<div className="font-light text-base flex flex-col gap-y-3">
						<p>
							{data.paragraph}
							<Icons.HeartSVG className="inline-block ml-1" />
						</p>

						<p>
							В этот летний вечер мы будем петь, танцевать, пить tiramisù, обниматься и отмечать
							один из самых важных дней в нашей жизни вместе.
						</p>
					</div>
				</>
			);
		}
	}, [data, error?.message, isError, isLoading]);

	return <div className={classNames("bg-white text-black", className)}>{content}</div>;
};