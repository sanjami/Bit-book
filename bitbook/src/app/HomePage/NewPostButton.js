import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

const NewPostButton = props => {
  return <Dropdown labeled button className="icon" id="add-button" icon="add" onChange={props.openPost} text="Post" options={[{ key: "text", text: "Text", value: "text" }, { key: "image", text: "Image", value: "image" }, { key: "video", text: "Video", value: "video" }]} simple item />;
  
};

export default NewPostButton;
