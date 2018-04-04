import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const MenuAllPosts = (props) => {
    return <div>
        <h4 className="showFeed">Show on feed</h4>
        <Dropdown onChange={props.handleChange} labeled button className="icon" id="show" icon="sort" options={[{ key: 0, text: "All posts", value: "all" }, { key: 1, text: "Video", value: "video" }, { key: 2, text: "Images", value: "images" }, { key: 3, text: "Text", value: "text" }]} simple item />
      </div>;

}

export default MenuAllPosts;