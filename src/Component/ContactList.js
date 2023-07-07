import React from 'react'
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const ContactList = () => {
  const {contact, keyWord} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if(keyWord !== "") {
      let list = contact.filter((item) => item.name.includes(keyWord));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyWord]);
  
  return (
    <div>
      <SearchBox />
      {filteredList.map((item) => (
        <ContactItem item={item}/>
      ))}
    </div>
  )
}

export default ContactList;