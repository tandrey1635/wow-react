import Header from "./Header";
import { useRef, useState } from "react";

const ExploreAzeroth = () => {
	const [explore, setExplore] = useState('')
	const audioRef = useRef('')
	const [playSound, setPlaySound] = useState(false)

	const startExplore = () => {
		setExplore(explore=> {
			return !explore
		})
	}

	const toggleSound = () => {
		setPlaySound(playSound=> {
			if (!playSound) {
				audioRef.current.play()
				return !playSound
			}

			else {
				audioRef.current.pause()
			}
		})
	}


	return (
		<div className={`explore ${explore ? "start-explore" : ''}`} /* onClick={toggleSound} */>
			<Header />
			<div className="container">
				<h2 className="text-center text-danger">Это Азерот — мир, исполненный опасностей, но в то же время прекрасный, волшебный и вдохновляющий. Мир, полный открытий, инноваций и чудес, за который стоит бороться и который стоит защищать.</h2>
				<h2 className="text-center text-warning mt-4">Азерот (англ. Azeroth) — это мир, расположенный в Великой Запредельной Тьме. В его сердце обитает дремлющая мировая душа, зачаток духа титана. В далеком прошлом сюда вторглись древние боги, порождения Бездны. Когда прибыл Пантеон, титаны заточили древних богов глубоко под землей, а затем исцелили мир и создали жизнь на всей планете. В центре Калимдора был помещен великий источник магии, питающий землю, известный как Источник Вечности. Однажды демоническая армия Пылающего Легиона, привлеченная источником, нашла Азерот и вызвала Раскол. После Третьей войны возникли две крупные державы — Альянс и Орда. Несмотря на внутренние конфликты и внешние угрозы, народы Азерота всегда находили способ выжить.</h2>
				<h3 className="text-center text-success my-5">Итак приключения начинаются!</h3>
				<div className="explore__img" onClick={startExplore}>
					<img src="/src/assets/img/azeroth.png" alt="Начать исследование Азерота" />

					<p className="explore__text">Исcледовать</p>
				</div>

				<audio src="/src/assets/sounds/azeroth.mp3" ref={audioRef}></audio>
			</div>
		</div>
	)
}

export default ExploreAzeroth