import React, { Component } from 'react';

export default class StatusBar extends Component {
  render() {
    const { dropdownStatus, tableStatus } = this.props;
    const rows = tableStatus.columnData.length;
    return(
      <div className="status-bar">
        <h4>{dropdownStatus.isLoading ? 'Initializing..' : ''}</h4>
        <h4>{dropdownStatus.error ? 'Error occured! Please try again later.' : ''}</h4>
        <h4>{tableStatus.isLoading ? 'Loading data..' : ''}</h4>
        <h4>{tableStatus.error ? 'Error occured! Please try again later.' : ''}</h4>
        <h4>{rows > 100 ? `No. of rows not displayed: ${rows - 100}` : ''}</h4>
      </div>
    );
  }
}
