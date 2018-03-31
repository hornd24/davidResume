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
      
        <div className="floaty2">
          <div className="floaty col-lg-3">
            <center>
              <div className="Boxers Mongod" />
              <h3>MongoDB</h3>
            </center>
          </div>
          <div className="floaty col-lg-3">
          <center>
            <div className="Boxers Express" />
            <h3>Express.js</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers React" />
            <h3>React</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Node" />
            <h3>Node.js</h3>
          </center>
        </div>
        

      </div>    
      <div className="floaty2">
          <div className="floaty col-lg-3">
            <center>
              <div className="Boxers HTML" />
              <h3>HTMl:5</h3>
            </center>
          </div>
          <div className="floaty col-lg-3">
          <center>
            <div className="Boxers CSS" />
            <h3>CSS:3</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Javascript" />
            <h3>JavaScript</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers jQery" />
            <h3>jQuery</h3>
          </center>
        </div>
        

      </div>    
      <div className="floaty2">
          <div className="floaty col-lg-3">
            <center>
              <div className="Boxers SQL" />
              <h3>MYSQL</h3>
            </center>
          </div>
          <div className="floaty col-lg-3">
          <center>
            <div className="Boxers Boot" />
            <h3>BootStrap</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Handle" />
            <h3>Handlebars.js</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Material" />
            <h3>Material-UI</h3>
          </center>
        </div>
        

      </div>  
      <div className="floaty2">
          <div className="floaty col-lg-3">
            <center>
              <div className="Boxers ReactBoot" />
              <h3>React Bootstrap</h3>
            </center>
          </div>
          <div className="floaty col-lg-3">
          <center>
            <div className="Boxers Git" />
            <h3>GitHub</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Native" />
            <h3>React Native</h3>
          </center>
        </div>
        <div className="floaty col-lg-3">
        <center>
            <div className="Boxers Java" />
            <h3>Java</h3>
          </center>
        </div>
        

      </div> 
      </center>                      
      </div>
      </center>
      <br/>
      </div>

    )
}
}

export default Contact;

