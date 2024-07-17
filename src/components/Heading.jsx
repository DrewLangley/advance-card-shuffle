import React from "react";

/**
 *
 * @returns Headings and other text visuals
 */
export const Heading = () => {
	return (
		<>
			<div className="row grid col-12">
				<div className="grid col-6">
					<div className="col-12">
						<h1>Advance io Tech test</h1>
					</div>
					<div className="col-12">
						<h4>Variable hand and shuffle poker game</h4>
					</div>
					<div className="col-12">
						<h4>Please see the game settings to make a few changes</h4>
					</div>
				</div>
				<div className="grid col-6">
					<div className="col-12">
						<h2>Drew Langley</h2>
					</div>

					<div className="col-12">
						<h4>Shuffle types</h4>
						<ul>
							<li>
								<bold>
									<a
										href="https://en.wikipedia.org/wiki/Faro_shuffle"
										target="_blank"
									>
										Faro
									</a>
								</bold>{" "}
								- a method of shuffling playing cards, in which half of the deck
								is held in each hand with the thumbs inward, then cards are
								released by the thumbs so that they fall to the table
								interleaved. It should be perfect and could return the same
								results depending on out-shuffle and in-shuffle.
							</li>
							<li>
								<bold>
									<a
										href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle"
										target="_blank"
									>
										Fisher-Yates
									</a>
								</bold>{" "}
								- The algorithm takes a list of all the elements of the
								sequence, and continually determines the next element in the
								shuffled sequence by randomly drawing an element from the list
								until no elements remain.
							</li>
							<li>
								<bold>
									<a
										href="https://en.wikipedia.org/wiki/Shuffling"
										target="_blank"
									>
										Riffle
									</a>
								</bold>{" "}
								- A similar technique to the Faro shuffle, except I have added
								randomization to this algorithm to simulate a casual or newer
								player.
							</li>
							<li>
								<bold>
									<a
										href="https://en.wikipedia.org/wiki/Shuffling"
										target="_blank"
									>
										Over hand
									</a>
								</bold>{" "}
								- the shuffling technique where you gradually transfer the deck
								from, say, your right hand to your left hand by sliding off
								small packets from the top of the deck with your thumb.
							</li>
							<li>
								<bold>Default</bold> - performs the Fisher-yates twice, then
								riffle 6 times. Changing shuffle count doesn't affect this
								option.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Heading;
