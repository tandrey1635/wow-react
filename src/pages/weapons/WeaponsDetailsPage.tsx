import Wrapper  from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import WeaponsDetails from "../../components/weapons/WeaponsDetails";
import Footer  from "../../components/Footer";
import ArrowUp  from "../../components/ArrowUp";


const WeaponsDetailsPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<WeaponsDetails />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default WeaponsDetailsPage