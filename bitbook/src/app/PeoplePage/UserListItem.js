import React from 'react';
import { Link } from 'react-router-dom'

const UserListItem = (props) => {

    const cutDate = () => {
        const dateUser = new Date(props.oneUser.upDate);
        return `${dateUser.getHours()}:${dateUser.getMinutes()}`;
    }



    return (
        <Link to={`/profile/${props.oneUser.id}`}>
        <li className = 'list-users'>
            <div className="item user-picture user_data">
                <img className="ui avatar image" src={props.oneUser.avatarUrl} alt={props.oneUser.name} />
            <div className="content user-description">
                <p className="header">{props.oneUser.name}</p>
                <p>{props.oneUser.shortAbout}</p>
                <span>Last post <br/> at {cutDate()}</span>
            </div>
            </div>
        </li>
        </Link>
    )
}

export default UserListItem;