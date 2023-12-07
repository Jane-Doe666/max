"use client";
import { useAppDispatch } from "@/app/lib/hooks";
import { handleClick } from "@/app/utils/func";
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

export function Product(item: TProd & { hamburger: string }) {
	const productClass =
		item.hamburger === "hamburger" ? styles.productHamburger : styles.product;

	const dispatch = useAppDispatch();
	return (
		<div className={productClass}>
			<div
				className={styles[item.hamburger] || styles.bento}
				onClick={() => handleClick({ dispatch, buttonName: "Подробнее" })}>
				<Image
					src="/container.png"
					alt="container"
					width={275}
					height={225}
					sizes="100vw"
					className={styles.myImage}
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</div>

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
