import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IFormReply, sendReply } from "@/shared/api";

import { IGuestNumProp } from "../../model/types";

export const ReplyForm: FC<IGuestNumProp> = ({ guestsNum }) => {
	const { mutateAsync, isPending } = useMutation({
		mutationFn: sendReply,
	});

	const {
		reset,
		handleSubmit,
		register,
		// formState: { isLoading },
	} = useForm<IFormReply>({ disabled: isPending, mode: "onChange" });

	// isLoading, isSuccess, error

	const submitHandler: SubmitHandler<IFormReply> = async (formData) => {
		await mutateAsync({ ...formData, row: guestsNum });
		reset();
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<div>
				<label htmlFor="field-rain">
					<input {...register("presence")} type="radio" value="rain" id="field-rain" />
					Rain
				</label>
				<label htmlFor="field-wind">
					<input {...register("presence")} type="radio" value="wind" id="field-wind" />
					Lots of wind
				</label>
				<label htmlFor="field-sun">
					<input {...register("presence")} type="radio" value="sun" id="field-sun" />
					Sunny
				</label>
			</div>

			<fieldset>
				<legend className="text-sm font-semibold leading-6 text-gray-900">
					Push Notifications
				</legend>
				<p className="mt-1 text-sm leading-6 text-gray-600">
					These are delivered via SMS to your mobile phone.
				</p>
				<div className="mt-6 space-y-6">
					<div className="flex items-center gap-x-3">
						<input
							id="push-everything"
							name="push-notifications"
							type="radio"
							className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label
							htmlFor="push-everything"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Everything
						</label>
					</div>
					<div className="flex items-center gap-x-3">
						<input
							id="push-email"
							name="push-notifications"
							type="radio"
							className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label
							htmlFor="push-email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Same as email
						</label>
					</div>
					<div className="flex items-center gap-x-3">
						<input
							id="push-nothing"
							name="push-notifications"
							type="radio"
							className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label
							htmlFor="push-nothing"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							No push notifications
						</label>
					</div>
				</div>
			</fieldset>

			<fieldset>
				<legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
				<div className="mt-6 space-y-6">
					<div className="relative flex gap-x-3">
						<div className="flex h-6 items-center">
							<input
								id="comments"
								name="comments"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
						</div>
						<div className="text-sm leading-6">
							<label htmlFor="comments" className="font-medium text-gray-900">
								Comments
							</label>
							<p className="text-gray-500">
								Get notified when someones posts a comment on a posting.
							</p>
						</div>
					</div>
					<div className="relative flex gap-x-3">
						<div className="flex h-6 items-center">
							<input
								id="candidates"
								name="candidates"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
						</div>
						<div className="text-sm leading-6">
							<label htmlFor="candidates" className="font-medium text-gray-900">
								Candidates
							</label>
							<p className="text-gray-500">Get notified when a candidate applies for a job.</p>
						</div>
					</div>
					<div className="relative flex gap-x-3">
						<div className="flex h-6 items-center">
							<input
								id="offers"
								name="offers"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
						</div>
						<div className="text-sm leading-6">
							<label htmlFor="offers" className="font-medium text-gray-900">
								Offers
							</label>
							<p className="text-gray-500">
								Get notified when a candidate accepts or rejects an offer.
							</p>
						</div>
					</div>
				</div>
			</fieldset>

			<div>
				<label htmlFor="field-lol">
					<input {...register("drink")} type="checkbox" value="test1" id="field-lol" />
					Lol
				</label>
				<label htmlFor="field-lol2">
					<input {...register("drink")} type="checkbox" value="test2" id="field-lol2" />
					Lol2
				</label>
			</div>

			<button type="submit">Send</button>
		</form>
	);
};
