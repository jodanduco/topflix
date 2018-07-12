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

/* eslint-disable react/prefer-stateless-function */
export class CardsContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    );
  }
}

CardsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
