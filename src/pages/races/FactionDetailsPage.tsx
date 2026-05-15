import Wrapper from "../../components/Wrapper.tsx"
import Header from "../../components/Header.tsx"
import Main from "../../components/Main.tsx"
import FactionDetails from "../../components/races/FactionDetails.tsx"
import Footer from "../../components/Footer.tsx"
import ArrowUp from "../../components/ArrowUp.tsx"

const FactionDetailsPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<FactionDetails />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default FactionDetailsPage