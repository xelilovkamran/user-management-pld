import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const UserForm = ({ onAddUser, editingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setAge(editingUser.age);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      onAddUser({ id: editingUser?.id, name, email, age: parseInt(age) });
      setName("");
      setEmail("");
      setAge("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  editingUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default UserForm;
