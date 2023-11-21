import Image from "next/image";
import Link from "next/link";
import { ButtonUI } from "../button/ButtonUI";
import styles from "./styles.module.css";

type TProd = {
	name: string;
	year: number;
	size: string;
	condition: string;
	type: string;
	price: string;
};

export function Product(item: TProd) {
	return (
		<div className={styles.product}>
			<Image
				src="/container.png"
				width={275}
				height={286}
				alt="container"
				className={styles.container}
			/>
			<div className={styles.info}>
				<Link href="#" className={styles.prod_name}>
					{item.name}
				</Link>
				<p>Год выпуска: {item.year}</p>
				<p>Размеры: {item.size}</p>
				<p>Состояние: Б/У (как на фото)</p>
				<p>Тип компрессора: {item.type}</p>
				<p className={styles.prod_price}>{item.price} ₽</p>
				<div className={styles.button_details}>
					<ButtonUI name="Подробнее" />
				</div>
			</div>
		</div>
	);
}
