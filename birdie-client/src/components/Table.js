import React, { Component } from 'react';
import { capitalize, sortDescending } from '../libraries/utils';

const TableHeader = props => {
  return (
    <thead>
      <tr>
        <th className="two wide">#</th>
        <th className="six wide">{capitalize(props.tableTitle)}</th>
        <th className="four wide">Count</th>
        <th className="four wide">Average Age</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const sortSlice = sortDescending(props.tableData).slice(0,100);
  const rows = sortSlice.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{row.type}</td>
        <td>{row.count}</td>
        <td>{row.averageAge}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

class Table extends Component {
  render () {
    const { tableData, tableTitle } = this.props;

    return (
      <table className="ui striped table">
        <TableHeader tableTitle={tableTitle} />
        <TableBody tableData={tableData} />
      </table>
    );
  }
}

export default Table;
