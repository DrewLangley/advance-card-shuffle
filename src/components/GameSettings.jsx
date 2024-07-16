import React from "react";
import Input from "./form/Input.component";
import NumberInput from "./form/NumberInput.component";
import ListBox from "./form/ListBox.component";

import { ShuffleType } from "../helpers/shuffle/shuffleType";
import { useFormContext } from "react-hook-form";

/**
 *
 * Game Settings Form Component
 * Handled by React Hook Forms
 * @returns Form components controlled by RHF Form Provider
 */
export const GameSettings = () => {
	const {
		formState: { errors },
	} = useFormContext();
	return (
		<div className="row grid col-12">
			<div className="grid col-6">
				<Input
					name="playerName"
					label="Player Name"
					placeholder="Player Name"
					required={{ required: "Please enter a player name" }}
					error={errors?.playerName}
				/>
				<NumberInput
					name="handSize"
					label="Hand Size"
					placeholder="Hand Size"
					required={{
						validate: (v) => {
							if ([3, 5, 6, 7].includes(v)) {
								return true;
							} else {
								return "Please enter 3, 5, 6 or 7";
							}
						},
					}}
					error={errors?.handSize}
					min={3}
					max={7}
				/>
				<NumberInput
					name="shuffleCount"
					label="Shuffle Count"
					placeholder="Shuffle Count"
					required={{
						validate: (v) => {
							if (v >= 3 && v <= 200) {
								return true;
							} else {
								return "Please enter a number between 3 and 200";
							}
						},
					}}
					error={errors?.shuffleCount}
				/>
			</div>
			<div className="grid col-6">
				<ListBox
					name="shuffleType"
					options={Object.keys(ShuffleType)
						.filter((el) => {
							return isNaN(Number(el));
						})
						.map((item) => ({ name: item, value: ShuffleType[item] }))}
				/>
			</div>
		</div>
	);
};

export default GameSettings;
