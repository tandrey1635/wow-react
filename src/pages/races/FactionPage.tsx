import Wrapper from "../../components/Wrapper.tsx"
import Header from "../../components/Header.tsx"
import Main from "../../components/Main.tsx"
import Faction from "../../components/races/Faction.tsx"
import Footer from "../../components/Footer.tsx"
import ArrowUp from "../../components/ArrowUp.tsx"

const FactionPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<Faction />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default FactionPage