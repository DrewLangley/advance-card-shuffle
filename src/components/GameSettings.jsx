import React from "react";
import Input from "./form/Input.component";
import NumberInput from "./form/NumberInput.component";
import ListBox from "./form/ListBox.component";

import { ShuffleType } from "../helpers/shuffle/shuffleType";

export const GameSettings = () => {
	return (
		<div className="row grid col-12">
			<div className="grid col-6">
				<Input
					name="playerName"
					label="Player Name"
					placeholder="Player Name"
				/>
				<NumberInput
					name="handSize"
					label="Hand Size"
					placeholder="Hand Size"
				/>
				<NumberInput
					name="shuffleCount"
					label="Shuffle Count"
					placeholder="Shuffle Count"
				/>
			</div>
			<div className="grid col-6">
				<ListBox
					name="shuffleType"
					options={Object.keys(ShuffleType)
						.filter((el) => {
							return isNaN(Number(el));
						})
						.map((item) => ({ name: item, value: item }))}
				/>
			</div>
		</div>
	);
};

export default GameSettings;
