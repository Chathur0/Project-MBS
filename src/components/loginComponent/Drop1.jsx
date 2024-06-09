import Dropdown from 'react-bootstrap/Dropdown';

function Drop1() {
  return (
    <Dropdown style={{  }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Normal
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Visited</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Normal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Gest</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop1;