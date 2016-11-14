import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setState } from '../actions';

import styles from 'home.css';

import BottomNavigation from './components/BottomNavigation';
import ProductItem from './components/ProductItem';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.navigateTo = this.navigateTo.bind(this);
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <section className={styles.products}>
          <ProductItem navigateTo={this.navigateTo} showComments={false} />
        </section>
        <BottomNavigation />
      </div>
    );
  }

  navigateTo(url) {
    this.props.router.push(url);
  }
}

// Connect to Redux store
function mapStateToProps(state, ownProps) {
  return {

  };
}

export const HomeContainer = connect(
  mapStateToProps,
  { setState }
)(Home);
