import { useNavigate } from 'react-router-dom';
import {
  DirectoryBodyContainer,
  DirectoryItemContainer,
  BackgroundImage
} from './directory-item.styles.jsx';


const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, routeName } = category;

  const onNavigateHandler = () => navigate(routeName)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
