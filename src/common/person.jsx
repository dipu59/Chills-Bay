import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Person({
  names,
  item1,
  item2,
  item3,
  logoleft,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [opens, setOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!opens);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!normal-case !mx-0 !text-base !text-[#26395C] "
      >
        {logoleft}
        {names}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          className=" !text-[#26395C] !text-[15px]  !mx-2 !rounded-lg hover:!bg-[#D6EBFD]"
          onClick={handleClose}
        >
          {item1}
        </MenuItem>
        <MenuItem
          className=" !text-[#26395C] !text-[15px]  !mx-2 !rounded-lg hover:!bg-[#D6EBFD]"
          onClick={handleClose}
        >
          {item2}
        </MenuItem>
        <MenuItem
          className=" !text-[#26395C] !text-[15px]  !mx-2 !rounded-lg hover:!bg-[#D6EBFD]"
          onClick={handleClose}
        >
          {item3}
        </MenuItem>
      </Menu>
    </div>
  );
}
