import React from 'react';
import css from './ContactList.module.css'

import { IoPersonRemove } from 'react-icons/io5';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li className={css.contactListItem} key={id}>
            <span>{name}:</span>
            <span>{number}</span>

            <button className={css.btnForm} type="button" onClick={() => onDelete(id)}>
              <IoPersonRemove size="16" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};