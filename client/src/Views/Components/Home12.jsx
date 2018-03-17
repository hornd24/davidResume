// import React,{Component} from 'react';
// // import FormGroup from 'react-bootstrap/lib/FormGroup';
// // import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// // import FormControl from 'react-bootstrap/lib/FormControl';
// // import HelpBlock from 'react-bootstrap/lib/HelpBlock';
// // import Button from 'react-bootstrap/lib/Button';
// import axios from "axios";
// import classNames from 'classnames'
// import { Grid, Row, Col } from 'react-bootstrap';
// import './Home.css'

// class Contact extends Component {
//     state={
//         name:'',
//         email:'',
//         comment:'',
//         mobile:'Boxes',
//         Grid:'grid'
        
//     }
//     componentDidMount=()=> {
      
//     }
  
    
//     handleChange=(e) =>{
//         const name = e.target.name;
//         const value = e.target.value;
//          this.setState({ [name]: value })
//       }
//       componentWillReceiveProps=(nextProps) =>{
//         console.log(nextProps)
//         if(nextProps.mobile===true){
//           this.setState({
//             mobile:'BoxesMobile',
//             Grid:'mobileGrid'
//           })
//         }
//       }
      
//       render(){
      
     
          
      
//     return (
        
//         <div className="container">
//         <Grid fluid={true}>
       
//        <div><h2 className='lang'>Coding Languages & Frameworks</h2></div>
 
    
//      <div className={this.state.Grid}> 
//        <Row className="show-grid">
//     <Col visibleSmBlock={true} xs={5} md={3}>
      
//       <div className={classNames(this.state.mobile,'Mongod') } >
     
//       </div>
//      <h3 className='nodeH'>MongoDB</h3>
//     </Col>
//     <Col  visibleSmBlock={true} xs={5} md={3}>
    
  
//       <div className={classNames(
//         this.state.mobile, 'Express' 
//       )}>
//       </div>
//       <h3 className='nodeH'>Express</h3>
//     </Col>
//     <Col xs={4}visibleSmBlock={true} md={3}>
//     <div className={classNames(this.state.mobile,'React') }>
//       </div>
//       <h3 className='nodeH'>React.js</h3>
//       </Col>
//       <Col  xs={4}visibleSmBlock={true} md={3}>
//       <div className={classNames(this.state.mobile,'Node') }>
//       </div>
//       <h3 className='nodeH'>Node.js</h3>
//  </Col>
//       </Row>
//       <br/>
//       <Row className="show-grid">
//     <Col  xs={4}visibleSmBlock={true} md={3}>
      
//       <div className={classNames(this.state.mobile,'HTML') }>
//       </div>
//       <h3 className='nodeH'>HTML:5</h3>
//     </Col>
//     <Col smOffset  xs={4}visibleSmBlock={true} md={3}>
    
  
//       <div className={classNames(this.state.mobile,'CSS') }>
//       </div>
//       <h3 className='nodeH'>CSS:3</h3>
//     </Col>
//     <Col xs={4} smOffset visibleSmBlock={true} md={3}>
//     <div className={classNames(this.state.mobile,'Javascript') } >
//       </div>
//       <h3 className='nodeH'>Javascript</h3>
//       </Col>
//       <Col xs={4}smOffset visibleSmBlock={true} md={3}>
//       <div className={classNames(this.state.mobile,'Boot') }>
//       </div>
//       <h3 className='nodeH'>BootStrap</h3>
//  </Col>
//       </Row>
//       <br/>
//       <Row className="show-grid">
//     <Col xs={4} smOffset visibleSmBlock={true} md={3}>
      
//       <div className={classNames(this.state.mobile,'SQL') }>
//       </div>
//       <h3 className='nodeH'>MYSQL</h3>
//     </Col>
//     <Col  xs={4}visibleSmBlock={true} md={3}>
    
  
//       <div className={classNames(this.state.mobile,'Handle') }>
//       </div>
//       <h3 className='nodeH'>Handlebars.js</h3>
//     </Col>
//     <Col smOffset xs={4} visibleSmBlock={true} md={3}>
//     <div className={classNames(this.state.mobile,'Jqery') }>
//       </div>
//       <h3 className='nodeH'>JQery</h3>
//       </Col>
//       <Col xs={4}smOffset  visibleSmBlock={true} md={3}>
//       <div className={classNames(this.state.mobile,'Material') } >
//       </div>
//       <h3 className='nodeH'>Material-UI</h3>
//  </Col>
//       </Row>
//       <br/>
//       <Row className="show-grid">
//     <Col  xs={4} smOffset visibleSmBlock={true} md={3}>
      
//       <div className={classNames(this.state.mobile,'Git') }>
//       </div>
//       <h3 className='nodeH'>Git Hub</h3>
//     </Col>
//     <Col xs={4} smOffset visibleSmBlock={true} md={3}>
    
  
//       <div className={classNames(this.state.mobile,'ReactBoot') }>
//       </div>
//       <h3 className='nodeH'>React BootStrap</h3>
//     </Col>
//     <Col xs={4}smOffset visibleSmBlock={true} md={3}>
//     <div className={classNames(this.state.mobile,'Native') }>
//       </div>
//       <h3 className='nodeH'>React Native</h3>
//       </Col>
//       <Col xs={4} visibleSmBlock={true} md={3}>
//       <div className={classNames(this.state.mobile,'Java') }>
//       </div>
//       <h3 className='nodeH'>Java</h3>
//  </Col>
//       </Row>
//         </div>
        
//  </Grid>
//         </div>
//     )
// }
// }

// export default Contact;

import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './ProductGridList.css';
import catArray from './catphotos/cat'

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
  },
  subheader: {
    fontSize: '30px',
    color: 'white',
    padding: '20px 0',
    backgroundColor: 'red'
  }
};


//   <img src={tile.img} onClick={() => props.onClick(tile.author, tile)} />
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */



class productGridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ''

    }
    // this.searchCat = this.searchCat.bind(this);
  }
  search = () => {
    console.log(this.state.category)
    window.location = `/search_results/${this.state.category}`
  }
  searchCat = (event) => {
    let cat = event.currentTarget.attributes.value.nodeValue

    // const { target: { value } } = event;
    this.setState({
      category: cat
    }, this.search)
  }

  render() {

    return (

      <div style={styles.root}>
        <Subheader style={styles.subheader}>Categories </Subheader>

        <GridList
          cellHeight={180}
          style={styles.gridList}
          col={4}
        >
          {/* //<br/><h3>Click a category to search by category.</h3> */}
          {catArray.map((tile) => (
            <GridTile
              name={tile.name}
              key={tile.img}
              value={tile.value}
              onClick={this.searchCat}
              title={tile.name}
              subtitle={<span>Price Range: $<b>{tile.priceRange}</b></span>}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} value={tile.name} alt='categorys' />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
};

export default productGridList;
