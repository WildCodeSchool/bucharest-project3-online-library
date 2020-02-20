import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Select from './Select'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios'
import Navbar from '../NavbarComponent/Navbar'
import Footer from '../Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Redirect } from "react-router";
import { connect } from 'react-redux';

import './AllUsersTable.css';

class AllUsersTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [{
        id: 1,
        prenume: 'John ',
        nume: 'Doe',
        judetul: 'Bucuresti',
        centrul: 'Bucuresti',
        level: <button>Salut</button>
      },{
        id: 3,
        prenume: 'Eloise',
        nume: 'Peck',
        judetul: 'Sinaia',
        centrul: 'Sinaia'
      },{
        id: 4,
        prenume: 'Mark',
        nume: 'Storey',
        judetul: 'Brasov',
        centrul: 'Brasov'
      },{
        id: 5,
        prenume: 'Haya',
        nume: 'Hamilton',
        judetul: 'Sibiu',
        centrul: 'Sibiu'
      },{
        id: 6,
        prenume: 'Siyana',
        nume: 'Cantu',
        judetul: 'Cluj',
        centrul: 'Cluj'
      },{
        id: 7,
        prenume: 'Lana',
        nume: 'Duncan',
        judetul: 'Bucuresti',
        centrul: 'Bucuresti'
      },
    ],
      columns: this.headerArray,
      UpdatedColumns: this.headerArray,
      message:''
    }
}

  headerArray = [{
    dataField: 'id',
    text: 'ID',
    name: 'id',
    value: 'ID',
    sort: true
  },
  {
    dataField: 'prenume',
    text: 'Prenume',
    name: 'Prenume',
    value: 'Prenume',
    // filter: textFilter()
  },
  {
    dataField: 'nume',
    text: 'Nume',
    name: 'Nume',
    value: 'Nume',
    sort: true
  },
  {
    dataField: 'judetul',
    text: 'Judetul',
    name: 'Judetul',
    value: 'Judetul'
  },
  {
    dataField: 'centrul',
    text: 'Centrul',
    name: 'Centrul',
    value: 'Centrul'
  },

  {
    dataField: 'level',
    text: 'Actions',
    name: 'Level',
    value: 'Level'
  }
]

generateButton = (user) => (
  <button className={user.access_level?"admin-button":"user-button"} onClick={()=>this.handleButtonClick(user)}>
    {user.access_level?"Admin":"User"}
  </button>

)

handleButtonClick(user){
  // fetch (access/!user.access_level/user.id)
  fetch('https://rocky-refuge-51400.herokuapp.com/auth/access/'+!user.access_level + '/' + user.id,
            {
                method: 'PUT',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(res =>{
              let prod = this.state.products;
              // prod[prod.findIndex(el => el.id === user.id)].level = !user.access_level;
              prod = this.state.products.map(elem => {
                let id = elem.id
                let prenume= elem.prenume
                let nume= elem.nume
                let judetul=elem.judetul
                let centrul=elem.centrul
                let access_level= elem.id==user.id?!elem.access_level:elem.access_level
                let level = this.generateButton({id,access_level})
                let obj = {id,prenume,nume,judetul,centrul,access_level,level}
                return obj;
              })
              console.log(prod)
              this.setState({
                message: 'done!!!',
                products: prod
              })

              

            })
            .catch(err => this.setState({
                flash: err.message
            }))
}

  componentDidMount(){
    axios.get('https://rocky-refuge-51400.herokuapp.com/auth/users')
      .then(res => {
        let userArray = [];
        res.data.forEach(user => {
          let userObject = {
            id: user.id,
            prenume: user.lastname,
            nume: user.firstname,
            judetul:user.volunteering_county,
            centrul:user.volunteering_center,
            access_level: user.access_level,
            level:this.generateButton(user)
          }
          userArray.push(userObject)

        })
        // let userObject = {
        //   id: res.data.id,
        //   prenume: res.data.lastname,
        //   nume: res.data.firstname,
        //   judetul:res.data.volunteering_county,
        //   centrul:res.data.volunteering_center
        // }
        this.setState({
          products: userArray
        });
      });
  }

  updatedTableFromSelect = (selectionFromSelect) => {
      let newColumns = []
      let columnNames = this.state.columns.map((e) => {
        return e.value
      })

      let position = selectionFromSelect.map(e => {
        return columnNames.indexOf(e)
      })

      newColumns = position.map(item => {
        return this.headerArray[item]
      })

    this.setState({
      UpdatedColumns: newColumns
    })
  }

  addToTableFromSelect = (addFromSelect) => {
    this.setState({
      UpdatedColumns: this.state.columns
    })
  }

  render(){
    console.log(this.state.products)
    console.log('local storage from all users table : ' + localStorage.getItem('userToken'))
    if(!this.props.auth.token && localStorage.getItem('userToken') !== null) {
      this.props.auth.token = localStorage.getItem('userToken')
          this.props.auth.email = localStorage.getItem('userEmail')
          this.props.auth.password = localStorage.getItem('userPassword')
          this.props.auth.firstname = localStorage.getItem('userName')
          this.props.auth.lastname = localStorage.getItem('userLastname')
          this.props.auth.volunteering_county = localStorage.getItem('userCounty')
          this.props.auth.volunteering_center = localStorage.getItem('userCenter')
          this.props.auth.contract_number = localStorage.getItem('userContractNumber')
          this.props.auth.date_joined = localStorage.getItem('userDateJoined')
          this.props.auth.phonenumber = localStorage.getItem('userPhoneNumber')
          this.props.auth.token = localStorage.getItem('userToken')
          this.props.auth.id = localStorage.getItem('userId')
          this.props.auth.access_level = (localStorage.getItem('userAccessLevel') === "true")
        }
    if(!this.props.auth.token) this.props.history.push('/')
    return (
    <div className="allUsersMain">
        <Navbar admin={this.props.auth.access_level} />
        <h1>Utilizatori</h1>
      <div className="tableSelectContainer">
            <Select data={this.state.columns}
                    filteredFromSelect={this.updatedTableFromSelect}
                    addColumn={this.addToTableFromSelect}
            />
            <div className="container" style={{ marginTop: 50, textAlign:'center', fontSize: '1.3rem'}}>
                    <BootstrapTable 
                    striped
                    hover
                    keyField='id' 
                    data={ this.state.products } 
                    columns={ this.state.UpdatedColumns }
                    filter={ filterFactory() } 
                    
                    />
            </div>
      </div>
      <Footer />
    </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps) (AllUsersTable));