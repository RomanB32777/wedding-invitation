import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

import { fetchGuests } from "@/shared/api";
import { Icons } from "@/shared/assets/icons";
import { getDayjsWeddingDate } from "@/shared/lib/datetime";
import { Title } from "@/shared/ui/title";

import { IGuestNumProp } from "../../model/types";

export const Header: FC<IGuestNumProp> = ({ guestsNum }) => {
	const { data, isLoading } = useQuery({
		queryKey: ["guests", guestsNum],
		queryFn: () => fetchGuests(guestsNum),
		refetchOnWindowFocus: false,
	});

	return (
		<div>
			<div className="text-white">
				<h1 className="font-caravan text-8xl text-center">Дима и Настя</h1>
				{getDayjsWeddingDate().format("DD.MM.YYYY")}
			</div>
			<div className="bg-white text-black px-4 py-8">
				{!isLoading ? (
					<>
						<Title text={data?.title || ""} />

						<div className="font-light flex flex-col gap-y-3">
							<p>
								{data?.paragraph}
								<Icons.HeartSVG className="inline-block ml-1" />
							</p>

							<p>
								В этот летний вечер мы будем петь, танцевать, пить tiramisù, обниматься и отмечать
								один из самых важных дней в нашей жизни вместе.
							</p>
						</div>
					</>
				) : (
					<p>loading...</p>
				)}
			</div>
		</div>
	);
};
