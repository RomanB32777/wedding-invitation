import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IFormReply, sendReply } from "@/shared/api";
import { TFormReplyFields } from "@/shared/api/model/types";
import { baseMotionProps, fadeInAnimation, fadeInDirectionAnimation } from "@/shared/constants";
import { IDirectionAnimation, TComponentWithClassName } from "@/shared/types";
import { Button, MTitle } from "@/shared/ui";

import { IFormReplyQuestion, IGuestNumProp } from "../../model/types";

const formQuestions: Record<Exclude<TFormReplyFields, "row">, IFormReplyQuestion> = {
	presence: {
		title: "Сможете ли вы присутствовать на нашем торжестве?",
		type: "radio",
		options: [
			"С удовольствием приду (6 и 7 июля)",
			"Смогу прийти только 6 июля",
			"К сожалению, не смогу присутствовать",
			"Сообщу позже",
		],
	},
	drink: {
		title: "Что предпочитаете из напитков? (возможно отметить несколько вариантов)",
		type: "checkbox",
		options: [
			"Шампанское",
			"Белое вино",
			"Красное вино",
			"Водка",
			"Виски",
			"Джин",
			"Не пью алкоголь",
		],
	},
};

type TReplyForm = IGuestNumProp & TComponentWithClassName;

export const ReplyForm: FC<TReplyForm> = ({ guestsNum, className }) => {
	const { mutateAsync, isPending } = useMutation({
		mutationFn: sendReply,
	});

	const {
		reset,
		handleSubmit,
		register,
		formState: { isValid },
	} = useForm<IFormReply>({ disabled: isPending });

	const submitHandler: SubmitHandler<IFormReply> = async (formData) => {
		await mutateAsync({ ...formData, row: guestsNum });
		reset();
	};

	return (
		<div className={classNames("text-white", className)}>
			<motion.div {...baseMotionProps}>
				<MTitle
					text="Анкета"
					type="white"
					className="indent-2"
					variants={fadeInDirectionAnimation}
				/>

				<motion.p
					variants={fadeInDirectionAnimation}
					custom={{ delay: 2 } as IDirectionAnimation}
					className="font-light"
				>
					Просим подтвердить ваше присутствие <span className="font-normal">до 10 июня</span>
				</motion.p>
			</motion.div>

			<motion.div {...baseMotionProps} variants={fadeInAnimation} custom={3}>
				<form className="bg-white text-black p-6 my-6" onSubmit={handleSubmit(submitHandler)}>
					<div className="divide-y divide-primary-light">
						{Object.entries(formQuestions).map(([field, { title, type, options }]) => (
							<div key={field} className="pb-6 [&:not(:first-child)]:pt-6">
								<legend className="text-base font-medium mb-4">{title}</legend>

								<div className="flex flex-col gap-y-3">
									{options.map((option, index) => (
										<div key={index} className="flex items-center gap-x-3">
											<input
												{...register(field as TFormReplyFields, { required: true })}
												type={type}
												value={option}
												id={`${field}-${index}`}
												name={field}
												className="h-4 w-4 accent-secondary text-secondary focus:ring-0 focus-visible:ring-0"
											/>

											<label htmlFor={`${field}-${index}`} className="block text-base font-light">
												{option}
											</label>
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					<Button disabled={!isValid || isPending} type="submit">
						Отправить
					</Button>
				</form>
			</motion.div>

			<motion.div {...baseMotionProps}>
				<MTitle
					text="Контакты"
					type="white"
					className="indent-2"
					variants={fadeInDirectionAnimation}
					custom={{ delay: 3 } as IDirectionAnimation}
				/>

				<motion.div
					variants={fadeInDirectionAnimation}
					custom={{ delay: 4 } as IDirectionAnimation}
					className="flex flex-col gap-y-3 text-base"
				>
					<p className="font-light">По всем вопросам можно обращаться к нашему организатору</p>
					<p className="font-medium">
						Жанна,{" "}
						<a href="tel:+7 903 472-86-23" className="no-underline">
							+7 903 472-86-23
						</a>
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};
