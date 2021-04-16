import React, { useState, useEffect } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCharacterAction, updateCharacterAction } from '../redux/charsDuck.js'
import { Row, Col, Card, Image, PageHeader, Descriptions, Space, Popconfirm, message, Spin } from 'antd'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import FormCharacter from '../components/character/FormCharacter'

const Character = (props) => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const characters = useSelector(store => store.characters.array)
    const loading = useSelector(store => store.characters.fetching)
    const history = useHistory()
    const [ character, setCharacter ] = useState({})
    const [ edit, setEdit ] = useState(false)

    useEffect(() => {
        if(characters && characters.length > 0){
            let findCharacter = characters.filter(character => Number(character.id) === Number(id))
            setCharacter(findCharacter[0])
        }else{
            history.push('/characters')
        }
    });

    const confirm = (e) => {
        message.success('Personaje eliminado!');
        dispatch(removeCharacterAction(id))
        history.push('/characters')
    }

    const cancel = (e) => {
        console.log(e);
        // message.error('Click on No');
    }

    const onFinish = (values) => {
        dispatch(updateCharacterAction(id, values))
        setTimeout(() => {
            message.success('Personaje modificado!')
            history.push('/characters')
        }, 2000)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            {character &&
                <Spin
                    spinning={loading}
                    tip="Cargando..."
                >
                    <PageHeader
                        className="site-page-header"
                        onBack={() => history.goBack()}
                        title="Personajes"
                    />

                    <Row gutter={16}>
                        <Col
                            xs={24} sm={24} md={12} lg={6} xl={6}
                        >
                            <Card bordered={false}>
                                <Image src={character.image} />
                            </Card>
                        </Col>
                        <Col
                            xs={24} sm={24} md={12} lg={17} xl={17}
                        >
                            <Card
                                title={character.name}
                                bordered={false}
                                extra={[
                                    <Space key="space-001">
                                        <a
                                            href={void(0)}
                                            onClick={() => {setEdit(!edit)}}
                                        >
                                            <EditOutlined /> Editar
                                        </a>
                                        <Popconfirm
                                            title="Seguro de eliminar al personaje?"
                                            onConfirm={confirm}
                                            onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <a href="#"><DeleteOutlined /> Delete</a>
                                        </Popconfirm>
                                    </Space>
                                ]}
                            >
                                {!edit ?
                                    <Descriptions layout="vertical">
                                        <Descriptions.Item label="Genero">{character.gender}</Descriptions.Item>
                                        <Descriptions.Item label="Especie">{character.species}</Descriptions.Item>
                                        <Descriptions.Item label="Estatus">{character.status}</Descriptions.Item>
                                    </Descriptions>
                                :
                                    <FormCharacter
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        initialValues={character}
                                        action="update"
                                    />
                                }
                            </Card>
                        </Col>
                    </Row>
                </Spin>
            }
        </div>
    )
}

export default Character
