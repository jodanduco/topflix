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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDiscoverPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class DiscoverPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DiscoverPage</title>
          <meta name="description" content="Description of DiscoverPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>Discover page</div>
      </div>
    );
  }
}

DiscoverPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  discoverpage: makeSelectDiscoverPage(),
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

const withReducer = injectReducer({ key: 'discoverPage', reducer });
const withSaga = injectSaga({ key: 'discoverPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DiscoverPage);
