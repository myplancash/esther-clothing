import { useDispatch } from 'react-redux';
import { setColorArea } from '../../store/color-area/color-area.action';

import {
  ColorContainer,
  ColorBodyContainer
} from './color.styles';

const Color = ({ colorToAdd }) => {
  const dispatch = useDispatch();
  const { name } = colorToAdd;
  const addNewColorHandler = () => dispatch(setColorArea(name));

  return (
    <ColorContainer name={name} onClick={addNewColorHandler}>
      <ColorBodyContainer>{name}</ColorBodyContainer>
    </ColorContainer>
  )
}

export default Color;