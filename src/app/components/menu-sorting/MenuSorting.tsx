"use client";
import styles from "./styled.module.css";
import Link from "next/link";
import { TVisibility } from "../header/Header";

const MenuSortingSmall = ({
	handleMenuClick,
	isOpen,
}: {
	handleMenuClick: () => void;
	isOpen: TVisibility;
}) => {
	return (
		<div onClick={handleMenuClick} className={styles[isOpen]}>
			<p className={styles.header}>Сортировать</p>
			<div className={styles.small}>
				<button className={styles.btn}>По новизне</button>

				<button className={styles.btn}>Сначала дешевле</button>

				<button className={styles.btn}>Сначала дороже</button>
			</div>
		</div>
	);
};

export { MenuSortingSmall };
