import React from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import { PickerContainer, Popover, Swatch, Cover } from './picker.styles';
// import { selectIsPickerOpen } from '../../store/picker-color/picker-color.selector';
import { setPickerColor, setIsPickerOpen } from '../../store/picker-color/picker-color.action';

class Picker extends React.Component {

  onClickHandler = () => {
    this.props.dispatch(setIsPickerOpen(!this.props.isPickerOpen))
  }


  onCloseHandler = () => {
    this.props.dispatch(setIsPickerOpen(!this.props.isPickerOpen))
  }


  colorAreaHandler = (colorHex) => {
    this.props.dispatch(setPickerColor(colorHex.hex))
  };



  render() {
    return (
      <PickerContainer>
        <Swatch background={this.props.color} onClick={this.onClickHandler} >
          <h2>{this.props.color}</h2>
          {this.props.isPickerOpen ? (
            <Popover>
              <Cover onClick={this.onCloseHandler}/>
              <SketchPicker
                color={this.props.color}
                onChangeComplete={this.colorAreaHandler}
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