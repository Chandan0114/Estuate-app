import React from 'react';

export default function MyTable() {
  return <div></div>;
}

// import React from 'react';
// import {
//   DataTable,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableExpandHeader,
//   TableHeader,
//   TableBody,
//   TableExpandRow,
//   TableCell,
//   TableExpandedRow
// } from 'carbon-components-react';

// type define = {
//   rows: any;
//   headers: any;
// };

// const MyTable = ({ rows, headers }: define) => {
//   return (
//     <DataTable
//       rows={rows}
//       headers={headers}
//       render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
//         <TableContainer>
//           <Table {...getTableProps()}>
//             <TableHead>
//               <TableRow>
//                 <TableExpandHeader />
//                 {headers.map((header) => (
//                   <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <React.Fragment key={row.id}>
//                   <TableExpandRow {...getRowProps({ row })}>
//                     {row.cells.map((cell) => (
//                       <TableCell key={cell.id}>{cell.value}</TableCell>
//                     ))}
//                   </TableExpandRow>
//                   <TableExpandedRow colSpan={headers.length + 1}>
//                     <p>Row description</p>
//                   </TableExpandedRow>
//                 </React.Fragment>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     />
//   );
// };

// export default MyTable;
