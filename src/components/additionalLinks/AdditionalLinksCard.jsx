// @ts-nocheck
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import AdditionalLinks from '../AdditionalLinks';


const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const AdditionLinksCard = (props ) => {
  const theme = useContext(ThemeContext);
  const { AdditionalLinks } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        text={theme.bsSecondaryVariant}
      >
        <Card.Img variant="top" src={AdditionalLinksCard?.image} />
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{AdditionalLinksCard.title}</Card.Title>
        </Card.Body>

        <Card.Body>
          {AdditionalLinksCard?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {AdditionalLinksCard.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {AdditionalLinksCard.tags.map((link) => (
              <Badge
                key={image.AdditionalLinks}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {title.AdditionalLinks}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

AdditionalLinksCard.propTypes = {
  AdditionalLinks: PropTypes.shape({
		header: PropTypes.shape({
			title: PropTypes.string.isRequired,
			img: PropTypes.string,
			links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
})
};
export default AdditionalLinksCard;
