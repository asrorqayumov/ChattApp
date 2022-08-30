import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Moment from "react-moment";
const Message = ({ msg, user1 }) => {
  const scrolRef = useRef();

  useEffect(() => {
    scrolRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  return (
    <div
      className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrolRef}
    >
      <p className={msg.from === user1 ? "me" : "frined"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
};

export default Message;
