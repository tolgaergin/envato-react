import React from 'react';
import Loading from '../Loading';
import SalesItem from './SalesItem';

import InformationPage from '../InformationPage';
import emptyStatement from '../../assets/svg/empty-statement.svg';

function SalesList(props) {
  const { sales, isFetching } = props;

  if (isFetching) {
    return <Loading />;
  } else {
    if (sales.length === 0) {
      return (
        <InformationPage
          image={emptyStatement}
          text="You haven’t sold any item in Envato Market yet :("
          buttonText="Learn how to boost your sales"
          buttonHref="http://envato.com"
        />
      );
    } else {
      return (
        <div className="child">
          <ul>
            {
              Object.keys(sales).map(key =>
                <SalesItem
                  key={key}
                  index={key}
                  item={sales[key]}
                />
              )
            }
          </ul>
        </div>
      );
    }
  }
};

SalesList.propTypes = {
  sales: React.PropTypes.array,
  isFetching: React.PropTypes.bool,
};

export default SalesList;
