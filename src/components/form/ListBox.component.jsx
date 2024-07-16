import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { classNames } from "primereact/utils";
import { ListBox as PListBox } from "primereact/listbox";
import { Skeleton } from "primereact/skeleton";

import { Container, MainContainer } from "./Input.style";

/**
 *
 * @param {string} name name of component for RHF controller
 * @param {Object} required
 * @param {Object} error
 * @param {string} label
 * @param {Array} options options for the list
 * @returns List Box Input component handled by RHF Controller
 */
const ListBox = ({ name, required, error, label, options }) => {
	const [loading, setLoading] = useState(true);
	const { control } = useFormContext();

	const getFormErrorMessage = () => {
		return (
			error.message && (
				<>
					<small className="p-error" style={{ position: "absolute" }}>
						error&nbsp;
						<i
							className="pi pi-info-circle"
							style={{ fontSize: "0.75rem" }}
							data-tip={`${error.message}`}
						/>
					</small>
				</>
			)
		);
	};

	useEffect(() => {
		setTimeout(() => setLoading(false), 500);
	}, []);

	return (
		<MainContainer>
			{loading ? (
				<Skeleton height="10rem" className="skeleton" />
			) : (
				<Container>
					<Controller
						key={name}
						name={name}
						control={control}
						rules={{ ...required }}
						render={({ field, fieldState }) => {
							return (
								<>
									<label htmlFor={field.name}>
										{label}
										{required && <span style={{ color: "red" }}>{" *"}</span>}
									</label>
									<PListBox
										value={field.value}
										optionLabel="name"
										name="value"
										options={options}
										control={control}
										className={classNames("", {
											"p-invalid": fieldState.error || error?.message,
										})}
										onChange={(e) => {
											field.onChange(e.value);
										}}
									/>
									{getFormErrorMessage()}
								</>
							);
						}}
					/>
				</Container>
			)}
		</MainContainer>
	);
};

ListBox.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	required: PropTypes.object.isRequired,
	error: PropTypes.object,
};

ListBox.defaultProps = {
	error: {},
};

export default ListBox;
