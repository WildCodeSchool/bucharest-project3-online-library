import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';

import './filter.css'

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
            nonCompleted : false
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

    render(){
        console.log("keyword : " + this.state.keyword)
        console.log("category : " + this.state.category)
        return(
            <div className="filterMain">
                <form action="">
                    <div className="row">
                        <div className="filterTop">
                        <TextField id="outlined-basic" label="Keywords" value={this.state.keyword} className="filterInput" variant="outlined" onChange={this.handleChangeKeyword}/>
                        <TextField id="outlined-basic" label="Title" value={this.state.title} className="filterInput filterInputCenter" variant="outlined" onChange={this.handleChangeTitle}/>
                        <FormControl className="filterInput">
                            <InputLabel id="categoryLabel">Category</InputLabel>
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
                        <FormControlLabel
                            className="checkboxInput"
                            control={
                                <Checkbox checked={this.state.important} onChange={this.handleChangeImportant} value="Important" color="primary" />} label="Important" 
                        />
                        <FormControlLabel
                                                    className="checkboxInput"

                            control={
                                <Checkbox checked={this.state.completed} onChange={this.handleChangeCompleted} value="Completed" color="primary" />} label="Completed" 
                        />
                        <FormControlLabel
                                                    className="checkboxInput"

                            control={
                        <Checkbox checked={this.state.nonCompleted} onChange={this.handleChangeNonCompleted} value="Non-Completed" color="primary" />} label="Non-Completed" 
                        />
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Filter;
