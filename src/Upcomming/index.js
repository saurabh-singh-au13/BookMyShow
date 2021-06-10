import React from 'react'
import {Card} from 'react-bootstrap'
import {CardGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'




function Cards() {
    return (
        <>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="./Images/img1.jpeg" alt="pic"/>
                <Card.Body>
                <Card.Title>No Time To Die </Card.Title>
                <Card.Text>
                    This is a wid
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>K.G.F. Chp 2</Card.Title>
                <Card.Text>
                    This card has support
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>London has fallen</Card.Title>
                <Card.Text>
                    This is a wider 
                
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        <li > <Link to={'/home'} className="nav_link" style={{ color: "red", fontSize: "large" }}> Back To Home   </Link></li>

            
        </>
    )
}

export default Cards
