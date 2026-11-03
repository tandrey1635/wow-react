import { useState, useEffect } from 'react'
import ModelViewer3d from './ModelViewer3d'

interface ModelLightboxProps {
    models: string[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

const ModalLightbox = ({ models = [], initialIndex = 0, isOpen, onClose }: ModelLightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % models.length);
            if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, models.length, isOpen]);

	useEffect(() => {
		if (isOpen) {
			setCurrentIndex(initialIndex);
		}
	}, [isOpen, initialIndex]);

    if (!models.length) return null;

    return (
        <div className="model-lightbox" style={{ display: isOpen ? "flex" : "none" }} onClick={onClose}>
            <div className="model-lightbox__content" onClick={(e) => e.stopPropagation()}>
                <button className="model-lightbox__close" onClick={onClose}>×</button>

                <div className="model-lightbox__canvas">
                    <ModelViewer3d modelUrl={models[currentIndex]} />
                </div>

                {models.length > 1 && (
                    <>
                        <button
                            className="model-lightbox__arrow model-lightbox__arrow--prev"
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + models.length) % models.length)}
                        >
                            ‹
                        </button>
                        <button
                            className="model-lightbox__arrow model-lightbox__arrow--next"
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % models.length)}
                        >
                            ›
                        </button>
                        <div className="model-lightbox__counter">
                            {currentIndex + 1} / {models.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


export default ModalLightbox