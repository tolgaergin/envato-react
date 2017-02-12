import React from 'react';
import Loading from '../Loading';
import SalesItem from './SalesItem';

const SalesList = ({ sales, isFetching }) => (
  isFetching ? <Loading /> : (
    <div className="child">
      <h2>Sales</h2>
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
  )
);

export default SalesList;
