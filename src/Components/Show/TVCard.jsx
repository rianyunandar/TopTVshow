import React from 'react'
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"
const TVCard = ({show}) => {
    return (
        <div>
            <Link to={`/show/${show.id}`}>
            <Card className="my-3 p-3 rounded">
            <Card.Img variant="top" src={show.image.medium} alt={show.name}/>
            <Card.Body>
                <Card.Title>{show.name}</Card.Title>
                <Card.Text>
                {show.network? show.network.name : ""}  <span> - </span>
                {show.type} 
                <br/>
                <i className="fas fa-star"></i> : 
                {show.rating.average}
                </Card.Text>
                
            </Card.Body>
            </Card>
                        
            
            
            
            </Link>
        </div>
    )
}

export default TVCard
