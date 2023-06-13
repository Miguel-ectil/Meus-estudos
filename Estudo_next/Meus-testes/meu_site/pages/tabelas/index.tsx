import * as React from 'react';
import {
  Grid, Card, Box, CardActions, InputBase, Divider, Select, FormControl, 
  Typography, Input, MenuItem, Button, TextField, 
  Modal, Checkbox, FormControlLabel, Container
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';

interface Data {
    calories: number;
    carbs: number;
    dessert: string;
    fat: number;
    id: number;
    protein: number;
  }
  
  interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width: number;
  }
  
  type Sample = [string, number, number, number, number];
  
  const sample: readonly Sample[] = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
  ];
  
  function createData(
    id: number,
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ): Data {
    return { id, dessert, calories, fat, carbs, protein };
  }
  
  const columns: ColumnData[] = [
    {
      width: 200,
      label: 'Dessert',
      dataKey: 'dessert',
    },
    {
      width: 120,
      label: 'Calories\u00A0(g)',
      dataKey: 'calories',
      numeric: true,
    },
    {
      width: 120,
      label: 'Fat\u00A0(g)',
      dataKey: 'fat',
      numeric: true,
    },
    {
      width: 120,
      label: 'Carbs\u00A0(g)',
      dataKey: 'carbs',
      numeric: true,
    },
    {
      width: 120,
      label: 'Protein\u00A0(g)',
      dataKey: 'protein',
      numeric: true,
    },
  ];
  
  const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index, ...randomSelection);
  });
  
  const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
  };
  
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? 'right' : 'left'}
            style={{ width: column.width }}
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }
  
  function rowContent(_index: number, row: Data) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }
  

export default function tabelas() {
  return (
    <Grid sx={{marginLeft: 32}}>
      <Card 
        sx={{
          padding: '1rem 0.6rem',
          minHeight: '4rem',
          minWidth: '42rem',
          borderRadius: '16px',
          borderLeft: '5px solid #6c757d',
          borderRight: '5px solid #6c757d',
          boxShadow: '7px 7px 13px 0px rgba(50, 50, 50, 0.22)'
        }}
      >
        <Paper style={{ height: 400, width: '100%' }}>
          <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </Card>
    </Grid>
  )
}