import React from 'react';
import css from './Filter.module.css'

import { BsSearch } from 'react-icons/bs';

const Filter = ({ value, onChange }) => (
  <label className={css.labelDescription}>
    <div className={css.labelWrapper}>
      <BsSearch size="16" /> Find contacts by name
    </div>
    <input className={css.filterInput} type="text" value={value} onChange={onChange} placeholder="search" />
  </label>
);

export default Filter;