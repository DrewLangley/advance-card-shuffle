import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

import { InputText } from "primereact/inputtext";
import { Skeleton } from "primereact/skeleton";
import { classNames } from "primereact/utils";

import { Container, MainContainer } from "./Input.style";

const Input = ({
	className,
	name,
	label,
	required,
	placeholder,
	disabled,
	error,
	loading: l,
	errorBelow,
	tabIndex,
	containerStyle,
}) => {
	const [loading, setLoading] = useState(true);
	const [focus, onFocus] = useState(false);

	const {
		control,
		// register,
		// reset,
		// handleSubmit,
		// formState: { errors },
		// setValue,
		// watch,
		// getValues,
	} = useFormContext();

	const getFormErrorMessage = () => {
		return (
			error?.message && (
				<>
					<small
						className="p-error"
						style={
							errorBelow
								? { position: "relative", left: "1%" }
								: { position: "absolute" }
						}
					>
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
		<MainContainer style={containerStyle}>
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
								<span
									className={classNames(className || "p-float-label", {
										"p-input-icon-right": l,
									})}
								>
									{l && <i className="pi pi-spin pi-spinner" />}
									<InputText
										data-cy={name}
										{...field}
										placeholder={placeholder}
										id={field.name}
										value={field.value}
										disabled={disabled}
										className={classNames("", {
											"p-invalid":
												(fieldState.error || error?.message) && !focus,
										})}
										tabIndex={tabIndex}
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
	placeholder: PropTypes.string,
	required: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.object,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	errorBelow: PropTypes.bool,
	tabIndex: PropTypes.number,
	containerStyle: PropTypes.any,
};

Input.defaultProps = {
	className: null,
	placeholder: null,
	disabled: false,
	errorBelow: false,
	loading: false,
	error: {},
	tabIndex: undefined,
	containerStyle: null,
};

export default Input;
