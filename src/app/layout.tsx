import type { Metadata } from "next";
import Head from "next/head";
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
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
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
