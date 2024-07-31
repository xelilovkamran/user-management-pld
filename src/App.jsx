import { useState } from "react";
import FilterSort from "./components/FilterSort";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? user : u)));
      setEditingUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredAndSortedUsers = users
    .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.age - b.age : b.age - a.age));

  return (
    <div className="container mx-auto p-4">
      <UserForm onAddUser={handleAddUser} editingUser={editingUser} />
      <FilterSort
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <UserList
        users={filteredAndSortedUsers}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default App;
