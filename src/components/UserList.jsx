import PropTypes from "prop-types";
import UserCard from "./UserCard";

const UserList = ({ users, onEditUser, onDeleteUser }) => (
  <div>
    {users.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        onEdit={onEditUser}
        onDelete={onDeleteUser}
      />
    ))}
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
  onEditUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default UserList;
