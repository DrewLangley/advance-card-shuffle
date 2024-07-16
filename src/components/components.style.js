import styled from "styled-components";

// styling for card corners
export const CardFont = styled.h4`
  padding: 20px;
  color: ${(props => props.color)};
  margin-left: -50px;
  margin-top: -30px;
  font-size: 20pt;
  font-weight: bolder;
`;

// styling of the card
export const CardItem = styled.div`
.card-item-content {
	height: 50%;
	border-radius: 3px;
	margin: 0.5rem;
	text-align: center;
	padding: 2rem;
}
`;

export const CardContent = styled.div`
`;

export default { CardFont, CardItem, CardContent };