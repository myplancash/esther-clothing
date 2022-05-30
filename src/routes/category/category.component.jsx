import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [ products, setProducts ] = useState(categoriesMap[category]);
  //const products  = categoriesMap[category] we could do that but whatever this components renders this products will be gotten

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
        ) : (
          <CategoryContainer>
            {products && products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CategoryContainer>
        )
      }
    </Fragment>
  )
}
export default Category;