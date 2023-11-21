import type { Metadata } from "next";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/Header";
import "./reset.css";
import "./globals.css";
import { fontClassNames } from "./font/font";
import styles from "./components/header/styles.module.css";

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
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
}
