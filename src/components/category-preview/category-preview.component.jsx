import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  TitleContainer,
  Title,
  Preview
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {

  return (
    <CategoryPreviewContainer>
        <TitleContainer>
          <Title to={title}>{title.toUpperCase()}</Title>
        </TitleContainer>
        <Preview>
          {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
