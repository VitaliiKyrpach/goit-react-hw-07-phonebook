import { useDispatch, useSelector } from 'react-redux';
import { typeFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.filter);
  const handleChange = e => {
    dispatch(typeFilter(e.target.value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={query} onChange={handleChange} />
    </div>
  );
};
