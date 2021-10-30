import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';

const Quote = styled.div`
	font-family: got;
	word-spacing: 8px;
	padding: 3rem;
	border-radius: 6px;
	background-color: #ffd700;
	max-width: 800px;
	border: dashed 1px black;

	@media (min-width: 992px){
		margin-top: 10rem;
	}

	@media (max-width: 992px){
		margin-top: 10rem;
	}

	h2{

		text-align: center;
		position: relative;
		padding-left: 4rem;

		&::before{
			content: open-quote;
			font-size: 6rem;
			color: #000;
			position: absolute;
			left: -1rem;
			top: -2rem;
		}
	}

	p{
		font-size: 1.2rem;
		font-weight: bold;
		text-align: right;
		color: #666;
		margin-top: 2rem;
	}

`;

const Frase = ({quote}) => {
	if (Object.keys(quote).length===0) return null;
	return (
		<React.Fragment>
			<Quote>
				<h2>{quote.quote}</h2>
				<p>- {quote.character}</p>
			</Quote>

		</React.Fragment>
	)
}

Frase.propTypes = {
	quote: PropTypes.object.isRequired,
}

export default Frase