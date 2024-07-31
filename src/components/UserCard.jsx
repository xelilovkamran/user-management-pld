import PropTypes from "prop-types";

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="p-4 border rounded shadow-md mb-4 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
    </div>
    <div>
      <button
        onClick={() => onEdit(user)}
        className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(user.id)}
        className="bg-red-500 text-white py-1 px-3 rounded"
      >
        Delete
      </button>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
