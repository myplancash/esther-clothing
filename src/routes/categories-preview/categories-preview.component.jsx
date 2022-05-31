import { useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment>
      { isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        }))
      }
    </Fragment>
  )
};

export default CategoriesPreview;
