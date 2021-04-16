import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Characters from './pages/Characters'
import Character from './pages/Character'
import NewCharacter from './pages/NewCharacter'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Wellcome} />
            <Route path="/characters" component={Characters} />
            <Route path="/character/:id" component={Character} />
            <Route path="/new-character" component={NewCharacter} />
        </Switch>
    )
}
