import { ColorAreaContainer, ColorAreaBody } from './color-area.styles';

const ColorArea = ({colorArea}) => {
  return (
    <ColorAreaContainer colorArea={colorArea}>
      <ColorAreaBody>
        <h2>{colorArea}</h2>
      </ColorAreaBody>
    </ColorAreaContainer>
  )
}

export default ColorArea;
