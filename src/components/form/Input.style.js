import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  .p-invalid {
    border-width: 2px !important;
  }

  .p-inputwrapper {
    width: 100%;
    align-items: center;
  }
  .p-inputwrapper-filled {
    width: 100%;
    align-items: center;
  }

  .p-input-icon-right {
    width: 100%;
    align-items: center;
  }

  .p-input-icon-right > i:last-of-type {
    z-index: 99;
  }

  .p-dropdown-trigger-icon,
  .p-calendar-w-btn .p-datepicker-trigger.p-button span {
    color: light-grey;
  }

  .p-component {
    background: light-grey !important;
    border-radius: 5px;
    color: black;

    &:focus {
      border: 1px solid light-blue !important;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    }
  }
  .p-inputnumber-input {
    min-width: 100%;
    box-sizing: border-box;
  }

  .p-float-label > label {
    color: light-grey !important;
    font-size: 0.8rem !important;
    text-overflow: ellipsis !important;
    max-height: 0.85rem !important;
    max-width: 98% !important;
    overflow: hidden !important;
    @media screen and (max-width: 1180px) {
      margin-top: -6px;
    }
  }

  .p-float-label-2 > label {
  }

  .p-calendar {
    .p-component {
      border: none !important;
    }
  }

  .p-listbox-list-wrapper {
    width: 100%;
  }
  .p-listbox-list {
    width: 100%;
  }
  .p-listbox {
    width: 100%;
  }

  .p-password {
    width: 100%;
  }
  .p-autocomplete-input {
    width: 100%;
  }

  .p-dropdown {
    width: 100%;
    height: 38px;
    /* border: ${(props) => (props.error ? `1px solid red` : '')}; */
    :focus {
      border: 1px solid light-blue !important;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    }
  }
  .p-multiselect {
    width: 100%;
    height: 38px;
    /* border: ${(props) => (props.error ? `1px solid red` : '')}; */
    :focus {
      border: 1px solid light-blue !important;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .p-dropdown-panel {
    z-index: 9999999999999999999;
  }

  .p-error {
    position: absolute;
    right: 32px;
  }

  .p-inputtext {
    font-size: 16px;
  }

  .toggle-button {
    text-align: start !important;

    span {
      margin: 0 12px;
    }

    :focus {
      background: transparent !important;
    }
  }

  .p-button:enabled:hover,
  .p-button:focus,
  .p-button:not(button):not(a):not(.p-disabled):hover {
    background: none;
    border-color: transparent;
  }

  .skeleton {
    height: 38px;
  }

  button {
    height: 38px;
    background: grey;
    color: dark-grey;
    border: 1px solid dark-grey;
    border-left-style: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  :focus {
    border: 1px solid light-blue !important;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  }

  input {
    width: 100%;
    height: 38px;
    font-size: 14px;
    padding: 5px 10px;
    border: 1px solid dark-grey;
    align-items: center;
  }
  textarea {
    width: 100%;
    font-size: 14px;
    padding: 5px 10px;
    border: 1px solid dark-grey;
    align-items: center;
  }

  .required {
    margin: 0 0 0 2px;
  }

  .p-listbox-item {
    color: light-blue !important;
  }

  .p-listbox-list .p-listbox-item {
    color: light-blue;
  }

  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: orange !important;
    background: rgba(57, 147, 171, 0.1);
    border: 1px solid light-blue;
  }

  span[data-cy='year-uncontrolled-input'] {
    font-size: 16px;
    background: light-grey !important;
    border: 1px solid #e6eaee;
    border-radius: 5px;
    color: black !important;
    /* box-shadow: none !important; */

    &:focus,
    &:active {
      border: 1px solid light-blue !important;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: ${(props) => (props.noPadding ? 0 : '15px')};
`;

// export const MainContainerLessPadding = styled.div`
//   width: 100%;
//   padding: 5px 15px 5px 15px;
// `;

// export const PhoneMainContainer = styled.div`
//   width: 100%;
//   margin-top: 0;
//   padding: 15px;

//   .phone-input-label {
//     font-size: 12px;
//     padding: 5px;
//     color: dark-grey;
//     margin: 5px;
//   }

//   input {
//     border-radius: 5px;
//   }
// `;

// export const IconContainer = styled.span`
//   display: flex !important;
//   flex-direction: row !important;
//   margin: 0 !important;
// `;

// export default { Container, MainContainer, PhoneMainContainer, IconContainer };
export default { Container, MainContainer };
