import { useState } from "react";
import Button from "./Button";
const FormSplitBill = ({ selectedFriend, setSelectedFriends }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [selection, setSelection] = useState("user");
  const friendExpense = bill ? bill - userExpense : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !userExpense) return;
    if (selection === "user") {
      selectedFriend.balance += friendExpense;
    } else {
      selectedFriend.balance -= userExpense;
    }
    setSelectedFriends(() => null);
  };
  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(+e.target.value > bill ? bill : +e.target.value)
        }
        max={bill}
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input disabled type="text" value={friendExpense} />

      <label>🤑 Who's paying the bill</label>
      <select value={selection} onChange={(e) => setSelection(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
