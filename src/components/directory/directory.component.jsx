import { Fragment } from 'react/cjs/react.production.min';
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <Fragment>
      <div className='directory-container'>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className='copy'>© 2022 Esther, Inc.</div>
    </Fragment>
  );
};

export default Directory;
