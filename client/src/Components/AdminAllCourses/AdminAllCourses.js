import React from 'react'

import Filter from '../filter/filter'
import CardComponent from '../CardComponent/CardComponent'
import './AdminAllCourses.css'

// ADMIN PROPS SENT BY APP.JS DETERMINE IF PAGE DISPLAY IS FOR ADMIN OR USER

class AdminAllCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latestCourses: [{
        headerColor: "#FA5457",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Comunicarea eficienta cu copiii',
        keywords:['Comunicarea', 'copiii'],
        link:'https://drive.google.com/file/d/1adl_NZgQsNm93mnW_BYG7N6PP20vwGYJ/view?usp=sharing',
        date:'18/01/2018'
    },
    {
        headerColor: "#75B1A9",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Cum creste un pui de om',
        keywords:['creste', 'om'],
        link:'https://drive.google.com/file/d/14KEsg9vbng5gIU8m0Imbg3dMV324syqm/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#75B1A9",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Cuvinte pentru adolescenti sau complexul homarului',
        keywords:['adolescenti', 'complexul homarului'],
        link:'https://drive.google.com/file/d/1qCwO1fx-IyMMOwyqySxQ2E51VKhoedXq/view?usp=sharing',
        date:'09/07/2018' 
    },
    {
        headerColor: "#75B1A9",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Communication and children',
        keywords:['Communication', 'children'],
        link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#75B1A9",
        chapterCard:'Carti/fise educative pe diverse teme',
        titleCard:'Ecologie',
        keywords:['Ecologie', 'children'],
        link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#75B1A9",
        chapterCard:'Carti de povesti terapeutice',
        titleCard:'Supa de pui pentru suflet toata carta',
        keywords:['Carta', 'terapeutice'],
        link:'https://drive.google.com/file/d/1_DxEnBn6aUPZRtfAACwnAbY6oOm0k535/view?usp=sharing',
        date:'02/03/2018' 
    }
    ]
        }
    }

    AddCards = () => {
        return this.props.admin ?
            <h2>&#9998;</h2> : null
    }
    NewCards = () => {
        return this.state.latestCourses.map((item, index) => {
            return <CardComponent 
                        headerColor={item.headerColor}
                        chapterCard={item.chapterCard} 
                        titleCard={item.titleCard}
                        keywords={item.keywords}
                        date={item.date}
                        admin={this.props.admin}
                        i={index}
                        toDelete={this.cardToDeleteFromBtn}
                        />
        })
    }

    cardToDeleteFromBtn = (index) => {
        let q = this.state.latestCourses
        q.splice(index, 1)
        console.log(q)
        this.setState({
            LastestCoursesUpdated: q
        })
    }

    render(){
        return(
            <div className='AdminAllCoursesMain'>
                <div className='AdminAllCoursesTitle'>
                    <h1>All Courses</h1>
                </div>
                <div className='AdminAllCoursesAddBtn'>
                    {this.AddCards()}
                </div>
                <div className='AdminAllCoursesFilter'>
                    <Filter />
                </div>
                <div className='AdminCourseCardContainer'>
                    {this.NewCards()}
                </div>
            </div>
        )
    }
}

export default AdminAllCourses