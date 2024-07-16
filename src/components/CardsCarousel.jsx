import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { ImSpades, ImHeart, ImClubs, ImDiamonds } from "react-icons/im";

import { getFirstCharStr } from "../helpers/utils";

const formatCard = (card) => {
	const { cardName, suite } = card;
	let color, logo;
	switch (suite) {
		case "Hearts":
			logo = <ImHeart size={40} color="red" />;
			color = "red";
			break;
		case "Diamonds":
			logo = <ImDiamonds size={40} color="red" />;
			color = "red";
			break;
		case "Clubs":
			logo = <ImClubs size={40} color="black" />;
			color = "black";
			break;
		case "Spades":
			logo = <ImSpades size={40} color="black" />;
			color = "black";
			break;
		default:
			return null;
	}

	return {
		cardName,
		logo,
		color,
		suite,
		first: getFirstCharStr(card.cardName),
	};
};

export const CardsCarousel = ({ cards, result }) => {
	const responsiveOptions = [
		{
			breakpoint: "1024px",
			numVisible: 3,
			numScroll: 3,
		},
		{
			breakpoint: "600px",
			numVisible: 2,
			numScroll: 2,
		},
		{
			breakpoint: "480px",
			numVisible: 1,
			numScroll: 1,
		},
	];

	const cardTemplate = (card) => {
		const { cardName, color, suite, logo, first } = formatCard(card);
		console.log("first: ", first);

		return (
			<div className="card-item shadow-1">
				<div className="card-item-content">
					<div className="grid col-12">
						<div className="col-2 ml-1 mr-1 mt-1 mb-1">
							<h4>{first}</h4>
						</div>
						<div className="col-2 ml-1 mr-1 mt-1 mb-1">
							<h4>{logo}</h4>
						</div>
					</div>
					<div className="mb-3 mt-3">
						<h3 className="mb-1">{`${cardName} of ${suite}`}</h3>
					</div>
					<div className="grid col-12">
						<div className="col-6"></div>
						<div className="col-2 ml-1 mr-1 mt-1 mb-1">
							<h4>{logo}</h4>
						</div>
						<div className="col-2 ml-1 mr-1 mt-1 mb-1">
							<h4>{first}</h4>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="carousel-demo">
			<div className="card">
				<Carousel
					value={cards}
					numVisible={cards?.length ?? 0}
					numScroll={0}
					showNavigators={false}
					showIndicators={false}
					responsiveOptions={responsiveOptions}
					className="custom-carousel"
					itemTemplate={cardTemplate}
					header={
						<h2>
							You have a {result.handName} with a rank of {result.handRank} and{" "}
							{result.value} points.
						</h2>
					}
				/>
			</div>
		</div>
	);
};
export default CardsCarousel;
