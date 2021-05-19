import PhotoProfile from "./component/profile/PhotoProfile"
import FullName from "./component/profile/FullName"
import Adress from "./component/profile/Adress" 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'


function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
    <div className="App">
       <PhotoProfile/>
      <FullName/>
     <Adress/>
    </div>
   </div>
  );
}

export default App;
