import React from "react"

import Checkbox from "material-ui/Checkbox"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {blue300} from "material-ui/styles/colors"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: blue300,
  },
})

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

class checkbox extends React.Component {
  propTypes: {
    label: React.propTypes.string,
    labelPosition: React.propTypes.string,
    checked: React.propTypes.bool,
    defaultChecked: React.propTypes.bool,
    disabled: React.propTypes.bool,
    onCheck: React.propType.func
  }

  render() {
    return (
      <div style={styles.block}>
        <MuiThemeProvider muiTheme={defaultMuiTheme}>
          <Checkbox
            label={this.props.label || ""}
            labelPosition={this.props.labelPosition || "right"}
            checked={this.props.checked}
            onCheck={this.props.onCheck.bind(this)}
            style={styles.checkbox}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default checkbox