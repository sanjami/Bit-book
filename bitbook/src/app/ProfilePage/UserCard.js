import React from 'react'
import { Image, Header, Button } from 'semantic-ui-react'

const UserCard = (props) => {

    return (
        <div id ='userCard'>
            <Image src={props.user.avatarUrl}size='medium' circular centered />
            <Header size='large'>{props.user.name} </Header>
            <Button onClick={props.handleClick} content='Edit profile'/>
            <p>
                {props.user.about}
             </p>

        </div>
    )
}
export default UserCard;