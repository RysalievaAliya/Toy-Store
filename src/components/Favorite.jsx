// import React from 'react';
// import { useFav } from '../contexts/FavoriteContext';
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, TextField, Typography } from "@mui/material";
// import StarOutlineIcon from '@mui/icons-material/StarOutline';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//         backgroundColor: theme.palette.action.hover,
//     },

//     "&:last-child td, &:last-child th": {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const Favorite = () => {
//     const { getFav, deleteProductInFavPage, favor } = useFav();

//     React.useEffect(() => {
//         getFav();
//     }, []);

//     const trHeadStyle = {
//         backgroundColor: "blue !important",
//     };
//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 700, width: "100% !important" }} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
//                             <StyledTableCell sx={trHeadStyle} align="right">
//                                 Name
//                             </StyledTableCell>
//                             <StyledTableCell sx={trHeadStyle} align="right">
//                                 Type
//                             </StyledTableCell>
//                             <StyledTableCell sx={trHeadStyle} align="right">
//                                 Description
//                             </StyledTableCell>
//                             <StyledTableCell sx={trHeadStyle} align="right">
//                                 Price
//                             </StyledTableCell>
//                             <StyledTableCell sx={trHeadStyle} align="right">
//                                 {" "}
//                                 ---{" "}
//                             </StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {favor?.products.map((row) => (
//                             <StyledTableRow key={row.item.id}>
//                                 <StyledTableCell component="th" scope="row">
//                                     <img src={row.item.picture} alt="" width="30" />
//                                 </StyledTableCell>
//                                 <StyledTableCell component="th" scope="row">
//                                     {row.item.name}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">{row.item.type}</StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     {row.item.description}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">{row.item.price}</StyledTableCell>
//                                 <StyledTableCell align="right">
//                                     <Button
//                                         onClick={() => deleteProductInFavPage(row.item.id)}
//                                         startIcon={<StarOutlineIcon sx={{ color: "black" }} />}
//                                     ></Button>
//                                 </StyledTableCell>
//                             </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default Favorite;

import React from "react";

class Favorite extends React.Component {
    render() {
        const fav = this.props.booksfav.map(item => (
            <div className="listbook" key={item.id}>
                <div className="imagenya">
                    <img className="imgstyle" src={item.image} alt={item.name} />
                </div>
                <div className="descnya">
                    <h3>{item.name}</h3>
                    <p>
                        <br />
                        <button onClick={() => this.props.delete(item.id)}>
                            Delete from Favorite
                        </button>
                    </p>
                </div>
            </div>
        ));
        return (
            <div>
                <h2>Favorite</h2>
                {fav}
            </div>
        );
    }
}

export default Favorite;