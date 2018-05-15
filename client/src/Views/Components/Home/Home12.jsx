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
        Grid:'grid',
        showLang:false,
        Lang:''
        
    }
    componentDidMount=()=> {
     
    }
  
  showLangCode=()=>{
    console.log(this.state.Lang)
    this.setState({
     showLang:true
    })
if(this.state.showLang===true){
 this.setState({
   showLang:false
 })
}
  }
   
  setStateOfLang=(e)=>{
  let Lang= e.currentTarget.attributes.name.nodeValue;
  
  this.setState({
Lang:Lang
  },this.showLangCode)

  
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
      <h2 className='codingFramwork'>Coding Languages & Frameworks</h2>
        <h4> click on a box for more information</h4>
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
        
        onClick={this.setStateOfLang}
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
          onClick={this.setStateOfLang}
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      {this.state.showLang&&
      <div  className='LangCode'>
<h1>{this.state.Lang}</h1>

      </div>
      }
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
          onClick={this.setStateOfLang}
        
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
        
          onClick={this.setStateOfLang}
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

