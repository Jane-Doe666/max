"use client";
import { ButtonUI } from "@/app/components/button/ButtonUI";
import { prodArray } from "@/app/lib/const";
import { useAppDispatch } from "@/app/lib/hooks";
import { handleClick } from "@/app/utils/func";
import Image from "next/image";
import styles from "./styles.module.css";

export default function ProductPage({ params }: { params: { id: string } }) {
	const product = prodArray.find((item) => item.id === Number(params.id));
	const dispatch = useAppDispatch();

	return product === undefined ? (
		<div>Loading</div>
	) : (
		<div className={styles.wrapper}>
			<div className={styles.product}>
				<div className={styles.imgBox}>
					<Image
						className={styles.img}
						src="/container.png"
						alt="container"
						width={349}
						height={349}
						aria-label="Изображение продукта"
					/>
					<Image
						className={styles.img}
						src="/container.png"
						alt="container"
						width={349}
						height={349}
						aria-label="Изображение продукта"
					/>
					<div className={styles.order}>
						<h1 className={styles.header}>{product.name}</h1>
						<span>Доставка во все города России</span>
						<div className={styles.button}>
							<ButtonUI
								name="Заказать"
								onClick={() =>
									handleClick({ dispatch, buttonName: "Заказать" })
								}
								aria-label="Заказать"
							/>
						</div>
					</div>
				</div>

				<div className={styles.info}>
					<div className="section">
						<h2>Внешние размеры</h2>
						<div className={styles.dimensions}>
							<div className={styles.dimension}>
								<span>Длина</span>
								<span>12192 мм</span>
							</div>
							<div className={styles.dimension}>
								<span>Ширина</span>
								<span>2438 мм</span>
							</div>
							<div className={styles.dimension}>
								<span>Высота</span>
								<span>2895 мм</span>
							</div>
						</div>
					</div>
					<div>
						<h2>Внутренние размеры</h2>
						<div className={styles.dimensions}>
							<div className={styles.dimension}>
								<span>Длина</span>
								<span>11638 мм</span>
							</div>
							<div className={styles.dimension}>
								<span>Ширина</span>
								<span>2286 мм</span>
							</div>
							<div className={styles.dimension}>
								<span>Высота</span>
								<span>2585 мм</span>
							</div>
							<div className={styles.dimension}>
								<span>Внутренний объём</span>
								<span>68.03 м3</span>
							</div>
							<div className={styles.dimension}>
								<span>Кол-во вмещаемых европаллет</span>
								<span> 23</span>
							</div>
						</div>
					</div>

					<div>
						<h2>Весовые параметры</h2>
						<div className={styles.dimensions}>
							<div className={styles.dimension}>
								<span>Собственный вес</span>
								<span>4750 кг</span>
							</div>
							<div className={styles.dimension}>
								<span>Макс. грузоподъёмность</span>
								<span>27790 кг</span>
							</div>
							<div className={styles.dimension}>
								<span>Макс. общий вес</span>
								<span>32500 кг</span>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.dimensions}>
							<div className={styles.dimension}>
								<h2>Тип компрессора</h2>
								<h2>Спиральный</h2>
							</div>
							<div className={styles.dimension}>
								<span>Поддерживаемый диапазон температур</span>
								<span>от -30 до +25°C</span>
							</div>
							<div className={styles.dimension}>
								<span>Хладопроизво-сть</span>
								<span>4104-16603 кВт/час</span>
							</div>
							<div className={styles.dimension}>
								<span>Теплопроизво-сть</span>
								<span>4104-16603 кВт/час</span>
							</div>
							<div className={styles.dimension}>
								<span>Среднее потребление энергии</span>
								<span>4.2 кВт/час</span>
							</div>
							<div className={styles.dimension}>
								<span>Применяемые хладагенты</span>
								<span>R404A</span>
							</div>
							<div className={styles.dimension}>
								<span>Контроллер</span>
								<span>MP3000</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className={styles.contacts}>
				<div className={styles.contacts_block}>
					<p className={styles.free}>Бесплатно по РФ</p>
					<p className={styles.numberFree}>8 800 808 77 77</p>
					<p className={styles.textBlack}>Работаем 24/7</p>
				</div>

				<div className={styles.contacts_block}>
					<p className={styles.text}>Телефон Москва</p>
					<p className={styles.number}>8 925 567 68 68</p>
					<ul className={styles.contacts_links}>
						<li>
							<a href="#">Telegram</a>
						</li>
						<li>
							<a href="#">Whats app</a>
						</li>
						<li>
							<a href="#">Viber</a>
						</li>
					</ul>
				</div>

				<div className={styles.contacts_block}>
					<p className={styles.text}>Телефон Санкт-Петербург</p>
					<p className={styles.number}>8 900 356 67 67</p>
					<ul className={styles.contacts_links}>
						<li>
							<a href="#">Telegram</a>
						</li>
						<li>
							<a href="#">Whats app</a>
						</li>
						<li>
							<a href="#">Viber</a>
						</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
}
