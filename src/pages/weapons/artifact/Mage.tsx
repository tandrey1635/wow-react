import ArrowUp from "../../../components/ArrowUp";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import Wrapper from "../../../components/Wrapper";


import Announcement from "../../../components/Announcement";
import Cards from "../../../components/Cards";
import Promo from "../../../components/Promo";


const MageArtifacts = () => {
	return (
		<>
			<Wrapper>
				<Header />
				<Main>
					<h1 style={{fontSize: 120}} className="text-center text-danger">В разработке</h1>
					<Announcement artifactWeapons />
					<Promo mage />
					<Cards mageArtifacts />
				</Main>
				<Footer />
				<ArrowUp />
			</Wrapper>
		</>
	)
}


export default MageArtifacts