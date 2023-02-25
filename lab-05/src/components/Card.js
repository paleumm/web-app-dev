import React, { useState } from 'react'
import './Card.css'
import Button from './Button'

const Card = (props) => {
    let [numVote, SetNumVote] = useState(0)

    let vote = () => {
        if (numVote + 1 > 10) {
            alert('Cannot Vote more')
        } else {
            SetNumVote(numVote + 1)
        }
    }

    let unvote = () => {
        if (numVote - 1 < 0) {
            alert('Cannot Unvote')
        } else {
            SetNumVote(numVote - 1)
        }
    }

    let displayVote = () => {
        if (numVote === 10) {
            return 'MAX'
        } else if (numVote === 0) {
            return 'MIN'
        } else {
            return numVote
        }
    }

    return (
        <div className='card'>
            <div className='card-container'>
                <div className="food">
                    <div className="food-type">{props.food.type}</div>
                    <div className="food-name">{props.food.name}</div>
                    <div className="food-info">{props.food.info}</div>
                </div>

                <div className="food-image">
                    <img src={props.food.img} alt=""></img>
                </div>
            </div>
            <div className='button-container'>
                <Button text="Click to Vote" callBack={vote} />
                <div className='vote-display'>{displayVote()}</div>
                <Button text="Click to Unvote" callBack={unvote} />
            </div>
        </div>
    )
}

export default Card