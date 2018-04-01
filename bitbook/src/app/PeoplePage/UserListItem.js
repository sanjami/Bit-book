import React from 'react';
import { Link } from 'react-router-dom'
import { Segment, List, Image } from "semantic-ui-react";

const UserListItem = (props) => {

    const cutDate = () => {
        const dateUser = new Date(props.oneUser.upDate);
        return `${dateUser.getHours()}:${dateUser.getMinutes()}`;
    }



    return <Link to={`/profile/${props.oneUser.id}`}>
        <List divided verticalAlign="middle">
          <List.Item className="list-item">
            <Image src={props.oneUser.avatarUrl} alt={props.oneUser.name} avatar />
            <List.Content>
              <List.Header>{props.oneUser.name}</List.Header>
              <List.Description>
                {props.oneUser.shortAbout}
              </List.Description>
              <p>Last post at {cutDate()}</p>
            </List.Content>
          </List.Item>
        </List>
      </Link>
}

export default UserListItem;