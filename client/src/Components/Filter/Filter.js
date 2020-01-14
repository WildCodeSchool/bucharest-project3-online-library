import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';

import './Filter.css'

const categories = ['Materiale Traininguri', 'Info admistrative', 'Materiale coordonatori', 'Jocuri', 'Ateliere', 'Suporturi de curs', 'Psihologie']

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword: '',
            title: '',
            category: '',
            important : false,
            completed : false,
            nonCompleted : false,

            filterDisplay :'none'
        }
    }


    handleChangeKeyword = (e) => {
        this.setState({ keyword: e.target.value })
    }

    handleChangeTitle = (e) => {
        this.setState({ title : e.target.value })
    }

    handleChangeCategory = (e) => {
        this.setState({ category : e.target.value})
    }

    handleChangeImportant = (e) => {
        this.setState({ important : !this.state.important})
    }

    handleChangeCompleted = (e) => {
        this.setState({ completed : !this.state.completed})
    }

    handleChangeNonCompleted = (e) => {
        this.setState({ nonCompleted : !this.state.nonCompleted})
    }

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

    render(){
        return(
            <div className="filterMain">
                <button onClick={this.showFilter} className="filterBtn">
                    <this.FilterArrow /> Filtru
                </button>

                <form action="">
                    <div className="row filterRow" style={{display: this.state.filterDisplay}}>
                        <div className="filterTop">
                        <TextField id="outlined-basic" label="Cuvinte cheie" value={this.state.keyword} className="filterInput" variant="outlined" onChange={this.handleChangeKeyword}/>
                        <TextField id="outlined-basic" label="Titlu" value={this.state.title} className="filterInput filterInputCenter" variant="outlined" onChange={this.handleChangeTitle}/>
                        <FormControl className="filterInput">
                            <InputLabel id="categoryLabel">Categorie</InputLabel>
                            <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={this.state.category}
                                    onClick={this.handleChangeCategory}
                                    autoWidth
                                    >
                                    <MenuItem value="none">
                                        <em>None</em>
                                    </MenuItem>
                                    {categories.map((item, index) => {
                                        return <MenuItem 
                                                    value={item} key={index}
                                                    >{item}</MenuItem>
                                    })}
                                    <MenuItem value={'Maths'}>Maths</MenuItem>
                                    <MenuItem value={'History'}>History</MenuItem>
                                    <MenuItem value={'Economics'}>Economics</MenuItem>
                            </Select>
                        </FormControl>
                        </div>

                        <div className="filterBottom">
                            <div className="filterCheckboxesContainer">
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.important} 
                                            onChange={this.handleChangeImportant} 
                                            value="Important" 
                                            color="primary" />} 
                                            label="Important" 
                                        />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.completed} 
                                            onChange={this.handleChangeCompleted} 
                                            value="Completed" 
                                            color="primary" />} 
                                            label="Completat" 
                                        />
                                <FormControlLabel className="checkboxInput"
                                    control={
                                        <Checkbox 
                                            checked={this.state.nonCompleted} 
                                            onChange={this.handleChangeNonCompleted} 
                                            value="Non-Completed" 
                                            color="primary" />} 
                                            label="Necompletat" 
                                    />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Filter;