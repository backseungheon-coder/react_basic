import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

const Search_icon = styled(Search)`
  font-weight:bold;
  width:20px;
  height:20px;

`

export function Search_input_from() {
  return (
    <>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="검색 내용을 입력 해주세요"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{border:'2px solid #2073bc'}}
        />
        <Button variant="outline-primary" id="button-addon2" style={{border:'2px solid #2073bc',display:'flex',alignItems:'center'}}>
          <Search_icon/>
        </Button>
      </InputGroup>
    </>
  );
}
