import styles from "./styles.module.css";
import Image from "next/image";
import { ButtonUI } from "../components/button/ButtonUI";
import { Invitation } from "../home-page/Invitation-section/Invitation";

export default function DryCargo() {
	return (
		<div>
			<div className={styles.rent}>
				<h1 className={styles.header}>
					Сухогрузные контейнеры
					<br /> новые и Б/У
				</h1>
				<p className={styles.text}>
					Морские контейнера 20 и 40 футов, новые и БУ
					<br /> с доставкой по всей России. Возможность <br /> оплаты от 50%,
					наличие в СПБ, Москве,
					<br /> Новосибирске!
				</p>
				<div className={styles.button}>
					<ButtonUI name="Выбрать контайнер" />
				</div>
				<div className={styles.container_pict}>
					<Image
						src="/cargo-svg.svg"
						layout="fill"
						alt="container"
						className={styles.container}
					/>
				</div>
			</div>
			<h3 className={styles.sub_header}>
				Есть в наличии морские контейнера 20, 40 и 45 футов
				<br className={styles.sub_header_mob} /> высокие HC и стандартные DC
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
