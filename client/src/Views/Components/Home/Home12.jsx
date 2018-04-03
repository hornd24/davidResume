import React,{Component} from 'react';


import './Home.css'

class Contact extends Component {
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
      <div className="container">  
      <center>
      <div className="containerBoxes">
        <center>
        <h2 className='codingFramwork'>Coding Languages & Frameworks</h2>
    
      </center>                      
      </div>
      </center>
      <br/>
      </div>

    )
}
}

export default Contact;

