/* eslint-disable no-unused-vars */
// @ts-nocheck
//@eslint-disable

import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import AdditionalLinksCard from './AdditionalLinks/AdditionalLinksCard';
import FallbackSpinner from './FallbackSpinner';


const styles = {
	containerStyle: {
		marginBottom: 25,
	},
	showMoreStyle: {
		margin: 25,
	},
};
const AdditionalLinks = (props) => {
	const theme = useContext(ThemeContext);
	const { header } = AdditionalLinksCard.props;
	const [data, setData] = useState(null);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		fetch(endpoints.AdditionalLinks, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => err);
	}, []);
	const numberOfItems = showMore && data ? data.length : 6;
	return (
		<>
			<Header title={header} />
			{data ? (
				<div className='section-content-container'>
					<Container style={styles.containerStyle}>
						<Row xs={1} sm={1} md={2} lg={3} className='g-4'>
							{data.additionalLinks
								?.slice(0, numberOfItems)
								.map(AdditionalLinks)}{' '}
							=
							{
								<Fade key={AdditionalLinks.title}>
									<AdditionalLinksCard AdditionalLinks={AdditionalLinks} />
								</Fade>
							}
						</Row>
						{!showMore && (
							<Button
								style={styles.showMoreStyle}
								variant={theme.bsSecondaryVariant}
								onClick={() => setShowMore(true)}>
								show more
							</Button>
						)}

					</Container>
				</div>
			) : (
				<FallbackSpinner />
			)}
		</>
	);
}
// @ts-ignore
AdditionalLinks.propTypes = {

		header: PropTypes.string.isRequired,
};
export default AdditionalLinks;
