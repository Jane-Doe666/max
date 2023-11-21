import { Onest } from "next/font/google";
import { Raleway } from "next/font/google";

const ralewayExtraBold = Raleway({
	weight: "800",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-raleway-extra-bold",
});

const ralewayBold = Raleway({
	weight: "900",
	variable: "--font-raleway-bold",
	display: "swap",
	subsets: ["latin"],
});

const ralewayReg = Raleway({
	weight: "400",
	variable: "--font-raleway-regular",
	display: "swap",
	subsets: ["latin"],
});

const onestRegular = Onest({
	weight: "400",
	variable: "--font-onest-regular",
	display: "swap",
	subsets: ["latin"],
});

const onestLight = Onest({
	weight: "300",
	variable: "--font-onest-light",
	display: "swap",
	subsets: ["latin"],
});

const onestSemiBold = Onest({
	weight: "600",
	variable: "--font-onest-semibold",
	display: "swap",
	subsets: ["latin"],
});

const onestBold = Onest({
	weight: "700",
	variable: "--font-onest-bold",
	display: "swap",
	subsets: ["latin"],
});

const ralewayBlack = Raleway({
	weight: "900",
	variable: "--font-raleway-black",
	display: "swap",
	subsets: ["latin"],
});

export const fontClassNames = [
	ralewayBlack.variable,
	ralewayBold.variable,
	ralewayExtraBold.variable,
	onestSemiBold.variable,
	onestRegular.variable,
	onestBold.variable,
	onestLight.variable,
	ralewayReg.variable,
].join(" ");
