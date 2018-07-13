/**
 *
 * CardItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCardItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './cardItem.scss';

// Material Card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ROOT_URL_POSTER = 'https://image.tmdb.org/t/p/w300';

/* eslint-disable react/prefer-stateless-function */
export class CardItem extends React.Component {
  render() {
    const { data } = this.props;
    const { title, overview } = data;
    const posterUrl = `${ROOT_URL_POSTER}${data.backdrop_path}`;
    debugger
    return (
      <div className="cardItem">
        <div>
          <Card className="card">
            <CardMedia
              className="media"
              image={posterUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <Typography component="p">{overview}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

CardItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  carditem: makeSelectCardItem(),
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

const withReducer = injectReducer({ key: 'cardItem', reducer });
const withSaga = injectSaga({ key: 'cardItem', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CardItem);
