import Image from "next/image";
import styles from "./styles.module.css";

export default function PictureModal() {
	return (
		<Image
			src="/carr-modal.png"
			width={500}
			height={410}
			alt="container"
			className={styles.pict}
		/>
	);
}
