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

  .p-listbox-list-wrapper {
    width: 100%;
  }
  .p-listbox-list {
    width: 100%;
  }
  .p-listbox {
    width: 100%;
  }

  .p-error {
    position: absolute;
    right: 32px;
  }

  .p-inputtext {
    font-size: 16px;
  }

  .skeleton {
    height: 38px;
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
    background: rgba(57, 147, 171, 0.1);
    border: 1px solid light-blue;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: ${(props) => (props.noPadding ? 0 : '15px')};
`;

export default { Container, MainContainer };
