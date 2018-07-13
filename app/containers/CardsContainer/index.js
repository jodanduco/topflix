/**
 *
 * CardsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import styles from './cardsContainer.scss';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCardsContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CardItem from 'containers/CardItem';
import CardItem2 from 'components/CardItem2';

/* eslint-disable react/prefer-stateless-function */
export class CardsContainer extends React.Component {
  buildCardItems(data) {
    const cardItems = data.map(cardInfo => (
      <CardItem2 data={cardInfo} key={cardInfo.id} />
    ));
    return cardItems;
  }

  render() {
    const { data } = this.props;
    if (!data) return '';
    const cardItems = this.buildCardItems(data);
    return <div className="container">{cardItems}</div>;
  }
}

CardsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

const mapStateToProps = createStructuredSelector({
  cardscontainer: makeSelectCardsContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cardsContainer', reducer });
const withSaga = injectSaga({ key: 'cardsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CardsContainer);
