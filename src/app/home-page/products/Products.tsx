"use client";

import {
	ButtonScrollLeft,
	ButtonScrollRight,
} from "@/app/components/button/ButtonUI";
import { Product } from "@/app/components/product/Product";
import styles from "./styles.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { prodArray } from "./../../lib/const";

export function Products() {
	const [startIndex, setStartIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(295);

	const handleClick = (direction: number) => {
		setStartIndex((prevIndex) => {
			const newIndex = prevIndex + direction;
			return Math.max(0, Math.min(newIndex, prodArray.length - 4));
		});
	};

	const updateItemWidth = useCallback(() => {
		const width = window.innerWidth < 1001 ? 245 : 295;
		setItemWidth(width);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", updateItemWidth);
		updateItemWidth(); // Вызов при монтировании для установки начального значения

		return () => {
			window.removeEventListener("resize", updateItemWidth); // Очистка при размонтировании
		};
	}, [updateItemWidth]);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--translateX",
				`-${startIndex * itemWidth}px`
			);
		}
	}, [startIndex, itemWidth]);

	return (
		<section className={styles.products}>
			<div className={styles.productContainer}>
				<div ref={containerRef} className={styles.productContainerInner}>
					{prodArray.map((item, inx) => (
						<Product {...item} key={inx} />
					))}
				</div>
			</div>
			<div className={styles.scroll_buttuns}>
				<ButtonScrollLeft
					onClick={() => {
						handleClick(-1);
					}}
				/>
				<ButtonScrollRight
					onClick={() => {
						handleClick(1);
					}}
				/>
			</div>
		</section>
	);
}
