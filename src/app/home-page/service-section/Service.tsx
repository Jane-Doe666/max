import { serviceArray } from "@/app/lib/const";
import styles from "./styles.module.css";
import Image from "next/image";

export function Service() {
	return (
		<section className={styles.service}>
			<h2 className={styles.service_header}>Мы продаём контейнеры.</h2>
			<p className={styles.service_info}>
				Можем осуществлять крупные поставки. Мы торгуем новыми
				<br /> и подержанными контейнерами по всей России.
			</p>
			<div className={styles.services_block}>
				{serviceArray.map((item) => (
					<div className={styles.service_item}>
						<div className={styles.round_check}>
							<Image
								src="/vector-flag.svg"
								width={18}
								height={13}
								alt="vector"
							/>
						</div>
						<p className={styles.service_item_header}>{item.header}</p>
						<p className={styles.service_item_description}>{item.service}</p>
					</div>
				))}
			</div>
			<h3 className={styles.header_clients}>Наши клиенты</h3>
			<div className={styles.clients_block}>
				<div className={styles.container_image}>
					<Image
						src="/myasokomb.svg"
						layout="responsive"
						width={212}
						height={87}
						alt="myasokombat"
					/>
				</div>

				<div className={styles.container_image}>
					<Image
						src="/baltic.svg"
						layout="responsive"
						width={155}
						height={111}
						alt="baltic"
					/>
				</div>
				<div className={styles.container_image}>
					<Image
						src="/petelinka.svg"
						layout="responsive"
						width={175}
						height={117}
						alt="petelinka"
					/>
				</div>
				<div className={styles.container_image}>
					<Image
						src="/kotleta.svg"
						layout="responsive"
						width={251}
						height={95}
						alt="kotleta"
					/>
				</div>
			</div>
		</section>
	);
}
