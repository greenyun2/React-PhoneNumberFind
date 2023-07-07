import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  let [keyWord, setKeyWord] = useState("");
  let dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({type: "SEARCH_BY_USERNAME", payload: { keyWord }})
  }

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control 
          value={keyWord} 
          onChange={(event) => setKeyWord(event.target.value)}
          type='text'
          placeholder='이름을 입력해 주세요' />
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;