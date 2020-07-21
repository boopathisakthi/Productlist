import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap'

import Img from 'gatsby-image'

const Post = ({ productname, path, price, fluid }) => {
    return (

        <Card>
            <Img className="card-Image-top"  fluid={fluid}></Img>
            <CardBody>
                <CardTitle>{productname}</CardTitle>
                <CardSubtitle>${price}</CardSubtitle>
            </CardBody>
       </Card>

    )
}

export default Post