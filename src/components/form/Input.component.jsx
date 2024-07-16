import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

import { InputText } from "primereact/inputtext";
import { Skeleton } from "primereact/skeleton";
import { classNames } from "primereact/utils";

import { Container, MainContainer } from "./Input.style";

/**
 *
 * @param {string} name name of component for RHF controller
 * @param {string} label
 * @param {Object} required
 * @param {string} className additional class names
 * @param {Object} error
 * @returns Text Input component handled by RHF Controller
 */
const Input = ({ name, label, required, className, error }) => {
	const [loading, setLoading] = useState(true);
	const [focus, onFocus] = useState(false);

	const { control } = useFormContext();

	const getFormErrorMessage = () => {
		return (
			error?.message && (
				<>
					<small
						className="p-error"
						style={{ position: "relative", left: "1%" }}
					>
						{error.message}
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
				<Skeleton height="2rem" className="skeleton" />
			) : (
				<Container error={error?.message}>
					<Controller
						name={name}
						control={control}
						rules={{ ...required }}
						render={({ field, fieldState }) => (
							<>
								<span className={classNames(className || "p-float-label")}>
									<InputText
										data-cy={name}
										{...field}
										id={field.name}
										value={field.value}
										className={classNames("", {
											"p-invalid":
												(fieldState.error || error?.message) && !focus,
										})}
										onFocus={() => onFocus(true)}
										onBlur={() => onFocus(false)}
										autoComplete="off"
										// must pass them an onChange because of primeReact
										onChange={(e) => field.onChange(e.target.value)}
									/>
									<label htmlFor={field.name}>
										{label}
										{required && <span style={{ color: "red" }}>{" *"}</span>}
									</label>
								</span>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</Container>
			)}
		</MainContainer>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	required: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.object,
};

Input.defaultProps = {
	className: null,
	placeholder: null,
	error: {},
};

export default Input;
