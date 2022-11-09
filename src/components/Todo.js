import {List, ListItem,  ListItemText, ListItemAvatar} from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import {db} from '../firebase'
import {doc, deleteDoc} from "firebase/firestore"
import './Todo.css'

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar/>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteForeverIcon fontSize='large'
                onClick={() => {deleteDoc(doc(db, 'todos', arr.id))}}
            />
        </List>
    )
}

export default Todo