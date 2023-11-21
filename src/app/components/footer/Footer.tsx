import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { SocialLinks } from "../social-links/SocialLinks";
import { ButtonUI } from "../button/ButtonUI";
import { MenuModal } from "../menu-modal/MenuModal";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link href="/">
				<Image
					src="/logo.svg"
					width={200}
					height={68}
					alt="логотип"
					className={styles.logo}
				/>
			</Link>

			<Link href="/">
				<Image
					src="/logo-mobile.svg"
					width={155}
					height={101}
					alt="логотип"
					className={styles.logo_mobile}
				/>
			</Link>

			<div className={styles.contacts}>
				<h2 className={styles.header}>Контакты</h2>
				<div className={styles.button}>
					<ButtonUI name="Обратный звонок" />
				</div>

				<div className={styles.contacts_block}>
					<p>Бесплатно по РФ</p>
					<p className={styles.phone}>8 800 808 77 77</p>
				</div>

				<div className={styles.contacts_block}>
					<p>sale@max-container.com</p>
					<p className={styles.mail}>Email</p>
				</div>

				<div className={styles.contacts_block}>
					<p>Телефон Санкт-Петербург</p>
					<p className={styles.phone}>8 900 356 67 67</p>
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
					<p>Телефон Москва</p>
					<p className={styles.phone}>8 925 567 68 68</p>
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
				<div className={styles.social480}>
					<SocialLinks />
				</div>
			</div>

			<nav className={styles.header_menu}>
				<ul className={styles.header_nav}>
					<li>
						<Link href="/reefer_containers">Рефконтейнеры</Link>
					</li>
					<li>
						<Link href="/dry_cargo">Сухогрузные</Link>
					</li>
					<li>
						<Link href="/rental">Аренда контейнеров</Link>
					</li>
					<li>
						<Link href="/contacts">Контакты</Link>
					</li>
				</ul>
				<div className={styles.socialLinks}>
					<SocialLinks />
				</div>
			</nav>
		</footer>
	);
};

export { Footer };
