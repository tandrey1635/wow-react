import Wrapper from "../../components/Wrapper.tsx"
import Header from "../../components/Header.tsx"
import Main from "../../components/Main.tsx"
import RaidsArmours from "../../components/raidsArmours/RaidsArmours.tsx"
import Footer from "../../components/Footer.tsx"
import ArrowUp from "../../components/ArrowUp.tsx"

const RaidsArmoursPage = ()=> {
	return (
		<Wrapper>
			<Header />
			<Main>
				<RaidsArmours />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default RaidsArmoursPage