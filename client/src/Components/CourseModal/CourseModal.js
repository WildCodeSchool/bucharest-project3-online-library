import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './CourseModal.css';

class CourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      category: ["a","b","c"],
      title:'',
      description:'',
      keywords:[],
      link:'',
      checked: false,
      selectValue: 'yolo',
      newCategorySetter: 'none',
      newCategory: '',
    }
  };

componentDidMount() {
  fetch('https://rocky-refuge-51400.herokuapp.com/auth/categories/',
    {
      method : 'GET'
    })
    .then(res => {
      if(res.ok)
        return res.json()
      })
        .then(res =>
          {
            this.setState({
            category: res.map(item  => {
              let myObj = {}
              myObj.categoryId = item.categoryId
              myObj.category_name = item.category_name
              return myObj
                      })
          })
          // console.log('res from line 39, not 40: ' + res)
        },
          )
        // .then(console.log(this.state.category))
        .catch(new Error('bad fetch boi'))
};

handleCheckbox = (event) =>{
  // console.log(event.target.checked)
  this.setState({checked: event.target.checked})
};

handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

showDropdown = () => {
  return this.state.category.map((item, i) => {
  return (<option key={i} value={item.categoryId} name="category">{item.category_name}</option>)
  })
}

handleNewCategory = (e) => {
  this.setState({
    selectValue: e.target.value
  })
  if(e.target.value == 'addNewCategory') {
    // console.log(`you are within the handleNewCategory function now : target name is ${e.target.value}`)
    this.setState({
      newCategorySetter : 'inline-block',
      newCategory : e.target.value
    })
  }
  else {
    // console.log(`you are within the handleNewCategory function now : target name is ${e.target.value}`)
    this.setState({
        newCategorySetter : 'none',
        newCategory : e.target.value
    })
  }
}

handleInput = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

saveAll=()=>{
  let data = {
    title: this.state.title,
    description: this.state.description,
    // keywords: keyword,
    link: this.state.link,
    important: this.state.checked ? 1 : 0,
    CategoryCategoryId: this.state.newCategory
  }

  fetch('https://rocky-refuge-51400.herokuapp.com/auth/courses',
    {
      method: 'POST',
      headers: new Headers({
        'Content-type' : 'application/json'
      }),
      body: JSON.stringify(data)
    })
    .then(res => {
      console.log(JSON.stringify(data))
      if (res.ok)
        return res.json()
      else
        alert('Something went wrong, please try again!');
        this.handleClose()
    }
  )
    // console.log("FETCH COMPLETED, KINDA")
    this.handleClose()
}

render(){
  // console.log(this.state)
  // console.log(`${this.state.newCategorySetter} after the setState`)
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
                name="title"
                margin="normal"
                variant="filled"
                onChange={this.handleInput}
                />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Descriere curs"
                type='text'
                className="title"
                name="description"
                margin="normal"
                variant="filled"
                onChange={this.handleInput}
                />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Cuvinte cheie"
                type='text'
                className="title"
                name="keywords"
                margin="normal"
                variant="filled"
                onChange={this.handleInput}
                />
            </div>

            <div className="row">
              <TextField
                required
                id="filled-required"
                label="Link curs"
                type='link'
                className="title"
                name="link"
                margin="normal"
                variant="filled"
                onChange={this.handleInput}
                />
            </div>

            <div className="row">
              <label htmlFor="category">--Selecteaza categoria--</label>
                <select className='dropdown' id="category"
                        style={{display:'inline-block',height:'40px', width:'85%'}}
                        value={this.state.selectValue}
                        onChange={this.handleNewCategory}
                        >
                {this.showDropdown()}
                <option value="addNewCategory"
                        name='newCategory'
                        >Categorie noua</option>
              </select>
              <div className="newCategoryByAdminDiv" style={{display: this.state.newCategorySetter, width:'50%'}}>
                <input type='text'
                      id='NewCategoryByAdmin'
                      name='newCategory'
                      placeholder='Neua categoria'
                      style={{display:this.state.newCategorySetter, width:'100%'}}
                      onChange={this.handleInput}
                      />
              </div>
            </div>

            <div className="checkImp">
              <label>
                <input onChange={this.handleCheckbox} type="checkbox" name="remember" /> Important
                </label>
            </div>

            <button onClick={this.saveAll} className='btnPost' type="submit">Posteaza</button>
          </div>

        </Fade>
      </Modal>

    </div >
  );
}}

export default CourseModal;