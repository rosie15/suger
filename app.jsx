import React from "react"
import DOM from "react-dom"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import injectTapEventPlugin from "react-tap-event-plugin"

import {deepOrange500} from "material-ui/styles/colors"
import RaisedButton from "./_common/_button/_raised-button"
import AppBar from "./_common/_app-bar"
import DatePicker from "./_common/_datepicker"
import Dialog from "./_common/_dialog"
import FlatButton from "./_common/_button/_flat-button"
import RefreshLoading from "./_common/_loading/_refresh"

import GridList from "./_common/_grid-list"
import Avatar from "./_common/_avatar"

import Divider from "./_common/_devider"
import Slider from "./_common/_slider"

import Checkbox from "./_common/_checkbox"

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

const App = React.createClass({
  getInitialState() {
    return {
      checked: false,
    }
  },

  componentDidMount() {
    this.setState({
      checked: true,
    })
  },

  render() {
    return (
      <div>
        <RaisedButton
          label="MyButton"
        />
        <AppBar />

        <div>
          <DatePicker />
        </div>
        <Dialog />
        <FlatButton />
        <div>
          <RefreshLoading />
        </div>
        <GridList />
        <Avatar />
        <Divider />
        <Slider />
        <Checkbox
          checked={this.state.checked}
          onCheck={(change, check) => {
            this.setState({
              checked: !this.state.checked,
            })
          }}
        />
      </div>
    )
  }
})

DOM.render(<App />, document.getElementById("app"))