import Wrapper from "../../components/Wrapper.tsx"
import Header from "../../components/Header.tsx"
import Main from "../../components/Main.tsx"
import RacesDetails from "../../components/races/RacesDetails.tsx"
import Footer from "../../components/Footer.tsx"
import ArrowUp from "../../components/ArrowUp.tsx"

const RacesDetailsPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<RacesDetails />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default RacesDetailsPage