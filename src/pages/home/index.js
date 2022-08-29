import { collection, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, db } from '../../firebase/config';


const Home = () => {
   const [ users,setUsers] = useState([])
  useEffect(()=>{
    const usersRef = collection(db,"users")
    const q = query(usersRef,where('uid','not-in',[auth.currentUser.uid]))
    const unsub = onSnapshot(q,querySnapshot=>{
      let users = []
      querySnapshot.forEach(doc=>{
          users.push(doc.data())
      });
      setUsers(users)
    })
    return () => unsub();
  },[]);
  console.log(users);
    return (
        <>
           <section>
            <h2>Hello </h2>
           </section>
        </>
    );
};



export default Home;