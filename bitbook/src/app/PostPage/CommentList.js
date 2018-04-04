import React from 'react';
import CommentListItem from './CommentListItem';
import { Card } from 'semantic-ui-react'


const CommentList = (props) => {
    if (props.comments.length === 0) {
        return <Card>
                <Card.Content>
                    <span>There are no comments</span>
                </Card.Content>
                 </Card>
       
    } else {
        return (
            // <div className="ui one cards">
            <React.Fragment>
                {props.comments.map((comment) => <CommentListItem oneComment={comment} key={comment.id} />)}
            </React.Fragment>
           
        )
    }
}

export default CommentList;