import type { Metadata } from "next";
import { Header } from "./components/header/Header";
import "./reset.css";
import "./globals.css";
import { fontClassNames } from "./font/font";
import styles from "./components/header/styles.module.css";
import { FooterBlock } from "./components/footer/FooterBlock";
import StoreProvider from "./StoreProvider";
import { Modal } from "./components/modal/Modal";

export const metadata: Metadata = {
	title: "Max Container",
	description: "продажа контейнеров рефрижераторных и сухогрузных",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={`${fontClassNames}`}>
			<body>
				<StoreProvider>
					<div className={styles.page_wrapper}>
						<Modal />
						<Header />
						<main>{children}</main>
						<FooterBlock />
					</div>
				</StoreProvider>
			</body>
		</html>
	);
}
