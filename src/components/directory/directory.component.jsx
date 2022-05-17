import { Fragment } from 'react/cjs/react.production.min';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <Fragment>
      <div className='directory-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className='copy'>© 2022 Esther, Inc.</div>
    </Fragment>
  );
};

export default Directory;
