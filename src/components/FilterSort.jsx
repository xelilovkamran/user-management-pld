import PropTypes from "prop-types";

const FilterSort = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="mb-4 flex justify-between">
      <input
        type="text"
        placeholder="Filter by name"
        onChange={(e) => onFilterChange(e.target.value)}
        className="border p-2 w-1/2 mr-2"
      />
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="border p-2 w-1/4"
      >
        <option value="asc">Sort by age: Ascending</option>
        <option value="desc">Sort by age: Descending</option>
      </select>
    </div>
  );
};

FilterSort.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default FilterSort;
