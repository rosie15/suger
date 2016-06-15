import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import {Step, Stepper, StepLabel} from "material-ui/Stepper"

import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"

import {orange200} from "material-ui/styles/colors"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: orange200,
  },
})

class stepper extends React.Component {
  state = {
    finished: true,
    stepIndex: 0,
  }

  handleNext() {
    const {stepIndex} = this.this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    })
  }

  handlePre() {
    const {stepIndex} = this.this.state
    if(stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        finished: stepIndex <= 0,
      })
    }
  }

  getStepContent(stepIndex) {
    switch(stepIndex) {
      case 0:
        return "Step 1"
      case 1:
        return "Step 2"
      case 2:
        return "Step 3"
    }
  }

  render() {
    const {finished, stepIndex} = this.state

    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <Stepper
          active
        >
        </Stepper>
      </MuiThemeProvider>
    )
  }
}