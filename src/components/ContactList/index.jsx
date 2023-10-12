import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const users = useSelector(state => state.contacts);
  const query = useSelector(state => state.filter);
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(query)
  );

  return (
    <ul>
      {filtered &&
        filtered.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} user={name} phone={number} />
          );
        })}
    </ul>
  );
};
