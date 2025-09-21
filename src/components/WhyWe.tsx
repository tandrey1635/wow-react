const WhyWe = () => {
	return (
		<section className="why__we">
			<div className="container">
				<h2 className="why__we__header text-center">Почему Мы</h2>
				<div className="why__we__wrapper mt-4 mt-sm-5 py-4 py-sm-5 px-4 d-flex flex-column flex-lg-row gap-4 gap-md-5 gap-lg-0">
					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/ok.svg" alt="Самые низкие цены" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Самые низкие цены. Без посредников!</p>
						</div>
					</div>

					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/communication.svg" alt="Общайтесь с исполнителями напрямую" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Общайтесь с исполнителями напрямую до оформления заказа</p>
						</div>
					</div>

					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/community.svg" alt="Опытная и дружелюбная служба поддержки" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Опытная и дружелюбная служба поддержки всегда поможет</p>
						</div>
					</div>

					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/protection.svg" alt="Безопасность вашего аккаунта" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Исполнители используют меры предосторожности для безопасности вашего аккаунта</p>
						</div>
					</div>

					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/money.svg" alt="Гарантия возврата средств" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Гарантия возврата средств если услуга не оказана</p>
						</div>
					</div>

					<div className="why__we__items d-flex flex-column align-items-center">
						<div className="why__we__img">
							<img className="why__we__photo" src="/src/assets/icons/law.svg" alt="Поможем решить спорные ситуации" />
						</div>
						<div className="why__we__description mt-3">
							<p className="why__we__text text-center">Наша собственная система арбитража поможет решить спорные ситуации</p>
						</div>
					</div>
				</div>
				<p className="why__we__info text-center mt-4 mt-sm-5">Прокачка в WoW помогает игрокам получить все, что оказывается недоступным по разным причинам. Одним игрокам не хватает времени на фарм, другие не играют в гильдиях, но хотят лучший гир. Причин много, а желания одни. Для этого и существует WowForAll, наш подход изменил представление о бустинге WoW. Как торговая площадка мы позволяем продавцам размещать свои услуги на собственных условиях. Это снижает цену, ведь посредников между продавцом и покупателем нет. С WowForAll вы экономите свое время по самой честной цене. А если вас не устроили имеющиеся предложения, создайте Аукцион на своих условиях. Пусть наши продавцы сами поборются за него и предложат лучшую цену. Всё что нужно, пройти базовую регистрацию, пополнить баланс удобным способом и выбрать исполнителя. WowForAll выступит гарантом сделки, останется только наслаждаться результатом.</p>
			</div>
		</section>
	);
};

export default WhyWe
