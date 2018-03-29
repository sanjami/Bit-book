import React from 'react'
import { Icon, Label, Menu, Container } from 'semantic-ui-react'

const PostAndCommentsCount = (props) => (
    <Container id ='postAndCommentsCount'>
  <Menu compact id ='menu'>
    <Menu.Item  as='a'>
      <Icon name='mail' /> Posts
      <Label color='red' floating>{props.user.postsCount}</Label>
    </Menu.Item>
    </Menu>
    <Menu compact >
    <Menu.Item as='a'>
      <Icon name='users' /> Comments
      <Label color='teal' floating>{props.user.commentsCount}</Label>
    </Menu.Item>
  </Menu>
  </Container>
)

export default PostAndCommentsCount 