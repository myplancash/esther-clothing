import { useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';


const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </Fragment>
  )
};

export default CategoriesPreview;
