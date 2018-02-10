import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thumbnails from "./component/Thumbnail";
import Modal from "./component/Modal";
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { getImages,clickImage,closeImage } from './actions/action';


class App extends Component {
  constructor(props){
    super(props);    
  }

  componentDidMount() {
    fetch('/images')
      .then(res => res.json())
      .then(img => {
        this.props.actions.getImages(img)
      });
  }

  chosenImage = (id)=>{
    let chose_img = this.props.images.filter((img)=>{
      return img.id === id;
    })
    this.props.actions.clickImage(chose_img[0]);
  }

  handleClose = () =>{
    this.props.actions.closeImage();
  }

  render() {
    return (
      <div className="container">      
        <h1 className= "text-center">Thumbnails</h1>        
        <Thumbnails images = {this.props.images} clickIt = {this.chosenImage} />
        <Modal image = {this.props.modal_pic} closeModal = {this.handleClose} />
      </div>
    );
  }
}




function mapStateToProps(state) {
    return { images: state.images,
            modal_pic: state.modal_pic
    }
  }
  
  function mapDispatchToProps(dispatch){
      return{
          actions : bindActionCreators({
            getImages:getImages,
            clickImage:clickImage,
            closeImage:closeImage
            },dispatch)
      }
  }
  
App = connect(mapStateToProps,mapDispatchToProps)(App);

export default App;
