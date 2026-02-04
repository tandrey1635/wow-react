import Wrapper  from "../../../../components/Wrapper";
import Header from "../../../../components/Header";
import Main from "../../../../components/Main";
import Footer  from "../../../../components/Footer";
import ArrowUp  from "../../../../components/ArrowUp";


import Announcement from "../../../../components/Announcement";
import Promo from "../../../../components/Promo";


const WeaponsDetails = () => {
	const data = [
		{
			id: "Ashbringer",
			title: "Испепелитель",
			description: "Во время исследования Черной горы Командующий Александрос Могрейн обнаружил на теле мертвого лейтенанта орков необычный кристалл. Он почувствовал темную мощь в необычном предмете, доставленном с далекой планеты Дренор. Воздействуя на него силами Света, кристалл не разрушился, а превратился в сильнейший артефакт Света. Вместе с королевским кузнецом Магни Бронзобородом они выковали величайший клинок своего времени. Меч получил свое название в честь своего первого владельца Александроса Могрейна, чья сила обращала живых мертвецов в пепел."
		},

		{
			id: "SulfurasHandOfRagnaros",
			title: "Сульфурас, Рука Рагнароса",
			description: "123"
		},
	]


	const weapon = data.find(item => item.id == id);

	console.log('ID from URL:', id)

	return (
		<Wrapper>
			<Header />
			<Main>
				<h1 style={{fontSize: 120}} className="text-center text-danger">В разработке</h1>
				<Announcement weaponsDetailsTitle={weapon.title} weaponsDetailsDescription={weapon.description} />

				<Promo weaponsDetails />
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}


export default WeaponsDetails