import React from 'react'
import { useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { insertCharacterAction } from '../redux/charsDuck.js'
import FormCharacter from '../components/character/FormCharacter'
import { PageHeader, Spin, Card, message } from 'antd'

const NewCharacter = (props) => {

    const history = useHistory()
    const dispatch = useDispatch();
    const loading = useSelector(store => store.characters.fetching)

    const onFinish = (values) => {
        dispatch(insertCharacterAction(values))
        setTimeout(() => {
            message.success('Personaje registrado!')
            history.push('/characters')
        }, 3000)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Spin
            spinning={loading}
            tip="Cargando..."
        >
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="Nuevo Personaje"
            />
            <Card bordered={false}>
                <FormCharacter
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    action="insert"
                />
            </Card>
        </Spin>
    )
}

export default NewCharacter
