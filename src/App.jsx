import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const AllFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [friends, setFriends] = useState(AllFriends);
  const [selectedFriend, setSelectedFriends] = useState(null);

  // Handlers
  const handleSelectedFriends = (friend) => {
    setSelectedFriends((selectedFriend) =>
      selectedFriend?.id === friend?.id ? null : friend
    );
    setIsOpened(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={friends}
          onSelectedFriends={handleSelectedFriends}
          selectedFriend={selectedFriend}
        />
        {isOpened && (
          <FormAddFriend setFriends={setFriends} windowClose={setIsOpened} />
        )}
        <Button
          isOpened={isOpened}
          onClick={() => setIsOpened(() => !isOpened)}
        >
          {isOpened ? "Close" : "Add a friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          setSelectedFriends={setSelectedFriends}
        />
      )}
    </div>
  );
};

export default App;
