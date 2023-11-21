"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { ButtonUI } from "../button/ButtonUI";
import { ButtonMenu } from "../button/ButtonMenu";
import { MenuModal } from "../menu-modal/MenuModal";
import { useRef } from "react";

const Header = () => {
	const refMenu = useRef<HTMLDivElement>(null);

	const handleOpenMenu = () => {
		if (refMenu.current) {
			refMenu.current.style.display === "block"
				? (refMenu.current.style.display = "none")
				: (refMenu.current.style.display = "block");
		}
	};

	return (
		<header>
			<Link href="/">
				<Image
					src="/logo.svg"
					width={200}
					height={68}
					alt="Picture of the author"
					className={styles.logo}
				/>
			</Link>
			<div className={styles.info}>
				<p>Бесплатно по РФ</p>
				<p>8 800 808 77 77</p>
				<p>Работаем 24/7</p>
			</div>
			<nav className={styles.header_menu}>
				<ul className={styles.header_nav}>
					<li className={styles.li}>
						<Link href="/reefer_containers">Рефконтейнеры</Link>
					</li>
					<li className={styles.li}>
						<Link href="/dry_cargo">Сухогрузные</Link>
					</li>
					<li className={styles.li}>
						<Link href="/rental">Аренда контейнеров</Link>
					</li>
					<li className={styles.li}>
						<Link href="/contacts">Контакты</Link>
					</li>
				</ul>
			</nav>
			<MenuModal ref={refMenu} />
			<div className={styles.button_menu}>
				<ButtonMenu onClick={handleOpenMenu} />
			</div>
			<div className={styles.button}>
				<ButtonUI name="Обратный звонок" />
			</div>
		</header>
	);
};

export { Header };
