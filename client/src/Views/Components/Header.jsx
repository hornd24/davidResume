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
    if(props.thanskpage===true){
        this.setState({
            
            
        })
    }
    
}


render(){
    return (
            <div className="container">
                <div className="row">                        
                    <div className="col-lg-12">
              
                  
                        <div className={this.state.headerClass}>
                        <h2 className={this.state.headerTxt} >MERN Full Web Stack Developer</h2>
                            </div>
                        
                    </div>
                </div>
            </div>        
    )   
}
}

export default Header;