import styles from "./styles.module.css";

export function ContactsBlock() {
	return (
		<div className={styles.contacts}>
			<h2 className={styles.header}>Контакты</h2>

			<div className={styles.contacts_block}>
				<p>Бесплатно по РФ</p>
				<p>8 800 808 77 77</p>
			</div>

			<div className={styles.contacts_block}>
				<p>Телефон Санкт-Петербург</p>
				<p>8 900 356 67 67</p>
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
				<p>8 925 567 68 68</p>
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
				<p>sale@max-container.com</p>
				<p>Email</p>
			</div>
		</div>
	);
}
