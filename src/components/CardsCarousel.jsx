import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
// import { ProductService } from "../service/ProductService";
// import "./CarouselDemo.css";

export const CardsCarousel = ({ cards, cardCount }) => {
	const [cardsVisible, setCardsVisible] = useState(cardCount ?? 5);
	const [playerCards, setProducts] = useState([
		{ cardName: "Jack", suite: "Hearts" },
		{ cardName: "Jack", suite: "Hearts" },
		{ cardName: "Jack", suite: "Hearts" },
		{ cardName: "Jack", suite: "Hearts" },
		{ cardName: "Jack", suite: "Hearts" },
		// { cardName: "Jack", suite: "Hearts" },
		// { cardName: "Jack", suite: "Hearts" },
	]);

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

	// const productService = new ProductService();

	// useEffect(() => {
	// 	productService
	// 		.getProductsSmall()
	// 		.then((data) => setProducts(data.slice(0, 9)));
	// }, []); // eslint-disable-line react-hooks/exhaustive-deps

	const cardTemplate = (product) => {
		return (
			<div className="product-item">
				<div className="product-item-content">
					<div className="mb-3"></div>
					<div>
						<h4 className="mb-1">{product.cardName}</h4>
						<h6 className="mt-0 mb-3">${product.suite}</h6>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="carousel-demo">
			<div className="card">
				<Carousel
					value={playerCards}
					numVisible={cardsVisible}
					numScroll={0}
					showNavigators={false}
					showIndicators={false}
					responsiveOptions={responsiveOptions}
					className="custom-carousel"
					itemTemplate={cardTemplate}
					header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>}
				/>
			</div>
		</div>
	);
};
export default CardsCarousel;
