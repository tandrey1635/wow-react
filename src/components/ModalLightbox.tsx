import { useState, useEffect } from 'react';
import ModelViewer3d from './ModelViewer3d';
import type { ICard } from '../types/card-types'; // путь подгони

interface ModelLightboxProps {
    cards: ICard[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

const ModalLightbox = ({ cards = [], initialIndex = 0, isOpen, onClose }: ModelLightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % cards.length);
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, cards.length, isOpen]);

    if (!cards.length) return null;

    const currentCard = cards[currentIndex];

    const getColorClass = () => {
        const { addition, classes, type } = currentCard;
        if (addition === "Classic") return "card-dungeons-raids-classic_color";
        if (addition === "The Burning Crusade") return "card-dungeons-raids-burning-crusade_color";
        if (addition === "Wrath of the Lich King") return "card-dungeons-raids-wrath-of-the-lich-king_color";
        if (addition === "Cataclysm") return "card-dungeons-raids-cataclysm_color";
        if (addition === "Mists of Pandaria") return "card-dungeons-raids-mists-of-pandaria_color";
        if (addition === "Warlords of Draenor") return "card-dungeons-raids-warlords-of-draenor_color";
        if (addition === "Legion") return "card-dungeons-raids-legion_color";
        if (addition === "Battle for Azeroth") return "card-dungeons-raids-battle-for-azeroth_color";
        if (addition === "Shadowlands") return "card-dungeons-raids-shadowlands_color";
        if (addition === "Dragonflight") return "card-dungeons-raids-dragonflight_color";
        if (addition === "The War Within") return "card-dungeons-raids-war-within_color";
        if (addition === "Midnight") return "card-dungeons-raids-midnight_color";
        if (addition === "The Last Titan") return "card-dungeons-raids-last-titan_color";
        if (type === "water-mounts") return "card-mounts_water";
        if (type === "earth-mounts") return "card-mounts_earth";
        if (type === "fly-mounts") return "card-mounts_fly";
        if (classes === "Воин") return "card_warrior";
        if (classes === "Друид") return "card_druid";
        if (classes === "Монах") return "card_monk";
        if (classes === "Охотник на Демонов") return "card_demon-hunter";
        if (classes === "Паладин") return "card_paladin";
        if (classes === "Разбойник") return "card_rogue";
        if (classes === "Рыцарь Смерти") return "card_death-knight";
        return "";
    };

    return (
        <div className="model-lightbox" style={{ display: isOpen ? "flex" : "none" }} onClick={onClose}>
            <div className="model-lightbox__content" onClick={(e) => e.stopPropagation()}>
                <button className="model-lightbox__close" onClick={onClose}>×</button>

                <div className="model-lightbox__canvas">
                    <ModelViewer3d modelUrl={currentCard.model3d!} reset={!isOpen} />
                </div>

                <div className="model-lightbox__info">
                    <h3 className={`model-lightbox__title ${getColorClass()}`}>
                        {currentCard.title}
                    </h3>
                </div>

                {cards.length > 1 && (
                    <>
                        <button
                            className="model-lightbox__arrow model-lightbox__arrow--prev"
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)}
                        >
                            ‹
                        </button>
                        <button
                            className="model-lightbox__arrow model-lightbox__arrow--next"
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % cards.length)}
                        >
                            ›
                        </button>
                        <div className="model-lightbox__counter">
                            {currentIndex + 1} / {cards.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalLightbox;