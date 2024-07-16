import React from "react";
import { Carousel } from "primereact/carousel";
import { ImSpades, ImHeart, ImClubs, ImDiamonds } from "react-icons/im";

import { getFirstCharStr } from "../helpers/utils";
import { CardFont, CardItem, CardContent } from "./components.style";

const formatCard = (card) => {
	const { cardName, suite } = card;
	let color, logo;
	switch (suite) {
		case "Hearts":
			logo = <ImHeart size={40} />;
			color = "red";
			break;
		case "Diamonds":
			logo = <ImDiamonds size={40} />;
			color = "red";
			break;
		case "Clubs":
			logo = <ImClubs size={40} />;
			color = "black";
			break;
		case "Spades":
			logo = <ImSpades size={40} />;
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

/**
 *
 * A way of presenting a player's hand
 * @param {Array} cards cards to show
 * @param {Object} result result object
 * @returns Cards carousel component
 */
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
		// turn the card into something more noticeable
		const { cardName, color, suite, logo, first } = formatCard(card);

		return (
			<CardItem className="shadow-1 m-1">
				<CardContent className="card-item-content">
					{/* card corner */}
					<div className="grid col-12">
						<div className="col-2 mb-6">
							<CardFont color={color}>{first}</CardFont>
						</div>
						<div className="col-2 mb-6">
							<CardFont color={color}>{logo}</CardFont>
						</div>
					</div>
					{/* card name */}
					<div className="mb-3 mt-3 p-3">
						<h3>{`${cardName} of ${suite}`}</h3>
					</div>
					{/* mirrored card corner */}
					<div className="grid col-12">
						<div className="col-8"></div>
						<div className="col-2 mt-6 rotate-180">
							<CardFont color={color}>{logo}</CardFont>
						</div>
						<div className="col-2 mt-6 rotate-180">
							<CardFont color={color}>{first}</CardFont>
						</div>
					</div>
				</CardContent>
			</CardItem>
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
					itemTemplate={cardTemplate}
					// display results
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
