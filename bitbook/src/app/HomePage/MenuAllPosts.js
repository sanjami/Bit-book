import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'

const MenuAllPosts = (props) => {

    return <div>
        <h4 className='showFeed'>Show on feed</h4>
        <Menu compact className='menuBtn'>
            <Dropdown  onChange={props.handleChange} options={[
                { key: 0, text:'All posts', value: 'all' },
                { key: 1, text: 'Video', value: 'video' },
                { key: 2, text: 'Images', value: 'images' },
                { key: 3, text: 'Text', value: 'text' },]} simple item />
        </Menu>
    </div>

}



export default MenuAllPosts;