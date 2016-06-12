import React from "react"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import {orange100} from "material-ui/styles/colors"

import {GridList, GridTile} from "material-ui/GridList"
import IconButton from "material-ui/IconButton"
import Subheader from "material-ui/Subheader"
import StarBorder from "material-ui/svg-icons/toggle/star-border"

const defaultMuiTheme = getMuiTheme({
  palette: {
    textColor: orange100,
  }
})

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: "auto",
    marginBottom: 24,
  },
}

const titlesData = [
  {
    img: "https://www.google.com/search?hl=zh-CN&biw=1309&bih=753&site=imghp&tbm=isch&sa=1&q=spongebob&oq=spongebob&gs_l=img.3...2403.2986.0.3204.4.4.0.0.0.0.0.0..0.0....0...1c.1.64.img..4.0.0.U1kJUyPBx_k#imgrc=4qgDPYjbH-J3rM%3A",
    title: "breakfast",
    author: "Jennifer",
  },
  {
    img: "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&pn=0&spn=0&di=113831309570&pi=&rn=1&tn=baiduimagedetail&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4236942158%2C2307642402&os=665726132%2C356480541&simid=3444347259%2C284796380&adpicid=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic32.nipic.com%2F20130829%2F12906030_124355855000_2.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bgtrtv_z%26e3Bv54AzdH3Ffi5oAzdH3F9AzdH3F8d0AzdH3Fb0mnn8a_z%26e3Bip4s&gsm=0",
    title: "lunch",
    author: "James",
  },
  {
    img: "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&pn=1&spn=0&di=147061048200&pi=&rn=1&tn=baiduimagedetail&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=4271053251%2C2424464488&os=2375022793%2C1835605452&simid=4247939438%2C550168575&adpicid=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic55.nipic.com%2Ffile%2F20141208%2F19462408_171130083000_2.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bgtrtv_z%26e3Bv54AzdH3Fzi7wgptAzdH3F8c8n9d9_d_z%26e3Bip4s&gsm=0",
    title: "supper",
    author: "Sheldon",
  },
]

class gridList extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={defaultMuiTheme}>
          <GridList
            cellHeight={200}
            style={styles.gridList}
          >
            <Subheader>December</Subheader>
            {
              titlesData.map((title) => {
                return (
                  <GridTile
                    key={title.img}
                    title={title.title}
                    subtitle={<span><b>{ title.author }</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                  </GridTile>
                )
              })
            }
          </GridList>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default gridList