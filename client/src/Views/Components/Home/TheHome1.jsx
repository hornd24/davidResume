import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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

      {/* <div className="containerBoxes">
    */}
        <h2 className='codingFramwork'>Coding Languages & Frameworks</h2>
        <Grid fluid={true}>
       <Row>
           <Col  className='Grid'>
      
             
             <div  className='Boxers Mongod'>
          
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
             <label>Name:</label>
        <p className='tiles'></p>
        <label> Email:</label>
        <p >}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p ></p>
      </div>
        </div> 
        <div  className='Boxers'>
        
        </div> 
        <div  className='Boxers'>
            
        </div> 
        <div  className='Boxers'>
           
        </div> 
        <div  className='Boxers'>
         
        </div> 
        <div  className='Boxers'>
          
        </div> 
        </Col> 
        </Row>
        </Grid>  
    
        

   
    
  
                     
      {/* </div> */}
    
      <br/>
      </div>

    )
}
}

export default Contact;

