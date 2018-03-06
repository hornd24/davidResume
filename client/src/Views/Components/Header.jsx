import React,{Component} from 'react';
// import background from '../background.jpg';
import './Header.css';
import { Grid, Row } from 'react-bootstrap';

class Header extends Component {
state={
headerClass:'headerDiv',
boxClass:'boxDiv',
boxesGrid:false,
Mern:false,
headerTxt:'headerTxt'
}
// componentWillReceiveProps=(nextProps)=>{
//     console.log(...nextProps)
//     console.log('lol')
// }
componentDidMount=()=>{
    
    const url=window.location.toString().split('/')
   
    if(url[3]==='about'||url[3]==='contact'){
        console.log('hi')
        this.setState({
            boxesGrid:true
        })
    }
     if(url[3]==='projects'){
        console.log('hi')
this.setState({
    headerClass:'P',
    boxClass:'P',
    boxesGrid:true,
    Mern:true
})
console.log(this.state.headerClass)
    }else{
        this.setState({
            headerClass:'headerDiv',
            boxClass:'boxDiv',
            notNeeded:false
        }) 
    }
}
componentWillReceiveProps=(props)=> {
    console.log(props)
    if(props.mobile===true){
        this.setState({
            headerClass:"headerMobileDiv",
            headerTxt:'mobileHeaderTxt'
        })
    }
    
}


render(){
    return (
        <div>
          <Grid fluid={true}>
          <br/> <br/>
              <p style={{color:'red',fontSize:'30px'}}>This website is under development.</p>
        <div className={this.state.boxClass}>
        <div className={this.state.headerClass}>
        <Row>
   <div className='behind'>
   {!this.state.Mern&&
            <h2 className={this.state.headerTxt} >MERN Full Web Stack Developer</h2>}
            </div>
           </Row> 
        </div>
        </div>
       {!this.state.boxesGrid&&<div> <br/>  <br/>  <br/><br/><br/></div>}
    
          </Grid>
        </div>
    )
}
}

export default Header;