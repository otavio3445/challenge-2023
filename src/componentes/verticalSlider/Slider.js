import React, { useState } from 'react';
import './Slider.scss';
import cn from "classnames";
import { useHistory } from 'react-router-dom';

function Slider({ vagas: data, external }) {

    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);

    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(data.length / 2);

    // Usd to determine the height/spacing of each item
    const itemHeight = 185;

    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;

    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold / 2;

    const determinePlacement = (itemIndex) => {
        // If these match, the item is active
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    const handleClick = (direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === "next") {
                if (prevIndex + 1 > data.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            }

            if (prevIndex - 1 < 0) {
                return data.length - 1;
            }

            return prevIndex - 1;
        });
    };

    const handleVagaClick = async (vaga) => {
        history.push("/candidato/vaga", { vaga: vaga, external: external })
    }

    return (
        <div className="container">
            <section className="outer-container">
                <div className="carousel-wrapper">
                    <button
                        type="button"
                        className="carousel-button prev"
                        onClick={() => handleClick("prev")}
                    >
                        <div class="arrow-up"></div>
                    </button>

                    <div className="carousel">
                        <div className="slides">
                            <div className="carousel-inner">
                                {data.map((item, i) => (
                                    <div
                                        className={cn("sliderCard carousel-item", {
                                            active: activeIndex === i,
                                            visible:
                                                Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                                        })}
                                        key={item.id}
                                        style={{
                                            transform: `translateY(${determinePlacement(i)}px)`
                                        }}
                                    >
                                        <div className="sliderCard-title">{item.titulo}</div>
                                        <div className="sliderCard-title-sub">Nível: {item.level}, {item.local}</div>
                                        <div className="sliderCard-btn" onClick={() => handleVagaClick(item)}>Ver Mais</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="carousel-button next"
                        onClick={() => handleClick("next")}
                    >
                        <div class="arrow-down"></div>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Slider