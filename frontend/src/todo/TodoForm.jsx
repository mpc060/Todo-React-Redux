import React from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' 
                   className='form-control' 
                   placeholder='Adicione uma tarefa' 
                   onChange={props.changeDescription} 
                   onKeyUp={keyHandler} 
                   value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
            <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            <IconButton btnStyle='info' icon='search' onClick={props.handleSearch}/>
            <IconButton btnStyle='default' icon='close' onClick={props.handleClear}/>
        </Grid>
    </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)