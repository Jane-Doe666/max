"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { ButtonUI } from "../button/ButtonUI";
import { ButtonMenu } from "../button/ButtonMenu";
import { MenuModal } from "../menu-modal/MenuModal";
import { useEffect, useRef, useState } from "react";

export type TVisibility = "visible" | "hidden";

const Header = () => {
	const refMenu = useRef<HTMLDivElement>(null);
	const refMenuButton = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<TVisibility>("hidden");

	const handleToggleMenu = () => {
		setIsOpen((prevIsOpen) =>
			prevIsOpen === "visible" ? "hidden" : "visible"
		);
	};

	useEffect(() => {
		const handleClose = (event: MouseEvent | KeyboardEvent) => {
			if (event instanceof KeyboardEvent && event.key === "Escape") {
				setIsOpen("hidden");
				return;
			}

			const target = event.target as Node;

			if (
				refMenu.current &&
				!refMenu.current.contains(target) &&
				refMenuButton.current &&
				!refMenuButton.current.contains(target)
			) {
				setIsOpen("hidden");
			}
		};

		document.addEventListener("click", handleClose);
		document.addEventListener("keydown", handleClose);

		return () => {
			document.removeEventListener("click", handleClose);
			document.removeEventListener("keydown", handleClose);
		};
	}, []);

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
						<Link href="/rent">Аренда контейнеров</Link>
					</li>
					<li className={styles.li}>
						<Link href="/contacts">Контакты</Link>
					</li>
				</ul>
			</nav>

			<MenuModal
				handleMenuClick={handleToggleMenu}
				ref={refMenu}
				isOpen={isOpen}
			/>

			<div className={styles.button_menu} ref={refMenuButton}>
				<ButtonMenu onClick={handleToggleMenu} />
			</div>

			<div className={styles.button}>
				<ButtonUI name="Обратный звонок" />
			</div>
		</header>
	);
};

export { Header };
