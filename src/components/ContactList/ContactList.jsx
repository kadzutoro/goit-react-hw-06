import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const getVisibleContacts = (contacts, nameFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
};

const ContactList = () => {
    const contacts = useSelector(selectItems);
    const nameFilter = useSelector(selectNameFilter);
    const visibleContacts = getVisibleContacts(contacts, nameFilter);

    return (
        <ul className={css.list}>
            {visibleContacts.map(contact => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList








// export default function ContactList({contacts, onDelete}) {
//  return (
//     <ul className={css.list}>
//         {contacts.map((contact) =>
//         <li className={css.listItem} key={contact.id}>
//             <Contact data={contact} onDelete={onDelete} />
//         </li>)}
//     </ul>
//  )
// }