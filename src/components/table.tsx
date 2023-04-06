import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';

type tableProps = {
    heading: Array<any>;
    data: Array<any>;
}
// TODO: replace to bootstrap
function dynamic(data:Array<any>) { //data =[ [name,id,borrow,lend] ,[...] ]
    const test = data.map((item:string | number) => {
        // console.log(item);
        return  <td> {item} </td> ;
   })
   return test
};

export const ReactTable = (props:tableProps):ReactElement => {
    
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    {props.heading.map((d,idx) => {return <th> {d}</th>})}
                </tr>
            </thead>
            
            <tbody>
                { props.data.map((d,idx) => {return <tr> {dynamic(d) } </tr> }) }
            </tbody>
        </Table>
    )
}