import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

const NewPostButton = (props) => {
    return (
        <Menu compact className='btn' >
       
        <Dropdown onChange={props.openPost} text ='Post'  options={ [
            { key: 'text', text: 'Text', value: 'text' },
            { key: 'image', text: 'Image', value: 'image' },
            { key: 'video', text: 'Video', value: 'video' },
          ]} simple item />
      
          </Menu>
    )
}



export default NewPostButton;

