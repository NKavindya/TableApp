import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import './Table.css';

function CustomTable({ data, onDelete }) {
  const deleteButtonStyle = {
    color: '#f88604',
    borderColor: '#f88604',
  };

  return (
    <div>
      <div className="App">
        <h2>TABLE APP</h2>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.body}</TableCell>
                <TableCell>
                  <Button
                    style={deleteButtonStyle}
                    variant="outlined"
                    color="secondary"
                    onClick={() => onDelete(row.id)} // Call onDelete with row.id
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;
