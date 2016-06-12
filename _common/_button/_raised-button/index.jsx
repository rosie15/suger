import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {deepOrange500} from "material-ui/styles/colors"

import RaisedButton from "material-ui/RaisedButton"


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class raisedButton extends React.Component {
  propTypes: {
    label: React.propTypes.string,
  }

  constructor(props, context) {
    super(props, context)

    this.handleRequestClose = this.handleRequestClose.bind(this)

    this.state={
      open: false,
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <RaisedButton
          label={this.props.label || "Default"}
          secondary={true}
        />
      </MuiThemeProvider>
    )
  }
}

export default raisedButton
