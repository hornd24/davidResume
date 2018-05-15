import React,{Component} from 'react';
import LangArray1 from './HomeArrays/LangArray1'
import LangArray2 from './HomeArrays/LangArray2'
import LangArray3 from './HomeArrays/LangArray3'
import LangArray4 from './HomeArrays/LangArray4'
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
        row:1,
        showRow1:false,
        column:1,
        showRow2:false,
        showRow3:false,
        showRow4:false,
        row1Lang:'',
        row2Lang:'',
        row3Lang:'',
        row4Lang:'',
        row1Info:'',
        row2Info:'',
        row3Info:'',
        row4Info:'',
        
        
    }
    componentDidMount=()=> {
     
    }
  
  showLangCode=()=>{
    console.log(this.state.Lang)
    console.log(this.state.row)
    if(this.state.row==1){
    
    this.setState({
      showRow1:true
    })
if(this.state.showRow1===true&&this.state.column>4){
 this.setState({
  showRow1:false
 })
}
if(this.state.showRow2===true){
  this.setState({
   showRow3:false
  })
 }
 if(this.state.showRow3===true){
  this.setState({
   showRow3:false
  })
 }
 if(this.state.showRow4===true){
  this.setState({
   showRow4:false
  })
 }
    }
    else if(this.state.row==2){
      this.setState({
        showRow2:true
      })
      if(this.state.showRow1===true){
        this.setState({
         showRow1:false
        })
       }
      // if(this.state.showRow2===true){
      //   this.setState({
      //    showRow2:false
      //   })
      //  }
       if(this.state.showRow3===true){
        this.setState({
         showRow3:false
        })
       }
       if(this.state.showRow4===true){
        this.setState({
         showRow4:false
        })
       }
    }
    else if(this.state.row==3){
      this.setState({
        showRow3:true
      })
      if(this.state.showRow1===true){
        this.setState({
         showRow1:false
        })
       }
       if(this.state.showRow2===true){
        this.setState({
         showRow2:false
        })
       }

      // if(this.state.showRow3===true){
      //   this.setState({
      //    showRow3:false
      //   })
      //  }
       if(this.state.showRow4===true){
        this.setState({
         showRow4:false
        })
       }
    }else if(this.state.row==4){
      this.setState({
        showRow4:true
      })
      if(this.state.showRow1===true){
        this.setState({
         showRow1:false
        })
       }
       if(this.state.showRow2===true){
        this.setState({
         showRow2:false
        })
       }
       if(this.state.showRow3===true){
        this.setState({
         showRow3:false
        })
       }
      // if(this.state.showRow4===true){
      //   this.setState({
      //    showRow4:false
      //   })
      //  }
    }
  }
   
  setStateOfLang=(e)=>{
  let Lang= e.currentTarget.attributes.name.nodeValue;
  let Info=e.currentTarget.attributes.info.nodeValue;
  let Row=e.currentTarget.attributes.row.nodeValue
 let Column=e.currentTarget.attributes.column.nodeValue
 
  this.setState({
    column:Column,
    row:Row,
Lang:Lang,
info:Info
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
     { LangArray1.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
          row={tile.row}
        info={tile.info}
        
       
        column={tile.key}
        onClick={this.setStateOfLang}
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      </GridList>
      {this.state.showRow1&&
      <div  className='LangCode'>
<h1>{this.state.Lang}</h1>
<br/>
<h3>{this.state.info}</h3>



      </div>
      }
        <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { LangArray2.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
          row={tile.row}
        info={tile.info}
        column={tile.key}
       
       
          onClick={this.setStateOfLang}
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      {this.state.showRow2&&
      <div  className='LangCode'>
<h1>{this.state.Lang}</h1>
<br/>
<h3>{this.state.info}</h3>


      </div>
      }
      <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { LangArray3.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          row={tile.row}
        info={tile.info}
    
          value={tile.value}
          column={tile.key}
          onClick={this.setStateOfLang}
        
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      {this.state.showRow3&&
      <div  className='LangCode'>
<h1>{this.state.Lang}</h1>
<br/>
<h3>{this.state.info}</h3>



      </div>
      }
      <GridList
          cellHeight={200}
          style={styles.gridList}
          col={6}
        >  
       { LangArray4.map((tile) => (
        <div
       className='Boxers'
          name={tile.name}
          key={tile.key}
          value={tile.value}
          row={tile.row}
          
          info={tile.info}
          column={tile.key}
          onClick={this.setStateOfLang}
        >
          <img   className='mon' src={tile.img} value={tile.name} alt='categorys' />
        </div>
      ))}
      
      </GridList>
      {this.state.showRow4&&
      <div  className='LangCode'>
<h1>{this.state.Lang}</h1>
<br/>
<h3>{this.state.info}</h3>



      </div>
      }
      </div>
      </MuiThemeProvider >
    )
}
}

export default Home12;

