const Announcement = ({ home, warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, ashbringer, armours, shields, cloaks, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold, professions, alchemy, mining, engineering, leatherworking, blacksmithing, enchanting,  inscription, tailoring, skinning, herbalism, jewelcrafting, archaeology, riding, cooking, firstAid, fishing, junkyardTinkering, pvp, honour, arena, rbg, dungeons, mythic5, mythic10, mythic15, сlassic, burningCrusade, wrathOfTheLichKing, cataclysm, mistsOfPandaria, warlordsOfDraenor, legion, battleForAzeroth, shadowlands, dragonflight, warWithin, midnight, lastTitan, lvlUp, lvlUpBase, lvlUpExpert, lvlUpMaster, achievements, quests, equipments, mounts, raidsExplorer, legacy, greatFeats, warcraftReforged, wow, diablo, hearthstone, heroesStorm, starcraft, overwatch, wowCollectionEditions, diabloCollectionEditions  }) => {
	return (
		<section className="announcement">
			<div className="container">
				<div className="announcement__description my-4 my-lg-5">
					<h1
						className={`${
							warrior
								? "announcement__header announcement__header_warrior"
								:
							druid
								? "announcement__header announcement__header_druid"
								:
							priest
								? "announcement__header announcement__header_priest"
								:
							mage
								? "announcement__header announcement__header_mage"
								:
							monk
								? "announcement__header announcement__header_monk"
								:
							hunter
								? "announcement__header announcement__header_hunter"
								:
							demonHunter
								? "announcement__header announcement__header_demon-hunter"
								:
							paladin
								? "announcement__header announcement__header_paladin"
								:
							rogue
								? "announcement__header announcement__header_rogue"
								:
							deathKnight
								? "announcement__header announcement__header_death-knight"
								:
							warlock
								? "announcement__header announcement__header_warlock"
								:
							shaman
								? "announcement__header announcement__header_shaman"
								:
							awakener
								? "announcement__header announcement__header_awakener"
								:
							oneHandedWeapons
								? "announcement__header announcement__header_one-handed-weapons"
								:
							twoHandedWeapons
								? "announcement__header announcement__header_two-handed-weapons"
								:
							rangeWeapons
								? "announcement__header announcement__header_range-weapons"
								:
							legendaryWeapons || ashbringer
								? "announcement__header announcement__header_legendary-weapons"
								:
							artefactWeapons
								? "announcement__header announcement__header_artefact-weapons"
								:
							decorativeWeapons
								? "announcement__header announcement__header_decorative-weapons"
								:
							armours
								? "announcement__header announcement__header_armours"
								:
							waterMounts
								? "announcement__header announcement__header_water-mounts"
								:
							earthMounts
								? "announcement__header announcement__header_earth-mounts"
								:
							flyMounts
								? "announcement__header announcement__header_fly-mounts"
								:
							hordeGold
								? "announcement__header announcement__header_horde-gold"
								:
							allianceGold
								? "announcement__header announcement__header_alliance-gold"
								:
							professions
								? "announcement__header announcement__header_professions"
								:
							pvp
								? "announcement__header announcement__header_pvp"
								:
							dungeons
								? "announcement__header announcement__header_dungeons"
								:
							сlassic
								? "announcement__header announcement__header_сlassic"
								:
							burningCrusade
								? "announcement__header announcement__header_burning-crusade"
								:
							wrathOfTheLichKing
								? "announcement__header announcement__header_wrath-of-the-lich-king"
								:
							cataclysm
								? "announcement__header announcement__header_cataclysm"
								:
							mistsOfPandaria
								? "announcement__header announcement__header_mists-of-pandaria"
								:
							warlordsOfDraenor
								? "announcement__header announcement__header_warlords-of-draenor"
								:
							legion
								? "announcement__header announcement__header_legion"
								:
							battleForAzeroth
								? "announcement__header announcement__header_battle-for-azeroth"
								:
							shadowlands
								? "announcement__header announcement__header_shadowlands"
								:
							dragonflight
								? "announcement__header announcement__header_dragonflight"
								:
							warWithin
								? "announcement__header announcement__header_war-within"
								:
							midnight
								? "announcement__header announcement__header_midnight"
								:
							lastTitan
								? "announcement__header announcement__header_last-titan"
								:
							lvlUp
								? "announcement__header announcement__header_lvl-up"
								:
							achievements
								? "announcement__header announcement__header_achievements"
								: "announcement__header"
							} text-center`
						}
					>
						{
							warrior
								? "Комплекты рейдовой брони для воина"
								:
							druid
								? "Комплекты рейдовой брони для друида"
								:
							priest
								? "Комплекты рейдовой брони для жреца"
								:
							mage
								? "Комплекты рейдовой брони для мага"
								:
							monk
								? "Комплекты рейдовой брони для монаха"
								:
							hunter
								? "Комплекты рейдовой брони для охотника"
								:
							demonHunter
								? "Комплекты рейдовой брони для охотника на демонов"
								:
							paladin
								? "Комплекты рейдовой брони для паладина"
								:
							awakener
								? "Комплекты рейдовой брони для пробудителя"
								:
							rogue
								? "Комплекты рейдовой брони для разбойника"
								:
							deathKnight
								? "Комплекты рейдовой брони для рыцаря смерти"
								:
							warlock
								? "Комплекты рейдовой брони для чернокнижника"
								:
							shaman
								? "Комплекты рейдовой брони для шамана"
								:
							oneHandedWeapons
								? "Одноручное оружие"
								:
							twoHandedWeapons
								? "Двуручное оружие"
								:
							rangeWeapons
								? "Оружие дальнего боя"
								:
							legendaryWeapons
								? "Легендарное оружие"
								:
							artefactWeapons
								? "Артефакты Legion"
								:
							decorativeWeapons
								? "Декоративное оружие"
								:
							ashbringer
								? "Испепелитель"
								:
							shields
								? "Щиты"
								:
							cloaks
								? "Плащи"
								:
							fishingRods
								? "Удочки"
								:
							waterMounts
								? "Водные маунты"
								:
							earthMounts
								? "Наземные маунты"
								:
							flyMounts
								? "Летающие маунты"
								:
							hordeGold
								? "Золото для игроков орды"
								:
							allianceGold
								? "Золото для игроков альянса"
								:
							alchemy
								? "Алхимия"
								:
							mining
								? "Горное дело"
								:
							engineering
								? "Инженерное дело"
								:
							leatherworking
								? "Кожевничество"
								:
							blacksmithing
								? "Кузнечное дело"
								:
							enchanting
								? "Наложение чар"
								:
							inscription
								? "Начертание"
								:
							tailoring
								? "Портняжное дело"
								:
							skinning
								? "Снятие шкур"
								:
							herbalism
								? "Травничество"
								:
							jewelcrafting
								? "Ювелирное дело"
								:
							archaeology
								? "Археология"
								:
							riding
								? "Верховая езда"
								:
							cooking
								? "Кулинария"
								:
							firstAid
								? "Первая помощь"
								:
							fishing
								? "Рыбная ловля"
								:
							junkyardTinkering
								? "Кустарная механика"
								:
							honour
								? "Очки чести"
								:
							arena
								? "Очки арены"
								:
							rbg
								? "Рейтинговые поля боя"
								:
							mythic5
								? "Эпохальные Подземелья Мythic+5"
								:
							mythic10
								? "Эпохальные Подземелья Мythic+10"
								:
							mythic15
								? "Эпохальные Подземелья Мythic+15"
								:
							сlassic
								? "Рейды дополнения Classic"
								:
							burningCrusade
								? "Рейды дополнения The Burning Crusade"
								:
							wrathOfTheLichKing
								? "Рейды дополнения Wrath of the Lich King"
								:
							cataclysm
								? "Рейды дополнения Cataclysm"
								:
							mistsOfPandaria
								? "Рейды дополнения Mists of Pandaria"
								:
							warlordsOfDraenor
								? "Рейды дополнения Warlords of Draenor"
								:
							legion
								? "Рейды дополнения Legion"
								:
							battleForAzeroth
								? "Рейды дополнения Battle for Azeroth"
								:
							shadowlands
								? "Рейды дополнения Shadowlands"
								:
							dragonflight
								? "Рейды дополнения Dragonflight"
								:
							warWithin
								? "Рейды дополнения The War Within"
								:
							midnight
								? "Рейды дополнения Midnight"
								:
							lastTitan
								? "Рейды дополнения The Last Titan"
								:
							lvlUpBase
								? "1-60 Уровень"
								:
							lvlUpExpert
								? "1-70 Уровень"
								:
							lvlUpMaster
								? "1-80 Уровень"
								:
							quests
								? "Задания"
								:
							equipments
								? "Экипировка 1000 уровня"
								:
							mounts
								? "1000 маунтов"
								:
							raidsExplorer
								? "Исследователь рейдов"
								:
							legacy
								? "Наследие"
								:
							greatFeats
								? "Великие подвиги"
								:
							warcraftReforged
								? "Годовщина Warcraft 3 Reforged"
								:
							wow
								? "Годовщина World of Warcraft"
								:
							diablo
								? "Годовщина Diablo"
								:
							hearthstone
								? "Годовщина Hearthstone"
								:
							heroesStorm
								? "Годовщина Heroes of the Storm"
								:
							starcraft
								? "Годовщина StarCraft"
								:
							overwatch
								? "Годовщина Overwatch"
								:
							wowCollectionEditions
								? "Коллекционные издания World of Warcraft"
								:
							diabloCollectionEditions
								? "Коллекционные издания Diablo"
								: "World of Warcraft"
						}
					</h1>
					{ home && <h2 className="announcement__header text-center">WorldSoul Saga</h2> }
					{ home && <h3 className="announcement__subheader announcement__subheader_main text-center">Великое приключение длиной в 20 лет</h3> }
					<h3 className={`${
						home
							? "announcement__subheader announcement__subheader_main"
							: "announcement__subheader"
							} text-center`
						}
					>
						{
							warrior
								? "Обрети мощь титана. Получите полный комплект, станьте неудержимой силой в бою и легендой Азерота!"
								:
							druid
								? "Обрети мудрость Древних. Получите полный комплект, станьте воплощением неудержимой силы природы и легендой Азерота!"
								:
							priest
								? "Твой путь к абсолютной власти над Светом и Тьмой. Получите полный комплект, станьте проводником божественной воли и легендой Азерота!"
								:
							mage
								? "Покори магию стихий. Получите полный комплект, станьте повелителем огня, льда и тайной магии, обретите силу, доступную лишь избранным и станьте легендой Азерота!"
								:
							monk
								? "Обрети гармонию стихий и единство духа через энергию ци. Получите полный комплект, станьте воплощением баланса сил и легендой Азерота!"
								:
							hunter
								? "Стань хозяином диких земель. Получите полный комплект, обретите верного зверя, станьте неумолимым преследователем и легендой Азерота!"
								:
							demonHunter
								? "Открой в себе ярость Иллидари, охотников на демонов Пылающего Легиона. Получите полный комплект, станьте воплощением мести и легендой Азерота!"
								:
							paladin
								? "Обрушь на врагов молот правосудия и испепели их священным огнём возмездия. Получите полный комплект, станьте благородным воителем Света, непоколебимым защитником и легендой Азерота!"
								:
							awakener
								? "Управляй магией пяти драконьих родов. Получите полный комплект, обрушьте на врагов испепеляющее дыхание красных драконов, леденящую магию синих, целительную силу зелёных, сокрушающую мощь чёрных и вневременную силу бронзовых драконов, парите над полем боя и станьте легендой Азерота!"
								:
							rogue
								? "Растворись в тенях и нанеси смертельный удар отравленным клинком. Получите полный комплект, станьте скрытным убийцей, мастером ядовитых клинков и легендой Азерота!"
								:
							deathKnight
								? "Пробуди силы, что правят самой смертью. Ледяное дыхание смерти, всепоглощающую чуму, пожирающую плоть, и кровь, дарующую вечную жизнь ценой тысяч жертв. Получите полный комплект, обрушьте на врагов истинную мощь Властелина Смерти и станьте легендой Азерота!"
								:
							warlock
								? "Подчини себе необузданную силу хаоса и испепеляющее пламя Скверны. Получите полный комплект, обрушьте на врагов адское пламя, энергию хаоса и станьте легендой Азерота!"
								:
							shaman
								? "Пробуди силу духов земли, огня, воды и воздуха. Прими благословение древних предков. Получите полный комплект, станьте воплощением могущества стихий и легендой Азерота!"
								:
							oneHandedWeapons
								? "Одноручное оружие, искусство смертоносной грации и невероятной скорости! Идеальный выбор тех, кто ценит скорость выше грубой силы. Каждый взмах клинка рождает вихрь молниеносных ударов, сметающий врагов. Неважно, что перед тобой полчища Плети или демоны Пылающего Легиона скорость твоего клинка решает всё. Один искусный воин стоит целой армии!"
								:
							twoHandedWeapons
								? "Двуручное оружие, воплощение неудержимой мощи и сокрушительной силы. Идеальный выбор тех, кто верит, что лучшая защита это яростное нападение. Один удар решает исход битвы, а враги разлетаются в клочья от одного взмаха. Неважно, что перед тобой, полчища Плети или могучий инфернал Пылающего Легиона, двуручник сметёт всё на своём пути!"
								:
							rangeWeapons
								? "Оружие дальнего боя, искусство победы на дистанции. Идеальный выбор тех, кто предпочитает тактику грубой силе. Один точный выстрел решает исход битвы, враги падают, не успев приблизиться. Неважно, что перед тобой полчища Плети или демоны Пылающего Легиона дистанция и меткость станут твоим преимуществом. Меткость не оставит врагам ни шанса, а дистанция превратится в непреодолимую пропасть!"
								:
							legendaryWeapons
								? "Легендарное оружие, воплощение мифов, чья слава живёт в веках. Идеальный выбор тех, кто стремится к совершенству, недостижимому для простых смертных. Будь то меткий выстрел, сокрушительный удар, могущественное заклинание или целительное прикосновение, каждое действие меняет ход истории Азерота. Неважно, что перед тобой полчища Плети или демоны Пылающего Легиона, сила легенды в твоих руках обратит любого врага в прах. Один взмах, выстрел, заклинание или целительное прикосновение, и мир узнает, почему это оружие стало легендой!"
								:
							artefactWeapons
								? "Артефактное оружие, воплощение воли титанов, ярости древних богов и наследие величайших героев Азерота. Это не просто инструмент битвы, а символ эпохи, чья душа откликается лишь тому, кто достоин продолжить её легенду. Идеальный выбор тех, кто не стремится к славе, но чьи поступки сами творят историю. Будь то сокрушительный удар, рассекающий саму магию, или благословение, воскрешающее павших героев, каждое действие артефакта оставляет вечный след в судьбе мира. Неважно, что перед тобой полчища Плети, демоны Пылающего Легиона или сама ненависть Древних Богов, мощь, что течёт в его жилах, не знает границ. Один взмах и реальность склонится перед тобой. Одно заклинание и сама бездна отступает. Это не легенда из прошлого, это сила, которая творит будущее. И теперь она в твоих руках!"
								:
							decorativeWeapons
								? "Декоративное оружие, воплощение безупречной эстетики и высочайшего мастерства. Идеальный выбор тех, кто верит, что истинная сила в искусстве, способном остановить время. Один лишь взгляд рождает восхищение, а сердца ценителей замирают от одного прикосновения. Неважно, что перед тобой частная коллекция ценителя или парадный зал королевского дворца, декоративный клинок затмит всё своим великолепием, повествуя о легендах и мастерах минувших дней. Это не орудие битвы, а произведение искусства, чей удар направлен прямо в сердце ценителя!"
								:
							ashbringer
								? "Во время исследования Черной горы Командующий Александрос Могрейн обнаружил на теле мертвого лейтенанта орков необычный кристалл. Он почувствовал темную мощь в необычном предмете, доставленном с далекой планеты Дренор. Воздействуя на него силами Света, кристалл не разрушился, а превратился в сильнейший артефакт Света. Вместе с королевским кузнецом Магни Бронзобородом они выковали величайший клинок своего времени. Меч получил свое название в честь своего первого владельца Александроса Могрейна, чья сила обращала живых мертвецов в пепел."
								:
							shields
								? "Щиты, воплощение несокрушимой воли и непоколебимой стойкости. Идеальный выбор тех, кто готов принять на себя любой удар, для защиты своих союзников. Каждый блок отражает смертоносные атаки, а враги ломают клинки о стальную преграду. Неважно, что перед тобой, огненная ярость дракона или сокрушительный удар титана, щит выстоит против любого натиска и станет непреодолимой стеной между угрозой и теми, кто под защитой!"
								:
							cloaks
								? "Плащи, воплощение неуловимой грации и таинственного величия. Идеальный выбор тех, кто предпочитает побеждать не грубой силой, а искусством маскировки. Окутывающий плащ скрывает движение, растворяя владельца в тенях, а враги теряют цель в кромешной тьме. Неважно, что перед тобой, бдительный страж на посту или всевидящее око архимага, плащ станет частью самой тени и окутает завесой тайны, вас никогда не обнаружат!"
								:
							fishingRods
								? "Удочки, воплощение безграничного терпения и тихой созерцательной силы. Идеальный выбор тех, кто знает, что истинная добыча достанется тому, кто умеет ждать. Леска удочки уходит вглубь вод, растворяясь в отражении неба, а рыба теряет бдительность в мерцающей ряби. Неважно, что клюёт, удочка станет продолжением твоей воли и протянет невидимую нить между желанием и добычей, которую ты никогда не упустишь!"
								:
							waterMounts
								? "Водные маунты, обитатели морей и океанов, могучие владыки глубин. Они обеспечат вам скорость морской бури и откроют тайны подводного мира. Покорите глубины Азерота!"
								:
							earthMounts
								? "Наземные маунты, обитатели пещер, могучие бегуны. Они обеспечат вам молниеносную скорость и превосходство в любом путешествии. Покорите бескрайние просторы Азерота!"
								:
							flyMounts
								? "Летающие маунты, властелины небес, повелители бескрайних воздушных просторов. Они обеспечат вам скорость ветра и абсолютное превосходство в воздухе. Покорите небеса Азерота!"
								:
							hordeGold
								? "Нужны монеты для клинка, что сокрушит врагов Орды, или брони, выкованной в кузнях Оргриммара? Наше золото поможет тебе стать сильнее. Лок'тар огар! За Орду!"
								:
							allianceGold
								? "Нужны монеты для клинка, что сокрушит врагов Альянса, или брони, выкованной в кузнях Стальгорна? Наше золото поможет тебе стать сильнее. За короля! За Альянс!"
								: "Станьте легендой Азерота!"
						}
					</h3>
					<p className="announcement__text text-center">
						Сэкономьте свое время, приобретая предметы, валюту и
						достижения, чтобы играть на другом уровне
					</p>
				</div>
			</div>
		</section>
	);
};

export default Announcement;
