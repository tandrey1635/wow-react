import Wrapper from "../../components/Wrapper.tsx"
import Header from "../../components/Header.tsx"
import Main from "../../components/Main.tsx"
import MountsDetails from "../../components/mounts/MountsDetails.tsx"
import Footer from "../../components/Footer.tsx"
import ArrowUp from "../../components/ArrowUp.tsx"






const MountsDetailsPage = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<MountsDetails />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default MountsDetailsPage