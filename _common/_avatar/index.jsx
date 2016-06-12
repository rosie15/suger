import React from "react"

import Avatar from "material-ui/Avatar"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import {blue300, pink400} from "material-ui/styles/colors"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: blue300,
  },
})

class avatar extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <Avatar
          size={50}
          backgroundColor={pink400}
        >
          U
        </Avatar>
      </MuiThemeProvider>
    )
  }
}

export default avatar