import Wrapper  from "../../../../components/Wrapper";
import Header from "../../../../components/Header";
import Main from "../../../../components/Main";
import Footer  from "../../../../components/Footer";
import ArrowUp  from "../../../../components/ArrowUp";


import Announcement from "../../../../components/Announcement";
import Promo from "../../../../components/Promo";


const Shadowmourne = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<h1 style={{fontSize: 120}} className="text-center text-danger">В разработке</h1>
				<Announcement shadowmourne />
				<Promo shadowmourne />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default Shadowmourne