import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Home.css'

class Contact extends Component {
    state={
        name:'',
        email:'',
        comment:'',
        mobile:'Boxes',
        Grid:'grid',
        showCode:false,
        Lang:''
        
    }
    componentDidMount=()=> {
      
    }
   showLangCode=()=>{
     console.log('heyyy')
     this.setState({
      showCode:true
     })
if(this.state.showCode===true){
  this.setState({
    showCode:false
  })
}
   }
    
   setStateOfLang=(e)=>{
   let Lang= e.currentTarget.attributes.lang.nodeValue;
   console.log(Lang)
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
      <div className="container" >  

      <div className="containerBoxes">
   
        <h2 className='codingFramwork'>Coding Languages & Frameworks</h2>
        <h4> click on a box for more information</h4>
        <Grid className='box' fluid={true}>
       <Row>
           <Col lg={4} className=' col-lg-4'>
      
             
             <div lang={'MongoDB'} className='Boxers Mongod' onClick={this.setStateOfLang}>
             <p>MongoDb</p>
        </div> 
       
        <div lang={'Express'} className='Boxers Express ' onClick={this.setStateOfLang}>
           
        </div> 
        <div lang={'React'} className='Boxers React' onClick={this.setStateOfLang}>
            
        </div> 
        <div lang={'Node'} className='Boxers Node ' onClick={this.setStateOfLang}>
            
        </div> 
        </Col >
        <Col lg={4}  className=' col-lg-4'>
        <div lang={'HTML:5'} className='Boxers HTML' onClick={this.setStateOfLang}>
         
        </div> 
        {this.state.showCode&&
        <div className='LangCode'>
        <br/> <h1>{this.state.Lang}
       </h1>
       <br/></div> }
        <div lang={'CSS:5'} className='Boxers CSS' onClick={this.setStateOfLang}>
             
        </div> 
        <div lang={'Javascript'} className='Boxers Javascript' onClick={this.setStateOfLang}>
          
        </div> 
        <div lang={'jqery'} className='Boxers jQery' onClick={this.setStateOfLang}>
         
        </div> 
        </Col>
        <Col lg={4}  className=' col-lg-4'>
        <div lang={'MYSQL'} className='Boxers SQL 'onClick={this.setStateOfLang} >
           
        </div> 
        <div lang={'Bootstrap'} className='Boxers Boot' onClick={this.setStateOfLang}>
        
        </div> 
        <div lang={'Handlebars.js'} className='Boxers Handle' onClick={this.setStateOfLang}>
        
        </div> 
        <div lang={'Material'} className='Boxers Material' onClick={this.setStateOfLang}>
        
        </div> 
        </Col>
        <Col lg={4}  className=' col-lg-4'>
        <div lang={'React Bootstrap'} className='Boxers ReactBoot' onClick={this.setStateOfLang}>
            
        </div> 
     
        <div lang={'Git Hub'} className='Boxers Git' onClick={this.setStateOfLang}>
           
        </div> 
        <div lang={'React Native'} className='Boxers Native' onClick={this.setStateOfLang}>
         
        </div> 
        <div lang={'Java'} className='Boxers Java'  onClick={this.setStateOfLang}>
          
        </div> 
        </Col> 
        </Row>
        </Grid>  
    
        

   
    
  
              <br/>       
      </div>
    
    
      </div>

    )
}
}

export default Contact;

