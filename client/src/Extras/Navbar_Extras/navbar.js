import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import * as colors from 'material-ui/colors';
const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    Toolbar:{
      float:'left',position:'relative',clear:'right', margin: 'auto',alignContent:'left',
      padding: '10px'
      
    }
  };
class Navbars extends Component {

    render(){
     
        return(
           <div>
   <div style={{alignContent:'center'}}>
           <Toolbar style={styles.Toolbar}>
            
  
       
             <ul variant="raised" color='400' >
            Home
           </ul>
           <ul variant="raised" color="primary" >
             Resume
           </ul>
           <ul variant="raised" color="#B3E5FC" >
           Linkedin
           </ul>
           <ul variant="raised" color="#B3E5FC"  >
             GitHub
           </ul>
            <a href='/contact'> <ul href='/contact' color="inherit">Contact</ul></a>
           </Toolbar>
         </div>
        
           </div> 
        )
    }

}
export default Navbars;