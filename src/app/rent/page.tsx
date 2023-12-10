"use client";
import { ButtonUI } from "../components/button/ButtonUI";
import styles from "./styles.module.css";
import Image from "next/image";
import { Invitation } from "../home-page/Invitation-section/Invitation";
import { handleClick } from "../utils/func";
import { useAppDispatch } from "../lib/hooks";

export default function Rent() {
	const dispatch = useAppDispatch();
	return (
		<div>
			<div className={styles.rent}>
				<h1 className={styles.header}>Аренда контейнеров</h1>
				<p className={styles.text}>
					Компания Макс Контейнер оказывает профессиональные
					<br /> услуги по аренде контейнеров всех типов. В некоторых
					<br /> случаях легче и выгодно взять в аренду необходимый
					<br /> рефрижераторный контейнер, чем приобрести его.
				</p>
				<div className={styles.button}>
					<ButtonUI
						name="Заказать услугу"
						onClick={() =>
							handleClick({ dispatch, buttonName: "Заказать услугу" })
						}
					/>
				</div>
				<div className={styles.container_pict}>
					<Image
						src="/container.svg"
						layout="fill"
						alt="container"
						className={styles.container}
					/>
				</div>
			</div>
			<h3 className={styles.sub_header}>
				Есть в наличии контейнера 20, 40 и 45 футов, также можем
				<br className={styles.text_mobile} /> подобрать для вас нужный контейнер
			</h3>
			<div className={styles.pict}>
				<div className={styles.pict_1}></div>
				<div className={styles.pict_2}></div>
				<div className={styles.pict_3}></div>
				<div className={styles.pict_4}></div>
			</div>

			<Invitation />
		</div>
	);
}
