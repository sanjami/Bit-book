import React, { Component } from 'react';
import { Card, Feed, Image, Container, Grid } from 'semantic-ui-react';
import { dataServices } from '../../service/dataService';


class CommentListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userAvatar: ''

    }
  }

  componentDidMount() {
    dataServices.getUser(this.props.oneComment.authorId)
      .then((myUser) => {
        console.log(myUser)
        this.setState({
          userAvatar: myUser.avatarUrl
        })
      })
  }


  render() {
    return(
      <Grid columns={1} divided>
       <Grid.Row>
      <Grid.Column>
    <Feed>
      <Feed.Event>
        <Feed.Label as='Image' image={this.state.userAvatar} size='mini' />
        <Feed.Summary>
        <span>{this.props.oneComment.authorName}</span>
          </Feed.Summary>
        <Feed.Content>
         
          <Feed.Extra text>
          {this.props.oneComment.body}
      </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    </Feed>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    )
  }
}

export default CommentListItem;