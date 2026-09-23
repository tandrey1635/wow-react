import { useRef } from "react"

import Wrapper from "../../../components/Wrapper.tsx"
import Header from "../../../components/Header.tsx"
import Main from "../../../components/Main.tsx"
import Footer from "../../../components/Footer.tsx"
import ArrowUp from "../../../components/ArrowUp.tsx"

const NaxxramasClassicSapphiron = ()=> {
	const audioSrc = "/src/assets/sounds/raids-armours/naxxramas-classic-sapphiron.mp3"
	const audioRef = useRef<HTMLAudioElement>(null);

	const play = ()=> {
		audioRef.current.play()
	}

	const pause = ()=> {
		audioRef.current.pause()
	}

	return (
		<Wrapper>
			<Header />
			<Main>
				<h1 className="text-center text-danger text-uppercase" style={{fontSize: 120}}>В разработке</h1>
				<h2 className="text-center text-info lh-1" style={{fontSize: 48}}>Наксрамас Classic Сапфирон</h2>
				<p className="my-4 text-center text-success fw-bold fs-4">Нажмите на картинку чтобы воспроизвести звук</p>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img style={{width: 360}} src="/src/assets/img/raids-armours/bg/details-page/naxxramas-classic-sapphiron.png" alt="" onClick={play} onMouseLeave={pause} onMouseEnter={play} />
					<audio className="d-none" src={audioSrc} ref={audioRef} controls></audio>
				</div>
			</Main>
			<Footer />
			<ArrowUp />
		</Wrapper>
	)
}

export default NaxxramasClassicSapphiron