"use client";
import { useEffect, useRef, useState } from "react";
import { TVisibility } from "../components/header/Header";
import Bento from "../components/icons/Bento";
import Hamburger from "../components/icons/Hamburger";
import Sorting from "../components/icons/Sorting";
import { MenuSortingSmall } from "../components/menu-sorting/MenuSorting";
import { Product } from "../components/product/Product";
import { ProductHamburger } from "../components/product/product-hamburger/ProductHamburger";
import { Invitation } from "../home-page/Invitation-section/Invitation";
import useCloseOutsideEl from "../hooks/useCloseOutsideEl";
import { prodArray } from "../lib/const";
import { useAppSelector } from "../lib/hooks";
import styles from "./styles.module.css";

export default function ReeferContainers() {
	const [isOpen, setIsOpen] = useState<TVisibility>("hidden");
	const [isHamburger, setHamburger] = useState(false);
	const [products, setProducts] = useState(prodArray);
	const [activeButton, setActiveButton] = useState<string | null>(null);
	const refMenuButton = useRef<HTMLButtonElement>(null);
	const filter = useAppSelector((state) => state.filter.filter);

	function sortProducts(filter: string) {
		switch (filter) {
			case "new":
				// Сортировка по году, от новых к старым
				return setProducts([...products].sort((a, b) => b.year - a.year));

			case "low":
				// Сортировка по цене, от меньшей к большей
				return setProducts(
					[...products].sort(
						(a, b) => parsePrice(a.price) - parsePrice(b.price)
					)
				);

			case "hight":
				// Сортировка по цене, от большей к меньшей
				return setProducts(
					[...products].sort(
						(a, b) => parsePrice(b.price) - parsePrice(a.price)
					)
				);

			default:
				// Если filter не соответствует ни одному из случаев, возвращаем исходный массив
				return setProducts(prodArray);
		}
	}

	function parsePrice(priceString: string) {
		return parseFloat(priceString.replace(/\s/g, ""));
	}

	const handleToggleMenu = () => {
		setIsOpen((prevIsOpen) =>
			prevIsOpen === "visible" ? "hidden" : "visible"
		);
	};

	const handlePageView = (props: string) => {
		console.log(props);
		setHamburger(props === "hamburger" ? true : false);
	};

	useCloseOutsideEl(refMenuButton, setIsOpen);

	useEffect(() => {
		const sortedProducts = sortProducts(filter);
	}, [filter]);

	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget as HTMLButtonElement;
		const prodKey = button.name;
		const prodValue = button.textContent || "";
		const newArray = prodArray;

		const newList = newArray.filter((item) => {
			if (prodKey === "name") {
				return item.name.includes(prodValue);
			} else if (prodKey === "size") {
				return item.size === prodValue;
			} else if (prodKey === "all") {
				return item;
			} else {
				return item.used === true;
			}
		});

		setActiveButton(button.textContent || "");

		return setProducts(newList);
	};

	return (
		<div>
			<div className={styles.filters}>
				<div className={styles.filter_product}>
					<button
						name="name"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "Carrier" ? styles.activeButton : ""
						}`}>
						Carrier
					</button>
					<button
						name="name"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "Thermo King" ? styles.activeButton : ""
						}`}>
						Thermo King
					</button>
					<button
						name="name"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "Daikin" ? styles.activeButton : ""
						}`}>
						Daikin
					</button>
					<button
						name="size"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "20 футов" ? styles.activeButton : ""
						}`}>
						20 футов
					</button>
					<button
						name="size"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "40 футов" ? styles.activeButton : ""
						}`}>
						40 футов
					</button>
					<button
						name="size"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "45 футов" ? styles.activeButton : ""
						}`}>
						45 футов
					</button>
					<button
						name="used"
						onClick={handleFilter}
						className={`${styles.button} ${
							activeButton === "Б/У" ? styles.activeButton : ""
						}`}>
						Б/У
					</button>
					<button name="all" onClick={handleFilter} className={styles.button}>
						Сбросить фильтры
					</button>
				</div>

				<div className={styles.filter_view}>
					<button
						className={styles.button_date}
						onClick={handleToggleMenu}
						ref={refMenuButton}>
						<span>По новизне</span>
						<Sorting />
					</button>
					<MenuSortingSmall
						handleMenuClick={handleToggleMenu}
						isOpen={isOpen}
					/>

					<button onClick={() => handlePageView("bento")}>
						<Bento />
					</button>

					<button onClick={() => handlePageView("hamburger")}>
						<Hamburger />
					</button>
				</div>
			</div>
			{!isHamburger && (
				<div className={styles.bento}>
					{products.map((item, inx) => (
						<Product {...item} key={inx} />
					))}
				</div>
			)}
			{isHamburger && (
				<div className={styles.hamburger}>
					{products.map((item, inx) => (
						<ProductHamburger {...item} key={inx} />
					))}
				</div>
			)}

			<Invitation />
		</div>
	);
}
