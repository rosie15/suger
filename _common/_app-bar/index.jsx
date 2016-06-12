import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {cyan500} from "material-ui/styles/colors"

import AppBar from "material-ui/AppBar"

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
})

class appBar extends React.Component {
  propTypes: {
    title: React.propTypes.string,
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title={ this.props.title } />
      </MuiThemeProvider>
    )
  }
}

export default appBar