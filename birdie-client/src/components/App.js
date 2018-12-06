import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchColumnNames, fetchColumnData } from '../actions';
import { formatOptions } from '../libraries/utils';

import Table from './Table';
import StatusBar from './StatusBar';

class App extends Component {
  componentDidMount() {
    this.props.fetchColumnNames();
  }

  handleDropdownChange = (event, data) => {
    this.props.fetchColumnData(data.value);
  }

  render() {
    const { dropdownOptions, tableData } = this.props;
    const columnNames = formatOptions(dropdownOptions.columnNames);

    return (
      <div className="container">
        <h1>Birdie Database App</h1>
        <Dropdown search selection placeholder="Search"
          options={columnNames}
          onChange={this.handleDropdownChange}
        />
        <StatusBar
          dropdownStatus={dropdownOptions}
          tableStatus={tableData}
        />
        <Table
          tableTitle={tableData.columnTitle}
          tableData={tableData.columnData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dropdownOptions: state.columnNames,
  tableData: state.columnData
});

const mapDispatchToProps = {
  fetchColumnNames,
  fetchColumnData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
