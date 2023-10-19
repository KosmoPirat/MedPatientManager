import React, {FC} from 'react';


import {Typography} from "@material-ui/core";


const TableTitle: FC<{text: string}>= ({ text = "Table Title", }) => (
  <Typography
    variant='h6'
    style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", backgroundColor: "#69a2c4"}}
  >
    {text}
  </Typography>
);


export default TableTitle;
