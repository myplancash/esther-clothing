import { useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { ColorContainer, Title } from './color-picker.styles';
import { selectColorArea } from '../../store/color-area/color-area.selector';

import ColorArea from '../../components/color-area/color-area.component';
import Color from '../../components/color/color.component';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Picker from '../../components/picker/picker.component';
import { selectPickerColor } from '../../store/picker-color/picker-color.selector';



const ColorPicker = () => {
  const colorArea = useSelector(selectColorArea);
  const color = useSelector(selectPickerColor);
  const newColors = [
    {
      id: 1,
      name: '#00A4A6'
    },
    {
      id: 2,
      name: '#E4C3C7'
    },
    {
      id: 3,
      name: '#F7BD81'
    },
  ];

  return (
    <Fragment>
      <Title>Color Picker:</Title>
      <ColorContainer>
        <ColorArea colorArea={colorArea} />
        <Picker color={color}/>
        {newColors.map((colorToAdd) => (
          <Color key={colorToAdd.id} colorToAdd={colorToAdd} />
        ))}
      </ColorContainer>
    </Fragment>
  )
}

export default ColorPicker;