import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ setFriends, windowClose }) => {
  const [newFriend, setNewFriend] = useState("");
  const [newFriendImage, setNewFriendImage] = useState(
    "https://i.pravatar.cc/48"
  );

  const addFriendHandler = (e) => {
    e.preventDefault();
    if (!newFriend || !newFriendImage) return;
    const id = crypto.randomUUID();
    const newFriendObj = {
      name: newFriend,
      image: `${newFriendImage}?=${id}`,
      id: id,
      balance: 0,
    };
    setFriends((prevFriends) => [...prevFriends, newFriendObj]);

    setNewFriend("");
    setNewFriendImage("https://i.pravatar.cc/48");
    windowClose(() => false);
  };
  return (
    <form className="form-add-friend" onSubmit={addFriendHandler}>
      <label>👫 Friend name</label>
      <input
        value={newFriend}
        type="text"
        onChange={(e) => setNewFriend(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        value={newFriendImage}
        type="text"
        onChange={(e) => setNewFriendImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
