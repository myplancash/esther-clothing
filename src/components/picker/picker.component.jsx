import React from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import { PickerContainer, Popover, Swatch, Cover } from './picker.styles';
// import { selectIsPickerOpen } from '../../store/picker-color/picker-color.selector';
import { setPickerColor, setIsPickerOpen } from '../../store/picker-color/picker-color.action';
import { setColorArea } from '../../store/color-area/color-area.action';
class Picker extends React.Component {

  onClickHandler = () => {
    this.props.dispatch(setIsPickerOpen(!this.props.isPickerOpen))
  }

  onCloseHandler = () => {
    this.props.dispatch(setIsPickerOpen(!this.props.isPickerOpen))
  }


  pickerAreaHandler = (colorHex) => {
    this.props.dispatch(setPickerColor(colorHex.hex))
    this.props.dispatch(setColorArea(colorHex.hex));
  };



  render() {
    return (
      <PickerContainer color={this.props.colorArea}>
        <Swatch background={this.props.colorArea} onClick={this.onClickHandler} >
          <h2>{this.props.colorArea}</h2>
          {this.props.isPickerOpen ? (
            <Popover>
              <Cover onClick={this.onCloseHandler}/>
              <SketchPicker
                color={this.props.colorArea}
                onChangeComplete={this.pickerAreaHandler}
              />
            </Popover>
            ) : null
          }
        </Swatch>
      </PickerContainer>
    )
  }
}
/*
const mapDispatchToProps = (dispatch) => ({
  setPickerColor: (colorToAdd) => dispatch(setPickerColor(colorToAdd)),
  setIsPickerOpen: (boolean) => dispatch(setIsPickerOpen(boolean))
});
 */
const mapStateToProps = ({picker}) => ({
  isPickerOpen: picker.isPickerOpen,
});

export default connect(mapStateToProps, null)(Picker);