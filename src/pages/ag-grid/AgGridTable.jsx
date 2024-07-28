import React, { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Dummy ITSM Data
const initialRowData = [
  { id: 1, incident: 'INC0001', requester: 'John Doe', status: 'Open', priority: 'High', created: '2024-01-01', description: 'Network issue' },
  { id: 2, incident: 'INC0002', requester: 'Jane Smith', status: 'In Progress', priority: 'Medium', created: '2024-02-15', description: 'Software installation' },
  { id: 3, incident: 'INC0003', requester: 'Mike Johnson', status: 'Resolved', priority: 'Low', created: '2024-03-10', description: 'Password reset' },
  { id: 4, incident: 'INC0004', requester: 'Joan Doe', status: 'Closed', priority: 'High', created: '2024-04-01', description: 'Hardware upgrade' },
  { id: 5, incident: 'INC0005', requester: 'Sam Smith', status: 'Open', priority: 'Medium', created: '2024-05-15', description: 'Email issues' },
  { id: 6, incident: 'INC0006', requester: 'Jim Brown', status: 'In Progress', priority: 'Low', created: '2024-06-10', description: 'Software bug' },
  { id: 7, incident: 'INC0007', requester: 'Nancy White', status: 'Open', priority: 'High', created: '2024-07-01', description: 'Server downtime' },
  { id: 8, incident: 'INC0008', requester: 'Oscar Green', status: 'Resolved', priority: 'Medium', created: '2024-07-05', description: 'Printer issue' },
  { id: 9, incident: 'INC0009', requester: 'Paul Black', status: 'In Progress', priority: 'Low', created: '2024-07-10', description: 'Monitor flickering' },
  { id: 10, incident: 'INC0010', requester: 'Rachel Blue', status: 'Closed', priority: 'High', created: '2024-07-15', description: 'Laptop crash' },
  { id: 11, incident: 'INC0011', requester: 'Rachel Blue', status: 'Resolved', priority: 'Low', created: '2024-07-20', description: 'Keyboard issue' },
  { id: 12, incident: 'INC0012', requester: 'Tom Hanks', status: 'Open', priority: 'Medium', created: '2024-07-25', description: 'VPN connectivity' },
  { id: 13, incident: 'INC0013', requester: 'Ursula King', status: 'In Progress', priority: 'High', created: '2024-07-27', description: 'Disk space full' },
  { id: 14, incident: 'INC0014', requester: 'Victor Lee', status: 'Closed', priority: 'Low', created: '2024-07-30', description: 'Mouse not working' },
  { id: 15, incident: 'INC0015', requester: 'Wendy Scott', status: 'Resolved', priority: 'Medium', created: '2024-08-01', description: 'Software update' },
  { id: 16, incident: 'INC0016', requester: 'Xander Black', status: 'Open', priority: 'High', created: '2024-08-02', description: 'Application crash' },
  { id: 17, incident: 'INC0017', requester: 'Yvonne White', status: 'Resolved', priority: 'Low', created: '2024-08-05', description: 'Network latency' },
  { id: 18, incident: 'INC0018', requester: 'Zach Green', status: 'In Progress', priority: 'Medium', created: '2024-08-10', description: 'Projector issue' },
  { id: 19, incident: 'INC0019', requester: 'Alice Black', status: 'Closed', priority: 'High', created: '2024-08-12', description: 'Email spam' },
  { id: 20, incident: 'INC0020', requester: 'Bob White', status: 'Open', priority: 'Medium', created: '2024-08-15', description: 'Data loss' },
  { id: 21, incident: 'INC0021', requester: 'Charlie Brown', status: 'Resolved', priority: 'Low', created: '2024-08-20', description: 'Access denied' },
  { id: 22, incident: 'INC0022', requester: 'Diana Green', status: 'In Progress', priority: 'High', created: '2024-08-25', description: 'Server maintenance' },
  { id: 23, incident: 'INC0023', requester: 'Eve White', status: 'Closed', priority: 'Medium', created: '2024-08-30', description: 'Backup failure' },
  { id: 24, incident: 'INC0024', requester: 'Frank Black', status: 'Resolved', priority: 'High', created: '2024-09-01', description: 'System slowdown' },
  { id: 25, incident: 'INC0025', requester: 'Grace Blue', status: 'Open', priority: 'Low', created: '2024-09-05', description: 'Internet connectivity' },
  { id: 26, incident: 'INC0026', requester: 'Steve Brown', status: 'Resolved', priority: 'Low', created: '2024-07-20', description: 'Keyboard issue' }
];

// Column Definitions
const columnDefs = [
  // { headerName: 'ID', field: 'id', sortable: true, filter: true },
  { headerName: 'Incident ID', field: 'incident', sortable: true, filter: true, editable: true },
  { headerName: 'Requester', field: 'requester', sortable: true, filter: true, editable: true },
  { headerName: 'Status', field: 'status', sortable: true, filter: true, editable: true },
  { headerName: 'Priority', field: 'priority', sortable: true, filter: true, editable: true },
  { headerName: 'Created Date', field: 'created', sortable: true, filter: true, editable: true },
  { headerName: 'Description', field: 'description', sortable: true, filter: true, editable: true }
];

const AgGridTable = () => {
  const [rowData, setRowData] = useState(initialRowData);
  const gridApi = useRef(null);

  const onGridReady = (params) => {
    gridApi.current = params.api;
  };

  const resetFilters = () => {
    if (gridApi.current) {
      gridApi.current.setFilterModel(null);
    }
  };


  return (
    <div style={{padding: '20px'}}>
      <div className="ag-theme-alpine" style={{ height: '700px', width: '100%' }}>
        <button onClick={resetFilters} style={{ marginBottom: '10px', padding: '5px 10px', cursor: 'pointer' }}>
          Reset Filters
        </button>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1, minWidth: 150, filter: true, sortable: true }}
          pagination={true}
          onGridReady={onGridReady}
          onCellValueChanged={(params) => {
            const updatedData = rowData.map(row => row.id === params.data.id ? params.data : row);
            setRowData(updatedData);
          }}
        />
      </div>
    </div>
  );
};

export default AgGridTable;