import { doc, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/config";
import img from "../../images/image.png";

const User = ({ user1, user, selectUser, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub;
  }, []);
  return (
    <>
    <div
      className={`user_wrapper ${chat.name === user.name && "selected_user"} `}
      onClick={() => selectUser(user)}
    >
      <div className="user_info">
        <div className="user_detail">
          <img src={user.avatar || img} alt="user avatar" className="avatar" />
          <h4>{user.name}</h4>
          {data?.from !== user1 && data?.unread &&(
             <small className="unread">New</small>
          )}
        </div>
        <div
          className={`user_status ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
      {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "Me:" : ""}</strong>
            {data.text}
          </p>
      )}
    </div>
    <div onClick={() => selectUser(user)}   className={`sm_container ${chat.name === user.name && "selected_user"} `}>
    <img src={user.avatar || img} alt="user avatar" className="avatar sm_screen" />
    </div>
      </>
  );
};

export default User;
