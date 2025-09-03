import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ChevronUp, CircleChevronUp } from "lucide-react";
import { cn } from "../utils/cn";

export default function BasicMenu({
  names,
  item1,
  item2,
  item3,
  item4,
  logoleft,
  className,
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
        className={cn(
          `!normal-case !-ml-7  !text-base !text-[#26395C]  `,
          className
        )}
      >
        {logoleft}
        {names}

        <ChevronUp
          className={cn(
            ` text-[#0E8BFF] ml-1 size-5 ${open ? "rotate-180" : "rotate-0"}`,
           
          )}
        />
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
        <MenuItem
          className=" !text-[#26395C] !text-[15px]  !mx-2 !rounded-lg hover:!bg-[#D6EBFD]"
          onClick={handleClose}
        >
          {item4}
        </MenuItem>
      </Menu>
    </div>
  );
}
