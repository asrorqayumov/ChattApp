import { Typography } from "@mui/material";
import React from "react";
import image from "../../images/image.png";
import Camera from "../../components/svg/Camera";
import Delete from "../../components/svg/Delete";
import { useState } from "react";
import { useEffect } from "react";
import { auth, db, storage } from "../../firebase/config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState("");

  const getUser = ()=>{
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  }

  useEffect(() => {
     getUser();
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          setImg("");
        } catch (err) {
          console.log(err);
        }
      };
      uploadImg();
    }
  }, [img]);

  const deleteImage = async () => {
    try {
      await deleteObject(ref(storage, user.avatarPath));

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        avatar: "",
        avatarPath: "",
      });
       getUser()
    } catch (err) {
      console.log(err);
    }
  };

  return user ? (
    <section className="border-top">
      <div className="profile_wrapper card-bg">
        <div className="img_container">
          <img src={user.avatar || image} alt="avatar" />
          <div className="overlay">
            <div>
              <label htmlFor="photo">
                <Camera />
              </label>
              {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
              <input
                type="file"
                id="photo"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className="text_container">
          <Typography variant="h4" gutterBottom fontWeight={400}>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user.email}
          </Typography>
          <small>Joined in: {user.createdAt.toDate().toDateString()}</small>
        </div>
      </div>
    </section>
  ) : null;
};

export default Profile;
