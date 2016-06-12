import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"

import RefreshIndicator from "material-ui/RefreshIndicator"

const defaultMuiTheme = getMuiTheme(darkBaseTheme)

const style = {
  container: {
    position: "relative",
  },
  refresh: {
    display: "inline-block",
    position: "relative",
  },
}

class refreshIndicator extends React.Component {
  render() {
    return (
      <div style={style.container}>
        <MuiThemeProvider muiTheme={defaultMuiTheme}>
          <RefreshIndicator
            status="loading"
            left={40}
            top={40}
            style={style.refresh}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default refreshIndicator