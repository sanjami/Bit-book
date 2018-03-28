import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const NewPostButton = (props) => {
    return (
        <Menu compact>
        
        <Dropdown onChange={props.openPost} text ='Post' options={ [
            { key: 'text', text: 'Text', value: 'text' },
            { key: 'image', text: 'Image', value: 'image' },
            { key: 'video', text: 'Video', value: 'video' },
          ]} floating button className='icon' />
          </Menu>
    )
}



export default NewPostButton;