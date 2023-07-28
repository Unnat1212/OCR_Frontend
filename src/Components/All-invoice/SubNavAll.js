import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import "./SubNavAll.css";

const rows = [
  {
    id: 1,
    documentName: "Document 1",
    status: "success",
    uploaded: "2023-07-16",
    validated: "2023-07-16",
    exported: "2023-07-16",
    tags: "Tag 1",
  },
  {
    id: 2,
    documentName: "Document 2",
    status: "failed",
    uploaded: "2023-07-17",
    validated: "2023-07-17",
    exported: "2023-07-17",
    tags: "Tag 2",
  },
  {
    id: 3,
    documentName: "Document 3",
    status: "pending",
    uploaded: "2023-07-17",
    validated: "2023-07-17",
    exported: "2023-07-17",
    tags: "Tag 3",
  },
  // Add more rows as needed
];

const getStatusIcon = (status) => {
  if (status === "success") {
    return <img src={require("./check-circle.jpg")} alt="Description" />;
  } else if (status === "pending") {
    return <img src={require("./disc.jpg")} alt="Description" />;
  } else if (status === "failed") {
    return <img src={require("./alert-circle.jpg")} alt="Description" />;
  }
  return null;
};

export default function SubNavAll() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [hoveredRowId, setHoveredRowId] = React.useState(null);

  const handleRowMouseEnter = (rowId) => {
    setHoveredRowId(rowId);
  };

  const handleRowMouseLeave = () => {
    setHoveredRowId(null);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(rows.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (event, rowId) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, rowId]);
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((id) => id !== rowId)
      );
    }
  };

  const isHeightBelow1001x1100 = useMediaQuery(
    "(min-height: 1020px) and (max-height: 1120px)"
  );
  const isHeightBelow900x1000 = useMediaQuery(
    "(min-height: 850px) and (max-height: 1020px)"
  );
  const isHeightBelow770x899 = useMediaQuery(
    "(min-height: 780px) and (max-height: 849px)"
  );
  const isHeightBelow680x769 = useMediaQuery(
    "(min-height: 700px) and (max-height: 779px)"
  );
  const isHeightBelow550x679 = useMediaQuery(
    "(min-height: 599px) and (max-height: 699px)"
  );
  const isHeightBelow549 = useMediaQuery(
    "(min-height: 499px) and (max-height: 599px)"
  );

  const isScreenWide4 = useMediaQuery(
    "(min-width: 1851px) and (max-width: 2000px)"
  );
  // const isScreenWide3 = useMediaQuery(
  //   "(min-width: 1650px) and (max-width: 1850px)"
  // );
  const isScreenWide2 = useMediaQuery(
    "(min-width: 1501px) and (max-width: 1649px)"
  );
  const isScreenWide1 = useMediaQuery(
    "(min-width: 1400px) and (max-width: 1500px)"
  );
  const isScreenWide = useMediaQuery(
    "(min-width: 1250px) and (max-width: 1399px)"
  );
  const isMediumScreen1 = useMediaQuery(
    "(min-width: 1050px) and (max-width: 1249px)"
  );
  const isMediumScreen2 = useMediaQuery(
    "(min-width: 950px) and (max-width: 1049px)"
  );
  const isMediumScreen3 = useMediaQuery(
    "(min-width: 850px) and (max-width: 949px)"
  );
  const isMediumScreen4 = useMediaQuery(
    "(min-width: 700px) and (max-width: 849px)"
  );

  let tableWidth = "60vw";
  let tableHeight = "60vh";

  if (isHeightBelow1001x1100 || isScreenWide4) {
    // 1920 x 1080
    tableHeight = "50vh";
    tableWidth = "70vw";
  } else if (isHeightBelow900x1000 || isScreenWide2) {
    // 1600 x 900
  } else if (isHeightBelow770x899 || isScreenWide1) {
    //1440 x 810
  } else if (isHeightBelow680x769 && isScreenWide) {
    // 1366 x 768
  } else if (isMediumScreen1 && isHeightBelow550x679) {
    // 1200 x 675
  } else if (isMediumScreen3 || isHeightBelow549) {
    // 900 x 506
  } else if (isScreenWide) {
    // my screen
    tableHeight = "60vh";
    tableWidth = "70vw";
  } else if (isMediumScreen2) {
  } else if (isMediumScreen4) {
  } else if (isMediumScreen1) {
  }

  const columns = useMemo(() => {
    return [
      // column definitions...
      { id: "documentName", label: "Document name", width: "300px" },
      { id: "status", label: "Status", width: "100px" },
      { id: "uploaded", label: "Uploaded", width: "150px" },
      { id: "validated", label: "Validated", width: "100px" },
      { id: "exported", label: "Exported", width: "150px" },
      { id: "tags", label: "Tags", width: "100px" },
    ];
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        height: tableHeight,
        width: tableWidth,
        margin: "25px 27px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <Table
        stickyHeader
        style={{ tableLayout: "fixed", marginLeft: "15px" }}
        className="noPadding"
      >
        <TableHead>
          <TableRow className="noPadding">
            <TableCell className="noPadding" style={{ width: "50px" }}>
              <Checkbox
                color="primary"
                checked={selectedRows.length === rows.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                className="noPadding"
                style={{ width: columns.width }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell></TableCell>{" "}
            {/* Add an empty header for the Actions column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onMouseEnter={() => handleRowMouseEnter(row.id)}
              onMouseLeave={handleRowMouseLeave}
              className="noPadding"
            >
              <TableCell className="noPadding">
                <Checkbox
                  color="primary"
                  checked={selectedRows.includes(row.id)}
                  onChange={(e) => handleSelectRow(e, row.id)}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} className="noPadding">
                  {column.id === "status" ? (
                    getStatusIcon(row[column.id])
                  ) : column.id === "documentName" ? (
                    <>
                      {row[column.id]}
                      {hoveredRowId === row.id && (
                        <img
                          src={require("./edit.jpg")}
                          style={{ fontSize: "17px", paddingLeft: "35px" }}
                          alt="Description"
                        />
                      )}{" "}
                      {/* Show the edit icon on hover */}
                    </>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
              {hoveredRowId === row.id && (
                <TableCell className="noPadding">
                  {/* Render the icons for delete, download cloud, archive, and tag when the edit icon is clicked */}
                  <img
                    src={require("./tag.jpg")}
                    alt="Description"
                    style={{ paddingRight: "5px" }}
                  />
                  <img
                    src={require("./archive.jpg")}
                    alt="Description"
                    style={{ paddingRight: "5px" }}
                  />
                  <img
                    src={require("./download-cloud.jpg")}
                    alt="Description"
                    style={{ paddingRight: "5px" }}
                  />
                  <img src={require("./trash-2.jpg")} alt="Description" />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
