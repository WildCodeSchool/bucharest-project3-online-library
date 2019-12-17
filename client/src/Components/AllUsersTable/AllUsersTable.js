import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Select from './Select'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios'
import Navbar from '../NavbarComponent/Navbar'
import Footer from '../Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';

import './AllUsersTable.css';

class AllUsersTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      columns: this.headerArray,
      UpdatedColumns: this.headerArray,
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
    dataField: 'name',
    text: 'Prenume',
    name: 'Prenume',
    value: 'Prenume',
    // filter: textFilter()
  },
  {
    dataField: 'price',
    text: 'Nume',
    name: 'Nume',
    value: 'Nume',
    sort: true
  },
  {
    dataField: 'link',
    text: 'Judetul',
    name: 'Judetul',
    value: 'Judetul'
  },
  {
    dataField: 'link',
    text: 'Centrul',
    name: 'Centrul',
    value: 'Centrul'
  }
]

  componentDidMount(){
    axios.get('http://localhost:3000/results')
      .then(res => {
        this.setState({
          products: res.data,
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
    return (
    <div className="allUsersMain">
        <Navbar />
        <h1>All Users</h1>
      <div className="tableSelectContainer">
            <Select data={this.state.columns}
                    filteredFromSelect={this.updatedTableFromSelect}
                    addColumn={this.addToTableFromSelect}
            />
            <div className="container" style={{ marginTop: 50 }}>
                    <BootstrapTable 
                    striped
                    hover
                    keyField='id' 
                    data={ this.state.products } 
                    columns={ this.state.UpdatedColumns }
                    filter={ filterFactory() } />
            </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default AllUsersTable;