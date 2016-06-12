import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {blue300} from "material-ui/styles/colors"

import Divider from "material-ui/Divider"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: blue300,
  },
})

class divider extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <Divider />
      </MuiThemeProvider>
    )
  }
}

export default divider