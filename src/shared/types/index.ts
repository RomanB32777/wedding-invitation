import { HTMLProps } from "react";

export * from "./animations";

export type TComponentWithClassName = Pick<HTMLProps<HTMLElement>, "className">;
