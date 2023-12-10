"use client";
import React from "react";
import styles from "./styles.module.css"; // Замените на путь к вашему CSS файлу
import { ButtonUI } from "@/app/components/button/ButtonUI";
import { SocialLinks } from "@/app/components/social-links/SocialLinks";
import { handleClick } from "@/app/utils/func";
import { useAppDispatch } from "@/app/lib/hooks";

export function Invitation() {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<h1 className={styles.header}>
					Звоните и пишите,
					<br /> поможем с выбором!
				</h1>
				<p className={styles.textContent}>
					Приглашаем на личный осмотр <br />
					контейнера. Для тех кто не может <br />
					присутствовать, предоставим <br />
					подробные <span className={styles.span}>фото и видео.</span>
				</p>
				<p className={styles.textContent}>
					Оставьте свой телефон, и мы <br />
					перезвоним Вам, или свяжитесь <br />с нами по указанному номеру
				</p>
				<div className={styles.phone}>8 800 808 77 77</div>
				<div className={styles.button}>
					<ButtonUI
						name="Оставить свой номер"
						onClick={() =>
							handleClick({ dispatch, buttonName: "Оставить свой номер" })
						}
					/>
				</div>
				<SocialLinks />
			</div>

			<div className={styles.imageContent}></div>
		</div>
	);
}
