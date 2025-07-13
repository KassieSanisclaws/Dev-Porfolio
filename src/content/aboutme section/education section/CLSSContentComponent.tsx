import { Box, Grid, Typography, AccordionDetails, TableHead, TableContainer, Table, TableBody, TableRow, 
         TableCell, Avatar } from "@mui/material";

const CLSSContentComponent = () => {

    const courseData = [
        ["CourseName0", "CourseName1", "CourseName2", "CourseName3"],
        ["CourseName5", "CourseName6", "CourseName7", "CourseName8"],
        ["CourseName10", "CourseName11", "CourseName12", "CourseName13"],
        ["CourseName15", "CourseName16", "CourseName17", "CourseName18"],
        ["CourseName20", "CourseName21", "CourseName22", "CourseName23"],
        ["CourseName25", "CourseName26", "CourseName27", "CourseName28"],
    ];

    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                   <Box>
                     <AccordionDetails sx={{
                           border: "3px solid red",
                           backgroundColor: "#F8F8F8",
                           borderRadius: "15px",  
                         }}>
                            <TableContainer sx={{ border: "3px solid blue", width: "100%" }}>
                                <Table sx={{ border: "3px solid green" }}>
                                    <TableHead>
                                        <TableRow>
                                            {["Grade9 Subjects", "Grade10 Subjects", "Grade11 Subjects", "Grade12 Subjects"].map((grade, index) => (
                                                <TableCell key={index}>
                                                    <Box display="flex" alignItems="center">
                                                        <Avatar src={`/path/to/avatar${index}.png`} alt={`Avatar ${index}`} />
                                                        {grade}
                                                    </Box>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ border: "3px solid purple" }}>
                                        {courseData.map((row, rowIndex) => (
                                            <TableRow key={rowIndex} sx={{ backgroundColor: rowIndex % 2 === 0 ? 'green' : 'transparent' }}>
                                                {row.map((courseName, colIndex) => (
                                                    <TableCell key={colIndex}>
                                                        <Box display="flex" alignItems="center">
                                                            <Avatar src={`/path/to/course${rowIndex}-${colIndex}.png`} alt={`Course Avatar ${rowIndex}-${colIndex}`} />
                                                            {courseName}
                                                        </Box>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>  

                       </AccordionDetails>
                  </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default CLSSContentComponent;