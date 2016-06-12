import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {cyan500} from "material-ui/styles/colors"

import FlatButton from "material-ui/FlatButton"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
})

class flatButton extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <FlatButton
          label="flatButton"
        />
      </MuiThemeProvider>
    )
  }
  
}

export default flatButton