"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { TVisibility } from "../header/Header";

export const MenuModal = ({
	handleMenuClick,
	isOpen,
}: {
	handleMenuClick: () => void;
	isOpen: TVisibility;
}) => {
	return (
		<div onClick={handleMenuClick} className={styles[isOpen]}>
			<nav className={styles.header_menu}>
				<ul>
					<li className={styles.li}>
						<Link href="/reefer_containers">Рефконтейнеры</Link>
					</li>

					<li className={styles.li}>
						<Link href="/dry_cargo">Сухогрузные</Link>
					</li>

					<li className={styles.li}>
						<Link href="/contacts">Аренда контейнеров</Link>
					</li>

					<li className={styles.li}>
						<Link href="/contacts">Контакты</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
