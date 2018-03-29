import React from 'react';
import { Card, Feed } from 'semantic-ui-react'

const CommentListItem = (props) => {
  return <Card>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
            <span>{props.oneComment.authorName}</span>
          </Feed.Content>
          <Feed.Content>
            <Feed.Summary>
              {props.oneComment.body}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
}

export default CommentListItem;