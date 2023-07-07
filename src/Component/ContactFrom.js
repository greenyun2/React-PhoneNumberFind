import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactFrom = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: {name, phone} });
  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="이름을 입력해 주세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        type="password"
        placeholder="전화번호" />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}

export default ContactFrom