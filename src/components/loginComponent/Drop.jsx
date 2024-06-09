import Dropdown from 'react-bootstrap/Dropdown';

function Drop() {
  return (
    <Dropdown style={{  }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        User
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">User</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Volunteer</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;