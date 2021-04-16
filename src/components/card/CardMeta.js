import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const CardMeta = ({ linkTo, name, image, description }) => {

    return (
        <Link to={linkTo}>
            <Card
                key={name}
                hoverable
                style={{marginLeft: 7, marginBottom: 5 }}
                cover={<img alt={name} src={image} />}
            >
                <Card.Meta title={name} description={description} />
            </Card>
        </Link>
    )
}

export default CardMeta
