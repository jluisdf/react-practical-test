import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Spin, Empty, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersAction, resetCharactersAction } from '../redux/charsDuck.js'
import ListCard from '../components/list/ListCard'
import FindCharacters from '../components/character/FindCharacters'
import { PlusOutlined } from '@ant-design/icons'

const CharactersList = (props) => {

    const dispatch = useDispatch();
    const charactersProps = useSelector(store => store.characters.array);
    const loading = useSelector(store => store.characters.fetching);
    const [ characters, setCharacters ] = useState([])

    useEffect(() => {
        dispatch(getCharactersAction())
    }, []);

    useEffect(() => {
        setCharacters(charactersProps)
    }, [charactersProps]);

    const searchCharacter = value => {
        if(value){
            let newCharacters = charactersProps.filter(character => character.name.toLowerCase().includes(value.toLowerCase()))
            setCharacters(newCharacters)
        }else{
            setCharacters(charactersProps)
        }
    }

    return (
        <Card
            bordered={false}
            className="w-100 table-responsive"
            type="inner"
            title={<h2>Rick and Morty</h2>}
            extra={
                <Link to={'/new-character'}>
                    <PlusOutlined /> Agregar
                </Link>
            }
        >
            <Spin
                spinning={loading}
                tip="Cargando..."
            >
                <FindCharacters searchCharacter={searchCharacter} />
                {(characters && characters.length > 0) ?
                    <ListCard
                        characters={characters}
                    />
                :
                    <Empty className="p-4" />
                }
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => dispatch(resetCharactersAction())}
                >
                    Reset
                </Button>
            </Spin>
        </Card>
    )
}

export default CharactersList
