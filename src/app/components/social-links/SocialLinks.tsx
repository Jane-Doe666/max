import Image from "next/image";
import styles from "./styles.module.css";

export function SocialLinks() {
	return (
		<ul className={styles.socialIcons}>
			<li>
				<Image src="/telegram.svg" alt="telegram" width={21} height={21} />
			</li>
			<li>
				<Image src="/call.svg" alt="call" width={21} height={21} />
			</li>
			<li>
				<Image src="/mail.svg" alt="mail" width={21} height={21} />
			</li>
		</ul>
	);
}
