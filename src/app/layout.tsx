import type { Metadata } from "next";
import { Header } from "./components/header/Header";
import "./reset.css";
import "./globals.css";
import { fontClassNames } from "./font/font";
import styles from "./components/header/styles.module.css";
import { FooterBlock } from "./components/footer/FooterBlock";

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
				<div className={styles.page_wrapper}>
					<Header />
					<main>{children}</main>
					<FooterBlock />
				</div>
			</body>
		</html>
	);
}
