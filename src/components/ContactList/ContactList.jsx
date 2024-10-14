import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

export default function ContactList( {contacts, onDelete} ) {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => {
                return (
                     <li key={contact.id}> <Contact person={contact} onDelete={onDelete}/> </li>
                )
            })}
        </ul>
    )
}