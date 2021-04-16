import React from 'react'
import { Row, Col } from 'antd'
import CardMeta from '../card/CardMeta'

const ListCard = (props) => {

    const { characters } = props

    return (
        <Row>
            {characters.map((character, index) => (
                <Col
                    xs={24} sm={24} md={12} lg={6} xl={6}
                    key={index}>
                    <CardMeta
                        linkTo={`/character/${character.id}`}
                        name={character.name}
                        image={character.image}
                        description={`${character.species} - ${character.status}`}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default ListCard
