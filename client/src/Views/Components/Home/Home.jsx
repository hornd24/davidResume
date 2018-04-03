import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import LangArray from './LangArray'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 450,
    maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
  },
  subheader: {
    fontSize: '30px',
    color: 'white',
    padding: '20px 0',
    backgroundColor: 'red'
  }
};


//   <img src={tile.img} onClick={() => props.onClick(tile.author, tile)} />
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */



class productGridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ''

    }
    // this.searchCat = this.searchCat.bind(this);
  }
  search = () => {
    console.log(this.state.category)
    window.location = `/search_results/${this.state.category}`
  }
  searchCat = (event) => {
    let cat = event.currentTarget.attributes.value.nodeValue

    // const { target: { value } } = event;
    this.setState({
      category: cat
    }, this.search)
  }

  render() {

    return (

      <div style={styles.root}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
        <Subheader style={styles.subheader}>Categories </Subheader>

        <GridList
          cellHeight={250}
          style={styles.gridList}
          col={4}
        >
          {/* //<br/><h3>Click a category to search by category.</h3> */}
          {LangArray.map((tile) => (
            <GridTile
            cols={'auto'}
              name={tile.name}
              key={tile.img}
              // subtitle={tile.name}
              rows={2}
              title={tile.name}
              
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} value={tile.name} alt={tile.name} />
            </GridTile>
          ))}
        </GridList>
        </MuiThemeProvider>
      </div>
    )
  }
};

export default productGridList;
