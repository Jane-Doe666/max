import { ContactsBlock } from "../components/contacts/ContactsBlock";
import styles from "./styles.module.css";

export default function ContactsPage() {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.info}>
					<ContactsBlock />
				</div>

				<div className={styles.photo}></div>
			</div>
		</section>
	);
}
