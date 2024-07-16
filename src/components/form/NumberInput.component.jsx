import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

import { Skeleton } from "primereact/skeleton";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";

import { Container, MainContainer } from "./Input.style";
/**
 *
 * @param {string} name name of component for RHF controller
 * @param {string} label
 * @param {Object} required
 * @param {string} className additional class names
 * @param {Object} error
 * @returns Number Input component handled by RHF Controller
 */
const NumberInput = ({
	name,
	label,
	required,
	error,
	className,
	prefix,
	suffix,
	defaultValue,
	mode,
	min,
	max,
}) => {
	const [loading, setLoading] = useState(true);
	const [focus, onFocus] = useState(false);

	const { control } = useFormContext();

	const getFormErrorMessage = () => {
		return (
			error.message && (
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
				<Container>
					<Controller
						name={name}
						control={control}
						rules={{ ...required }}
						defaultValue={defaultValue}
						render={({ field, fieldState }) => (
							<>
								<span className={className || "p-float-label"}>
									<InputNumber
										data-cy={name}
										id={field.name}
										inputRef={field.ref}
										value={field.value}
										prefix={prefix}
										suffix={suffix}
										useGrouping={false}
										maxFractionDigits={2}
										minFractionDigits={
											mode && (mode === "unit" || mode === "decimal") ? 2 : 0
										}
										max={max}
										min={min}
										onFocus={() => onFocus(true)}
										onBlur={() => {
											field.onBlur();
											onFocus(false);
										}}
										onChange={(e) => field.onChange(e.value)}
										inputClassName={classNames("", {
											"p-invalid":
												(fieldState.error || error?.message) && !focus,
										})}
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

NumberInput.propTypes = {
	name: PropTypes.string.isRequired,
	required: PropTypes.object,
	label: PropTypes.string.isRequired,
	error: PropTypes.object,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	className: PropTypes.string,
	mode: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
};

NumberInput.defaultProps = {
	error: {},
	required: {},
	prefix: null,
	suffix: null,
	className: null,
	mode: null,
	min: null,
	max: null,
};

export default NumberInput;
