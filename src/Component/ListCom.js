import React from 'react';
import './listCom.css';
import '@fortawesome/fontawesome-free/css/all.css';

const ListCom = (props) => {
    return (
        <div className='todo_style'>
            <div className='inputs'>
                <input type="checkbox" />
                <i className="fas fa-trash" onClick={() => {
                    props.onSelect(props.id);
                }} />
            </div>
            <li>
                {props.text}
            </li>
        </div>
    );
}

export default ListCom;
