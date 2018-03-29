import React from 'react';
import CommentListItem from './CommentListItem';
import { Card } from 'semantic-ui-react'


const CommentList = (props) => {
    if (props.comments.length === 0) {
        return <div className="ui one cards">
            <Card>
                <Card.Content>
                    <span>There are no comments</span>
                </Card.Content>
            </Card>
        </div>
    } else {
        return (
            <div className="ui one cards">
                {props.comments.map((comment) => <CommentListItem oneComment={comment} key={comment.id} />)}
            </div>
        )
    }
}

export default CommentList;