import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const ListItem = () => {
    const [line, setLine] = useState(false);

    const cut = () =>{
        setLine(true);
    }
    return (
        <div className='todo_style'>
            <span onClick={cut}>
                <DeleteIcon className='delete' />
            </span>
        </div>
    )
}

export default ListItem
