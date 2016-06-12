import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import Slider from "material-ui/Slider"

import {blue300} from "material-ui/styles/colors"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: blue300,
  },
})

class slider extends React.Component {
  propTypes: {
    min: React.propTypes.number,
    max: React.propTypes.number,
    step: React.propType.number,
    defaultValue: React.propTypes.number,
    value: React.ptopTypes.number,
    onChange: React.propTypes.fun
  }

  state = {
    value: 0,
  }

  handleSlider(event, value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <Slider
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          value={this.state.value}
          onChange={this.handleSlider.bind(this)}
        />
      </MuiThemeProvider>
    )
  }
}

export default slider