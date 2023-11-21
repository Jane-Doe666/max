import { Footer } from "./components/footer/footer";
import { HomePage } from "./home-page/HomePage";
import { Invitation } from "./home-page/Invitation-section/Invitation";
import { Products } from "./home-page/products/Products";
import { Service } from "./home-page/service-section/Service";

export default function Home() {
	return (
		<>
			<HomePage />
			<Products />
			<Service />
			<Invitation />
			<Footer />
		</>
	);
}
