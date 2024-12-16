import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils';
import Image from 'next/image';
// import { testUsers } from '@/lib/constants';
import { UserRolesTableTypes } from '@/lib/types';

interface Data {
  name: string;
  type: string;
  created: string;
  status: string;
  // users: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'created',
    numeric: false,
    disablePadding: false,
    label: 'Date created',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  }
]

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            // sx={{border: "1px solid black"}}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          align='left'
        >
          Role Users
        </TableCell>
        <TableCell
          align='left'
        >
        </TableCell>
      </TableRow>
    </TableHead>
  )
}


interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          User Roles
        </Typography>
      )}
      <button className='flex gap-[10px] items-center justify-center w-[220px] h-[40px] rounded-[8px] border'>
        <h2 className='relative w-[20px] h-[20px]'>
          <Image src="/images/download-cloud.svg" alt="" fill={true} />
        </h2>
        <h2 className='text-[#344054] font-[500] text-[14px] leading-[20px]'>
          Download all
        </h2>
      </button>
    </Toolbar>
  );
}

type EnhancedTablePropsType = {
  roleUsers: UserRolesTableTypes[];
}


export default function EnhancedTable({ roleUsers }: EnhancedTablePropsType) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('name');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    // debugger
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = roleUsers.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  }

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - roleUsers.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...roleUsers]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, roleUsers]
  )

  return (

    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        {roleUsers.length == 0 && (
          <div className='h-[100px] borde flex justify-center items-center'>
            <h2>Loading Data...</h2>
          </div>
        )}
        {roleUsers.length > 0 && (
          <TableContainer>
            <Table
              sx={{ minWidth: 900 }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={roleUsers.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onChange={(event) => handleClick(event, row.name)}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.type}</TableCell>
                      <TableCell align="left">{row.created}</TableCell>
                      <TableCell align="left">
                        <div className={`w-[67px] h-[22px] flex items-center justify-center rounded-[16px] ${row.status !== "active" && "bg-[#F2994A] text-white"} ${row.status == "active" && "bg-[#ECFDF3] text-[#027A48]"}`}>
                          {row.status == "active" && "Active"}
                          {row.status !== "active" && "Inactive"}
                        </div>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          // border:"2px solid black",
                          // display: "flex",
                          position: "relative",
                          // justifyContent:"center"
                          // alignItems: "center",
                          // marginTop:"10px"
                        }}
                      >
                        {row.users.map((user: any, index: number) => {
                          const z = ``
                          const left = index * 13
                          if (index > 4) {
                            return
                          }
                          if (index == 4) {
                            return (
                              <div style={{ left: `${left}px` }} className={`w-[20px] h-[20px]  absolute left-[10px] rounded-[20px] bg-[#F9FAFB]`}>
                                <div className='relative w-full h-full flex justify-center items-center'>
                                  <h2 className='font-[500] text-[12px] leading-[18px]'>+{row.users.length - 4}</h2>
                                </div>
                              </div>
                            )
                          }

                          return (
                            <div style={{ left: `${left}px` }} className={`w-[20px] h-[20px] border-2 absolute left-[10px] rounded-[20px]`}>
                              <div className='relative w-full h-full'>
                                <Image src={user.avi} alt='' fill={true} />
                              </div>
                            </div>
                          )
                        })}
                      </TableCell>
                      <TableCell align="left">
                        <button className='relative borde h-[20px] w-[20px]'>
                          <Image src="/images/download-cloud.svg" alt="" fill={true} />
                        </button>
                      </TableCell>
                    </TableRow>
                  )
                })}
                {/* {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )} */}
              </TableBody>
            </Table>
          </TableContainer>
        )}

      </Paper>
    </Box>
  );
}
