import React,{Component} from 'react';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import axios from "axios";

import './admin.css'
import { Grid, Row, Col } from 'react-bootstrap';
class Contact extends Component {
    state={
        user:'',
        
       pass:'',
       modal:false,
        show:false,
        overlay:'overlay',
        sign:'show',
        info:[],
        hide:true,
        name:'',
        email:'',
        comment:'',
        commentTwo:'',
        oneComment:true,
        commentModal:false,
        createdat:'',
        
        
    }
    componentDidMount=()=>{

    }
    handleText=(e) =>{
        const name = e.target.name;
        const value = e.target.value;
  
         this.setState({ [name]: value })
      }
      getInfo=(e)=>{
          let name=e.currentTarget.attributes.name.nodeValue
         let email=e.currentTarget.attributes.email.nodeValue
         let comments=e.currentTarget.attributes.comment.nodeValue
         let createdAt=e.currentTarget.attributes.createdat.nodeValue
         let commenttwo='';
         if(e.currentTarget.attributes.comment.nodeValue !== ''){
            this.setState({
                commentModal:true
            })
             try{
                commenttwo=e.currentTarget.attributes.commenttwo.nodeValue
            
             }catch(err){
                console.log( err)
             }
            
         }
        
    this.setState({
name:name,
email:email,
comment:comments,
commentTwo:commenttwo,
createdat:createdAt
    },this.showMore)
    setTimeout(function(){  }, 3000);
    
 
      }
      showMore=()=>{
       
this.setState({
    modal:true
})

      }
      closeModal=()=>{
        this.setState({modal:false})
      }
      onSubmit=()=>{
        axios.get('/api/contact/').then(info=>{
            this.setState({
info:info.data
            })


        }).then(fun=>{
            let email=this.state.user
            let pass =this.state.pass

            const user={
                email:email,
                password:pass
            }
         
            axios.post('api/users/sign',user).then((users=>{
                console.log(users)  
                if(users.data==='auth'){
                    this.setState({
                        overlay:'overlay2',
                        sign:'not',
                        show:true,
                        hide:false,
                        
                    })
                 for(let i=0;i<this.state.info.length;i++){
      if(this.state.info[i].commentTwo !==''){
          this.setState({oneComment:false})
          
      }
                 }
      
                }
            }))  
        })
             
     
        // axios.post("/api/contact/info", this.state)
        // window.location='/thanks'
      }
      render(){
      
            
          
      
    return (
        
        <div onClick={this.closeModal} className={this.state.overlay}>
        <br/>
        {!this.state.hide&&<div><br/>
        <h1>To get more infomation or email yourself a copy click on a box.</h1></div>}
        {!this.state.hide&&
        <div  className='info boxDiv'>
       <Grid fluid={true}>
       <Row>
           <Col  className='Grid'>
        {this.state.info.map((tile) => ( 
             
             <div name={tile.name} createdat={tile.createdAt} commenttwo={tile.commentTwo} email={tile.email} comment={tile.comments} onClick={this.getInfo} key={tile.id}  className='Boxes'>
             <label>Name:</label>
        <p className='tiles'>{tile.name}</p>
        <label> Email:</label>
        <p >{tile.email}</p>
        <div className='Comments'>
        <label>Comments:</label>
        <p >{tile.comments}</p>
      {!this.state.oneComment&& <div><label>Comment#2</label><p>{tile.commentTwo}</p></div>}</div>
        </div> ))}  
        </Col> 
        </Row>
        </Grid>  
           </div> }
           <Modal bsSize={'lg'}style={{overFlow:'visible'}} autoFocus show={this.state.modal}>
           <Modal.Header>To email click on either button</Modal.Header>
           <Modal.Body bsSize={'lg'}><label>Name:</label>
        <p className='showMore'>{this.state.name}</p>
        <label> Email:</label>
        <p className='showMore'>{this.state.email}</p>
        <label>Comments:</label>
        <p className='showMore'>{this.state.comment}</p>
        {!this.state.commentModal&&<div><label>Comment #2:</label>
        <p className='showMore'>{this.state.commentTwo}</p></div>}<label>Created On:</label><p className='showMore'>{this.state.createdat}</p></Modal.Body>
        <Modal.Footer style={{float:'left',overflow:'auto',height:'200px'}}>
        <Button onClick={this.showMore}>Email Me</Button><Button onClick={this.showMore}>Other Email</Button> </Modal.Footer> </Modal>
        {!this.state.show&&
        <div className={this.state.sign}>
       <label style={{color:'black',fontFamily:'Oswald'}}>Username: </label>
        <FormControl
             onChange={this.handleText}
                 id="formControlsEmail"
                name='user'
                type="text"
                label="UserName"
                placeholder="Enter Username"
                value={this.state.user}
            />
              <label style={{color:'black',fontFamily:'Oswald'}}>Password: </label>
            <FormControl
             onChange={this.handleText}
             name='pass'
                
                type="password"
                // label="Comments"
                placeholder="Enter Password"
                value={this.state.pass}
            />
            <Button onClick={this.onSubmit} bsStyle="success">Sign In </Button>
            </div>}
      
        </div>
    )
}
}

export default Contact;