/**
 *
 * DiscoverPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import CardsContainer from 'containers/CardsContainer';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDiscoverPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// Actions
import { getDiscoverData } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class DiscoverPage extends React.Component {
  componentDidMount() {
    this.props.getDiscoverData();
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <Helmet>
          <title>DiscoverPage</title>
          <meta name="description" content="Description of DiscoverPage" />
        </Helmet>
        <CardsContainer data={data} />
      </div>
    );
  }
}

DiscoverPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  getDiscoverData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectDiscoverPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getDiscoverData: () => {
      dispatch(getDiscoverData());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'discoverPage', reducer });
const withSaga = injectSaga({ key: 'discoverPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DiscoverPage);
