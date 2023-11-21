import styles from "./styles.module.css";

type TButton = {
	onClick: () => void;
};

export function ButtonMenu({ onClick }: TButton) {
	return (
		<button className={styles.button_menu} type="button" onClick={onClick}>
			<hr className={styles.line}></hr>
			<hr className={styles.line}></hr>
			<hr className={styles.line}></hr>
		</button>
	);
}
