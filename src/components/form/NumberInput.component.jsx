import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

import { Skeleton } from "primereact/skeleton";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";

import { Container, MainContainer } from "./Input.style";

const NumberInput = ({
	name,
	label,
	disabled,
	required,
	// placeholder,
	error,
	prefix,
	suffix,
	defaultValue,
	className,
	mode,
	min,
	max,
	tabIndex,
}) => {
	const [loading, setLoading] = useState(true);
	const [focus, onFocus] = useState(false);

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
										disabled={loading || disabled}
										prefix={prefix}
										suffix={suffix}
										tabIndex={tabIndex}
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
	// placeholder: PropTypes.string,
	error: PropTypes.object,
	disabled: PropTypes.bool,
	prefix: PropTypes.string,
	suffix: PropTypes.string,
	defaultValue: PropTypes.number,
	className: PropTypes.string,
	mode: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	tabIndex: PropTypes.number,
};

NumberInput.defaultProps = {
	// placeholder: '',
	disabled: false,
	error: {},
	required: {},
	defaultValue: undefined,
	prefix: null,
	suffix: null,
	className: null,
	mode: null,
	min: null,
	max: null,
	tabIndex: undefined,
};

export default NumberInput;
