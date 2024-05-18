import classNames from "classnames";

import type { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	disabled?: boolean;
	onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButton> = ({ children, type = "button", disabled, onClick, ...props }) => (
	<button
		className={classNames(
			"bg-secondary text-white text-base font-normal w-full py-3 duration-200",
			{
				"disabled:opacity-75": disabled,
			}
		)}
		type={type}
		disabled={disabled}
		onClick={onClick}
		{...props}
	>
		{children}
	</button>
);
