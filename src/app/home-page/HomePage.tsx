"use client";
import Image from "next/image";
import { ButtonUI } from "../components/button/ButtonUI";
import { ContactsBlock } from "../components/contacts/ContactsBlock";
import { useAppDispatch } from "../lib/hooks";
import { handleClick } from "../utils/func";
import styles from "./styles.module.css";

export function HomePage() {
	const dispatch = useAppDispatch();

	return (
		<section className={styles.contacts_wrapper}>
			<div className={styles.info}>
				<ContactsBlock />
			</div>

			<div className={styles.services}>
				<h2 className={styles.header_service}>
					Рефрижераторные и сухогрузные
					<br /> контейнеры новые и Б/У
				</h2>
				<h2 className={styles.header_service_mid}>
					Рефрижераторные и <br />
					сухогрузные контейнеры <br />
					новые и Б/У
				</h2>
				<p className={styles.media_desc}>
					Настоящие контейнеры, без пробега по России, с <br />
					гарантией до 2 лет и бесплатной доставкой в любой
					<br />
					регион РФ! Работаем в лизинг!
				</p>
				<p className={styles.media_mid}>
					Настоящие контейнеры, без пробега по России, <br />
					с гарантией до 2 лет и бесплатной доставкой в <br />
					любой регион РФ! Работаем в лизинг!
				</p>
				<p className={styles.mobile}>
					Настоящие контейнеры, без пробега <br />
					по России, с гарантией до 2 лет и <br />
					бесплатной доставкой в любой
					<br />
					регион РФ! Работаем в лизинг!
				</p>
				<ul className={styles.servise_link}>
					<li>
						<a href="#">Покупка</a>
					</li>
					<li>
						<a href="#">Продажа</a>
					</li>
					<li>
						<a href="#">Лизинг</a>
					</li>
				</ul>

				<div className={styles.button}>
					<ButtonUI
						name="Обратный звонок"
						onClick={() =>
							handleClick({ dispatch, buttonName: "Обратный звонок" })
						}
					/>
				</div>

				<Image
					src="/container.svg"
					width={590}
					height={286}
					alt="container"
					className={styles.container}
				/>
			</div>
		</section>
	);
}
