"use client";
import { useAppDispatch } from "@/app/lib/hooks";
import { handleClick } from "@/app/utils/func";
import Image from "next/image";
import Link from "next/link";
import { ButtonUI } from "../button/ButtonUI";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { TProd } from "@/app/lib/types";

export function Product(item: TProd) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleProductPage = () => {
		router.push(`/reefer_containers/${item.id}`);
	};

	return (
		<div className={styles.product}>
			<div
				className={styles.bento}
				// onClick={() => handleClick({ dispatch, buttonName: "Подробнее" })}
			>
				<Link
					href={`/reefer_containers/${item.id}`}
					aria-label="Узнать подробнее о продукте">
					<Image
						src="/container.png"
						alt="container"
						width={275}
						height={225}
						sizes="100vw"
						className={styles.myImage}
						aria-label="Изображение продукта"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
				</Link>
			</div>

			<div className={styles.info}>
				<Link
					href={`/reefer_containers/${item.id}`}
					className={styles.prod_name}
					aria-label="Узнать подробнее о продукте">
					{item.name}
				</Link>

				<p>Год выпуска: {item.year}</p>
				<p>Размеры: {item.size}</p>
				<p>Состояние: Б/У (как на фото)</p>
				<p>Тип компрессора: {item.type}</p>
				<p className={styles.prod_price}>{item.price} ₽</p>
				<div className={styles.button_details}>
					<ButtonUI
						name="Подробнее"
						onClick={handleProductPage}
						aria-label="Узнать подробнее о продукте"
					/>
				</div>
			</div>
		</div>
	);
}
