import React from 'react'
import { Col, Row, Input } from 'antd'

const FindCharacters = ({ searchCharacter }) => {

    return (
        <Row>
            <Col
                xs={24} sm={24} md={24} lg={{ span: 4, offset: 19 }} xl={{ span: 4, offset: 20 }}
            >
                <Input
                    placeholder="Buscar"
                    style={{marginBottom: '1rem', width: 200 }}
                    onChange={(e) => searchCharacter(e.target.value)}
                />
            </Col>
        </Row>
    )
}

export default FindCharacters
