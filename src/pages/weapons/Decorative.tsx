import Wrapper  from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer  from "../../components/Footer";
import ArrowUp  from "../../components/ArrowUp";


import Announcement from "../../components/Announcement";
import Promo from "../../components/Promo";
import Cards from "../../components/Cards";


const DecorativeWeapons = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<Announcement decorativeWeapons />
				<Promo decorativeWeapons />
				<Cards decorativeWeapons />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default DecorativeWeapons