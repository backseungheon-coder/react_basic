import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const Table_style = styled(Table)`
    
    border:1px solid lightgray;
    border-radius:20px;
`

export default function Table_basic(props) {

            return(
                <Table_style  hover>
                <thead>
                    <tr>
                    <th style={{width:'20%'}}>NO</th>
                    <th style={{width:'20%'}}>기업이름</th>
                    <th style={{width:'20%'}}>주소</th>
                    <th style={{width:'40%'}}>상세업종</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Market_list.map((data, idx) => (
                      <tr key={idx}>
                        <td style={{width:'20%'}}>{idx+1}</td>
                        <td style={{width:'20%'}}>{data.기업이름}</td>
                        <td style={{width:'20%'}}>{data.주소}</td>
                        <td style={{width:'40%'}}>{data.상세업종}</td>
                      </tr>  
                    ))}        
                </tbody>
                </Table_style >
        
      
            );
    }


export function Table_Brand(props){

    return(
        <Table_style  hover>
        <thead>
            <tr>
            <th style={{width:'16.6666666%'}}>NO</th>
            <th style={{width:'16.6666666%'}}>나이</th>
            <th style={{width:'16.6666666%'}}>영업 가능 주소</th>
            <th style={{width:'16.6666666%'}}>경력</th>
            <th style={{width:'16.6666666%'}}>경력 년수</th>
            <th style={{width:'16.6666666%'}}>참여형식</th>
            </tr>
        </thead>
        <tbody>
            {props.Market_list.map((data, idx) => (
              <tr key={idx}>
                <td style={{width:'16.6666666%'}}>{idx+1}</td>
                <td style={{width:'16.6666666%'}}>{data.마케터_나이}</td>
                <td style={{width:'16.6666666%'}}>{data.주소}</td>
                <td style={{width:'16.6666666%'}}>{data.경력}</td>
                <td style={{width:'16.6666666%'}}>{data.경력_년수}</td>
                <td style={{width:'16.6666666%'}}>{data.참여형식}</td>
              </tr>  
            ))}        
        </tbody>
        </Table_style >


    );
}