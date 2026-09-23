import Wrapper  from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Weapons from "../../components/weapons/Weapons";
import Footer  from "../../components/Footer";
import ArrowUp  from "../../components/ArrowUp";


const WeaponsPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<Weapons />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default WeaponsPage