import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';


import './Filter.css'

const theme = createMuiTheme({
    palette: {
         primary: {
             main:'#FA5457'
         },
         secondary: {
             main:'#A1BE95'
       }
    }
     });

const categories = ['Materiale Traininguri', 'Info admistrative', 'Materiale coordonatori', 'Jocuri', 'Ateliere', 'Suporturi de curs', 'Psihologie']

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterObj: {
                title: '',
                category: '',
                is_important : true,
                completed : null,
            },
            all: false,
            flag:false,
            filterDisplay :'block',
            search: ''
        }
    }

    componentDidMount() {
        if(this.state.flag == false) {
            this.setState({
                flag: true,
                all: true
            })
        }
    }

    handleChangeCompleted= (e) => {
        console.log(e.target.value)
        if(e.target.value == "completed") {
            this.setState({
                filterObj: {
                    ...this.state.filterObj,
                    completed : true,
                },
                all: false,
            })
            this.filter({
                filterObj: {
                    ...this.state.filterObj,
                    completed : true,
                },
                all: false,
            })
        } else if (e.target.value == "nonCompleted") {
            this.setState({
                filterObj: {
                    ...this.state.filterObj,
                    completed : false,
                },
                all: false,
            })
            this.filter({
                filterObj: {
                    ...this.state.filterObj,
                    completed : false,
                },
                all: false,
            })
        } else if (e.target.value == "all") {
            this.setState({
                filterObj: {
                    ...this.state.filterObj,
                    completed : null,
                },
                all: true,
            })
            this.filter({
                filterObj: {
                    ...this.state.filterObj,
                    completed : null,
                },
                all: true,
            })
        }
    }

    handleChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
        this.search(e.target.value)
    }

    // handleChangeImportant = (e) => {
    //     this.setState({filterObj: {
    //         ...this.state.filterObj,
    //         important: !this.state.filterObj.important}})
    //     this.filter()
    // }

    showFilter = () => {
        this.state.filterDisplay === 'none' 
        ? this.setState({filterDisplay : 'block'}) 
        : this.setState({filterDisplay : 'none'})
    }

    FilterArrow = () => {
        return this.state.filterDisplay === 'none'
        ? <span>&#9654;</span>
        :
        <span>&#9660;</span>
    }

    filter(obj) {
        this.props.filterObj(obj)
    }

    search(str) {
        this.props.searchStr(str)
    }

    render(){
        console.log(this.state.search)
        return(
            <MuiThemeProvider theme={theme}>
            <div className="filterMain">
                <button onClick={this.showFilter} className="filterBtn">
                    <this.FilterArrow />Filtru
                </button>

                <form action="">
                    <div className="row filterRow" style={{display: this.state.filterDisplay}}>
                        <div className="filterTop">
                        {/* <TextField id="outlined-basic" label="Cuvinte cheie" value={this.state.keyword} className="filterInput" variant="outlined" onChange={this.handleChange}/> */}
                        <TextField id="outlined-basic" label="Titlu" value={this.state.search} className="filterInput filterInputCenter" variant="outlined" onChange={this.handleChangeSearch}/>
                        <FormControl className="filterInput">
                            <InputLabel id="categoryLabel">Categorie</InputLabel>
                            <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={this.state.category}
                                    onClick={this.handleChange}
                                    autoWidth
                                    name="category"
                                    >
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    {categories.map((item, index) => {
                                        return <MenuItem 
                                                    value={item} key={index}
                                                    >{item}</MenuItem>
                                    })}
                            </Select>
                        </FormControl>
                        </div>
                                        <FormControl component="fieldset" className="checkboxInput">
                                            <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChangeCompleted} row>
                                                <FormControlLabel value="completed" control={<Radio />} label={(<span id="comp">Completat</span>)} />
                                                <FormControlLabel value="nonCompleted" control={<Radio />} label={(<span id="necomp">Necompletat</span>)} />
                                                <FormControlLabel value="all" control={<Radio />} label="Toate" />
                                            </RadioGroup>
                                        </FormControl>
                    </div>
                </form>

            </div>
            </MuiThemeProvider>
        )
    }
}

export default Filter;