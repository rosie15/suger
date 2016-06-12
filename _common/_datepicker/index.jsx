import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import DatePicker from "material-ui/DatePicker"

import {green500} from "material-ui/styles/colors"

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: green500,
  },
})

class datePicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      controlledDate: null,
    }
  }

  handleChange(evt, date) {
    const currentDate = new Date()
    this.setState({
      controlledDate: date,
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <DatePicker
          hintText="Start Date"
          mode="landscape"
        />
      </MuiThemeProvider>
    )
  }
}

export default datePicker