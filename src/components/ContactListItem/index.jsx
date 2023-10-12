import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, user, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      {user}: {phone}
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};
