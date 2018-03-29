import React from 'react'
import { Image, Header } from 'semantic-ui-react'



const UserCard = (props) => {

    return (
        <div id ='userCard'>
            <Image src={props.user.avatarUrl}size='medium' circular centered />
            <Header size='large'>{props.user.name}</Header>
            <p>
                {props.user.about}
             </p>

        </div>
    )
}
export default UserCard;