import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"
import Dialog from "material-ui/Dialog"

import {cyan500} from "material-ui/styles/colors"

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
})

class dialog extends React.Component {
  constructor() {
    super()

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false,
    }
  }

  handleOpen() {
    this.setState({
      open: true,
    })
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const actions  = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="submit"
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ]
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton
            label="Dialog"
            onTouchTap={this.handleOpen}
          />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="This is a warning message"
            actions={actions}
            open={this.state.open}
            onRequestClose={this.handleClose}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default dialog
