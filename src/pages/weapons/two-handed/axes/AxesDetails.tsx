import ArrowUp from "../../../../components/ArrowUp";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Main from "../../../../components/Main";
import Wrapper from "../../../../components/Wrapper";


import Announcement from "../../../../components/Announcement";
import Promo from "../../../../components/Promo";
import WeaponDetails from "../../../../components/WeaponDetails";

import dataTwoHandedAxes from "../../../../json/weapons/two-handed/axes/axes-details.json";



const AxesDetails = () => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<h1 style={{fontSize: 120}} className="text-center text-danger">В разработке</h1>
				<Announcement twoHandedAxes />
				<Promo twoHandedAxes />
				<WeaponDetails twoHandedAxesWeaponDetails data={dataTwoHandedAxes} />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default AxesDetails