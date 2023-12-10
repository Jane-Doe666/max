"use client";
import styles from "./styled.module.css";
import { TVisibility } from "../header/Header";
import { useAppDispatch } from "@/app/lib/hooks";
import { filter } from "@/app/features/filter/filterSlice";

const MenuSortingSmall = ({
	handleMenuClick,
	isOpen,
}: {
	handleMenuClick: () => void;
	isOpen: TVisibility;
}) => {
	const dispatch = useAppDispatch();

	const handleFilter = (props: "new" | "low" | "hight") => {
		dispatch(filter(props));
	};

	return (
		<div onClick={handleMenuClick} className={styles[isOpen]}>
			<p className={styles.header}>Сортировать</p>
			<div className={styles.small}>
				<button className={styles.btn} onClick={() => handleFilter("new")}>
					По новизне
				</button>

				<button className={styles.btn} onClick={() => handleFilter("low")}>
					Сначала дешевле
				</button>

				<button className={styles.btn} onClick={() => handleFilter("hight")}>
					Сначала дороже
				</button>
			</div>
		</div>
	);
};

export { MenuSortingSmall };
