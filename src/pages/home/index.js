import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  Timestamp,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect } from "react";
import { useState } from "react";
import Message from "../../components/message";
import MessageForm from "../../components/messageForm";
import User from "../../components/user";
import { auth, db } from "../../firebase/config";
import { storage } from "./../../firebase/config";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs,setMsgs] = useState([]);


  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "not-in", [user1]));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);

  const selectUser = (user) => {
    setChat(user);

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgRef = collection(db,'messages',id,'chat')
    const q = query(msgRef,orderBy('createdAt','asc'))

     onSnapshot(q,querySnapshot=>{
      let msgs = [];
        querySnapshot.forEach(doc=>{
          msgs.push(doc.data())
        })
        setMsgs(msgs)
     })    
  };
   console.log(msgs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user2 = chat.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }
    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });
    setText("");
  };

  return (
    <div className="home_container">
      <div className="users_container">
        {users.map((user) => {
          return <User key={user.uid} user={user} selectUser={selectUser} />;
        })}
      </div>
      <div className="messages_container">
        {chat ? (
          <>
            <div className="messages_user border-bottom">
              <h3>{chat.name}</h3>
            </div>
            <div className="messages">
                {msgs.length ? msgs.map((msg,i)=>{
                  return <Message  key={i} msg={msg} />
                }):null}
            </div>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start messaging</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
