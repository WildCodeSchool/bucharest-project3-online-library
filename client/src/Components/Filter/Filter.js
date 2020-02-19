import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
            filterDisplay :'block'
        }
    }

    componentDidMount() {
        if(this.state.flag == false) {
            this.setState({
                flag: true,
                all: true
            })
            console.log('done did it')
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
        // this.filter()
    }

    handleChangeNonCompleted = (e) => {
        this.setState({
            filterObj: {
                ...this.state.filterObj,
                completed : false,
            },
            completedDisplay: false,
            nonCompletedDisplay: true,
            all: false
        })
    }

    handleChangeCheckboxAll = () => {
        this.setState({
            all: true
        })
    }

    handleChange = (e) => {
        this.setState({
            filterObj: {
                ...this.state.filterObj,
                [e.target.name]: e.target.value
            }
        })
    }
    handleChangeCheckbox = (e) => {
        this.setState({
            filterObj: {
                ...this.state.filterObj,
                [e.target.name]: !this.state.filterObj[e.target.name]
            }
        })
        this.filter()
    }

    handleChangeImportant = (e) => {
        this.setState({filterObj: {
            ...this.state.filterObj,
            important: !this.state.filterObj.important}})
        this.filter()
    }

    // handleChangeCompleted = (e) => {
    //     this.setState({filterObj: {
    //         ...this.state.filterObj,
    //         completed: !this.state.completed}})
    //     this.filter()
    // }

    // handleChangeNonCompleted = (e) => {
    //     this.setState({filterObj: {
    //         ...this.state.filterObj,
    //         nonCompleted: !this.state.nonCompleted}})
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
        console.log(obj)
        this.props.filterObj(obj)
    }

    render(){
        console.log(this.state)
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
                        <TextField id="outlined-basic" label="Titlu" value={this.state.title} className="filterInput filterInputCenter" variant="outlined" onChange={this.handleChange}/>
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

                        {/* <div className="filterBottom">
                            <div className="filterCheckboxesContainer"> */}
                                {/* <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.important} 
                                            onChange={this.handleChangeCheckbox} 
                                            value="Important" 
                                            name="important"
                                            color="primary" />} 
                                            label={(<span id="imp">Important</span>)}
                                        />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                    <label htmlFor="completed">
                                        Completed
                                    </label>
                                        <Checkbox 
                                            checked={this.state.completedDisplay} 
                                            onChange={this.handleChangeCompleted} 
                                            value="Completed" 
                                            color="secondary" />} 
                                            label={(<span id="comp">Completat</span>)}
                                        />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox  
                                            checked={this.state.nonCompleted} 
                                            name="completed"
                                            color="primary" 
                                            label="Completat" 
                                        />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.nonCompletedDisplay} 
                                            onChange={this.handleChangeNonCompleted} 
                                            value="Non-Completed" 
                                            name="nonCompleted"
                                            color="primary" />} 
                                            label={(<span id="necomp">Necompletat</span>)} 
                                    />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.all} 
                                            onChange={this.handleChangeCheckboxAll} 
                                            value="All" 
                                            name="all"
                                            color="primary" />} 
                                            label="Toate" 
                                    /> */}

                                        <FormControl component="fieldset" className="checkboxInput">
                                            <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChangeCompleted} row>
                                                <FormControlLabel value="completed" control={<Radio />} label="Completed" />
                                                <FormControlLabel value="nonCompleted" control={<Radio />} label="Non-Completed" />
                                                <FormControlLabel value="all" control={<Radio />} label="Toate" />
                                            </RadioGroup>
                                        </FormControl>
                            {/* </div>
                        </div> */}
                    </div>
                </form>

            </div>
            </MuiThemeProvider>
        )
    }
}

export default Filter;