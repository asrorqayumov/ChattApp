import React from "react";
import Attachment from "../svg/Attachment";
import { Button } from "@mui/material";

const MessageForm = ({handleSubmit,text,setText,setImg}) => {
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        onChange={(e)=>setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input type="text" placeholder="Enter message" value={text} onChange={(e)=> setText(e.target.value)} />
      </div>
      <div>
         <Button type="submit" style={{marginBottom:'10px'}} className="btn-primary">Send</Button>
      </div>
    </form>
  );
};


export default MessageForm;
