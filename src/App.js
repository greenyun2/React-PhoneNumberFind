import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactFrom from './Component/ContactFrom';
import ContactList from './Component/ContactList';

function App() {
  
  return (
    <div className='App'>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactFrom />    
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
