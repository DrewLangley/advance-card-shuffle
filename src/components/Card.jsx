import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card as PCard } from 'primereact/card';

const Card = ({ title, children, width, titleStyle, footer, margin, bodyStyle, ...props }) => {
  return (
    <PCard title={title} className={`m-${margin} shadow-1 gmc-card`} {...props}>
      <div style={bodyStyle}>{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </PCard>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  titleStyle: PropTypes.any,
  bodyStyle: PropTypes.any,
  title: PropTypes.string,
  footer: PropTypes.string,
  width: PropTypes.number,
  margin: PropTypes.number,
};

Card.defaultProps = {
  title: '',
  titleStyle: {},
  bodyStyle: {},
  footer: null,
  width: 100,
  margin: 3,
};

export default Card;
