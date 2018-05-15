import React,{Component} from 'react';
import LangArray from './HomeArrays/LangArray'
import Lang2 from './HomeArrays/lang'
import Lang3 from './HomeArrays/lang3'
import lang4 from './HomeArrays/lang4'
import { GridList, GridTile } from 'material-ui/GridList';
import './Home.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {

    maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    flexWrap: 'nowrap',
  },
  subheader: {
    fontSize: '30px',
    color: 'white',
    padding: '20px 0',
    backgroundColor: 'red'
  }
};

class Home12 extends Component {
    state={
        name:'',
        email:'',
        comment:'',
        mobile:'Boxes',
        Grid:'grid'
        
    }
    componentDidMount=()=> {
     
    }
  
    
    handleChange=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
         this.setState({ [name]: value })
      }
      componentWillReceiveProps=(nextProps) =>{
        console.log(nextProps)
        if(nextProps.mobile===true){
          this.setState({
            mobile:'BoxesMobile',
            Grid:'mobileGrid'
          })
        }
      }
      
      render(){
      
     
          
      
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
      <div className="container box">
      
      <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
     { LangArray.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
        
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      </GridList>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { Lang2.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
        
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { Lang3.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
        
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { lang4.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
        
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      </div>
      </MuiThemeProvider >
    )
}
}

export default Home12;

