import { FC } from "react";
import styles from "./styles.module.css";

type TButton = {
	name: string;
};

type ButtonArrProps = {
	onClick: () => void;
};

export function ButtonUI({ name }: TButton) {
	return (
		<button className={styles.button} type="button">
			{name}
		</button>
	);
}

export const ButtonScrollLeft: FC<ButtonArrProps> = ({ onClick }) => {
	return (
		<button type="button" className={styles.buttonScroll} onClick={onClick}>
			<svg
				width="10"
				height="15"
				viewBox="0 0 10 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.09375 6.65869L7.15625 0.564942C7.46875 0.283692 7.9375 0.283692 8.21875 0.564942L8.9375 1.28369C9.21875 1.56494 9.21875 2.03369 8.9375 2.34619L4.125 7.18994L8.9375 12.0024C9.21875 12.3149 9.21875 12.7837 8.9375 13.0649L8.21875 13.7837C7.9375 14.0649 7.46875 14.0649 7.15625 13.7837L1.09375 7.68994C0.812499 7.40869 0.812499 6.93994 1.09375 6.65869Z"
					fill="black"
				/>
			</svg>
		</button>
	);
};

export const ButtonScrollRight: FC<ButtonArrProps> = ({ onClick }) => {
	return (
		<button type="button" className={styles.buttonScroll} onClick={onClick}>
			<svg
				width="10"
				height="14"
				viewBox="0 0 10 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.90625 7.53125L2.84375 13.625C2.53125 13.9062 2.0625 13.9062 1.78125 13.625L1.0625 12.9062C0.78125 12.625 0.78125 12.1562 1.0625 11.8438L5.875 7L1.0625 2.1875C0.78125 1.875 0.78125 1.40625 1.0625 1.125L1.78125 0.40625C2.0625 0.125 2.53125 0.125 2.84375 0.40625L8.90625 6.5C9.1875 6.78125 9.1875 7.25 8.90625 7.53125Z"
					fill="black"
				/>
			</svg>
		</button>
	);
};
