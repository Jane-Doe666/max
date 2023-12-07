"use client";
import { useRef, useState } from "react";
import { TVisibility } from "../components/header/Header";
import Bento from "../components/icons/Bento";
import Hamburger from "../components/icons/Hamburger";

import Sorting from "../components/icons/Sorting";
import { MenuSortingSmall } from "../components/menu-sorting/MenuSorting";
import { Product } from "../components/product/Product";
import { Invitation } from "../home-page/Invitation-section/Invitation";
import useCloseOutsideEl from "../hooks/useCloseOutsideEl";
import { prodArray } from "../lib/const";
import styles from "./styles.module.css";

export default function ReeferContainers() {
	const [isOpen, setIsOpen] = useState<TVisibility>("hidden");
	const [isHamburger, setHamburger] = useState("bento");

	const refMenuButton = useRef<HTMLButtonElement>(null);
	const handleToggleMenu = () => {
		setIsOpen((prevIsOpen) =>
			prevIsOpen === "visible" ? "hidden" : "visible"
		);
	};

	const handlePageView = (props: string) => {
		setHamburger(props);
	};

	useCloseOutsideEl(refMenuButton, setIsOpen);

	return (
		<div>
			<div className={styles.filters}>
				<div className={styles.filter_product}>
					<button>Carrier</button>
					<button>Thermo King</button>
					<button>Daikin</button>
					<button>20 футов</button>
					<button>40 футов</button>
					<button>45 футов</button>
					<button>Б/У</button>
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
			<div className={styles[isHamburger]}>
				{prodArray.map((item, inx) => (
					<Product {...item} key={inx} hamburger={isHamburger} />
				))}
			</div>
			<Invitation />
		</div>
	);
}
