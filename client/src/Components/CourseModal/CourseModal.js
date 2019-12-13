import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




class CourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      category: [1, 2, 3, 4],
      title:'',
      description:'',
      keywords:[],
      link:'',
      checked: true
    }
  }

saveTitle = (event)=>{
  console.log(event.target.value)
  this.setState({title: event.target.value})
}

saveDescriprion = (event)=>{
  console.log(event.target.value)
  this.setState({description: event.target.value})
}

saveKeywords= (event)=>{
  console.log(event.target.value)
  let key=event.target.value.split(',')
  this.setState({keywords: key})
  console.log(key)
}

saveLink = (event)=>{
  console.log(event.target.value)
  this.setState({link: event.target.value})
}

handleCheckbox = (event) =>{
  console.log(event.target.checked)
  this.setState({checked: event.target.checked})
}


handleOpen = () => {
  this.setState({open: true});
}

handleClose = () => {
  this.setState({open: false});
};

showDropdown = () => {
  return this.state.category.map((item, i) => {
  return (<option key={i} value="item">{item}</option>)
  })
}

saveAll=()=>{

 let keyword=[]
 this.state.keywords.map((item,index)=>{
    if (item !== '') keyword.push(item)
  })
  console.log(keyword)
  let data = {
    title: this.state.title,
    description: this.state.description,
    keywords: keyword,
    link: this.state.link,
    important: this.state.checked
  }
  console.log(data)
}

render(){
  return (
    <div>
      <button onClick={this.handleOpen} type="button" className="btnAdd">+
        </button>
      
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modalAdd'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div className='paperAdd'>
            <div className='headerAdd'>
              <h1 id="transition-modal-title">Adauga curs</h1>
            </div>
            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Titlu curs"
                className="title"
                margin="normal"
                variant="filled"
                onChange={this.saveTitle}
              />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Descriere curs"
                type='text'
                className="title"
                margin="normal"
                variant="filled"
                onChange={this.saveDescriprion}
              />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Cuvinte cheie"
                type='text'
                className="title"
                margin="normal"
                variant="filled"
                onChange={this.saveKeywords}
              />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Link curs"
                type='link'
                className="title"
                margin="normal"
                variant="filled"
                onChange={this.saveLink}
              />
            </div>

            <div>
              <select className='dropdown' id="category" name="category">
                <option value="categorie">--Selecteaza categoria--</option>
                {this.showDropdown()}
              </select>
            </div>

            <div className="checkImp">
              <label>
                <input onChange={this.handleCheckbox} type="checkbox" name="remember" /> Important
                </label>
              <span class="checkmark"></span>
            </div>

            <button onClick={this.saveAll} className='btnPost' type="submit">Posteaza</button>
          </div>

        </Fade>
      </Modal>

    </div >
  );
}}

export default CourseModal;