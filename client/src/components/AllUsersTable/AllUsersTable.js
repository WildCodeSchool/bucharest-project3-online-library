import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Select from './Select'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    text: 'Product ID',
    name: 'id',
    value: 'Product ID',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Product Name',
    name: 'name',
    value: 'Product Name',
    filter: textFilter()
    // sort: true
  },
  {
    dataField: 'price',
    text: 'Product Price',
    name: 'price',
    value: 'Product Price',
    // filter: numberFilter(),
    sort: true
  },
  {
    dataField: 'link',
    text: 'See Profile',
    name: 'link',
    value: 'See Profile'
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
    console.log(addFromSelect)
    this.setState({
      UpdatedColumns: this.state.columns
    })
  }

  render(){
    console.log('Columns to display : ' + this.state.UpdatedColumns)
    return (
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

    );
  }
}

export default AllUsersTable;
