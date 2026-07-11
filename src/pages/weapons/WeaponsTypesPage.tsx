import Wrapper  from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import WeaponsTypes from "../../components/weapons/WeaponsTypes";
import Footer  from "../../components/Footer";
import ArrowUp  from "../../components/ArrowUp";


const WeaponsTypesPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<WeaponsTypes />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default WeaponsTypesPage