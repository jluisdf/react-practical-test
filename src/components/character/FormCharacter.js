import React from 'react'
import { Col, Row, Form, Input, Button } from 'antd'

const FormCharacter = (props) => {

    const { onFinish, onFinishFailed, initialValues, action } = props
    const [ form ] = Form.useForm()

    return (
        <Form
            form={form}
            name="edit-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="container-fluid"
            initialValues={initialValues}
        >
            <Row justify="start" align="middle" gutter={16}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Ingresa el nombre' }]}
                    >
                        <Input
                            allowClear
                            placeholder="Nombre"
                            maxLength="90"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        name="gender"
                        rules={[{ required: true, message: 'Ingresa el género' }]}
                    >
                        <Input
                            allowClear
                            placeholder="Género"
                            maxLength="10"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        name="species"
                        rules={[{ required: true,  message: 'Ingresa la especie' }]}
                    >
                        <Input
                            allowClear
                            placeholder="Especie"
                            maxLength="10"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        name="status"
                        rules={[{ required: true, message: 'Ingresa el esatus' }]}
                    >
                        <Input
                            allowClear
                            placeholder="Estatus"
                            maxLength="10"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                           {action === "insert" ? 'Guardar' : 'Actualizar' }
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
       </Form>
    )
}

export default FormCharacter
