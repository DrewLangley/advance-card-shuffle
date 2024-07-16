import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { classNames } from "primereact/utils";
import { ListBox as PListBox } from "primereact/listbox";

import { Container, MainContainer } from "./Input.style";

const ListBox = ({
	name,
	required,
	disabled,
	loading,
	error,
	label,
	options,
	multiple,
	noTemplate,
	tabIndex,
}) => {
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

	return (
		<MainContainer>
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
									tabIndex={tabIndex}
									disabled={loading || disabled}
									options={options}
									control={control}
									className={classNames("", {
										"p-invalid": fieldState.error || error?.message,
									})}
									onChange={(e) => {
										field.onChange(e.value);
									}}
									multiple={multiple}
								/>
								{getFormErrorMessage()}
							</>
						);
					}}
				/>
			</Container>
		</MainContainer>
	);
};

ListBox.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	required: PropTypes.object.isRequired,
	error: PropTypes.object,
	disabled: PropTypes.bool,
	noTemplate: PropTypes.bool,
	multiple: PropTypes.bool,
	loading: PropTypes.bool,
	tabIndex: PropTypes.number,
};

ListBox.defaultProps = {
	disabled: false,
	noTemplate: false,
	loading: false,
	multiple: false,
	error: {},
	tabIndex: undefined,
};

export default ListBox;
