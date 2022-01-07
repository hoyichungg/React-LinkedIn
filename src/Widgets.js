import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__artixleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__artixleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is back", 'Top news - 9099 readers')}
            {newsArticle("Coronavirus: UK updates", 'Top news - 879 readers')}
            {newsArticle("Tesla hits new highs", 'Car & auto - 300')}
            {newsArticle("Bitcoin Breaks $22k", 'Crypto - 8000 readers')}
            {newsArticle("Is Redus too good?", 'Code - 123 readers')}
            {newsArticle("Please hire me", 'Best hope  - 3333 readers')}
        </div>
    )
}

export default Widgets
