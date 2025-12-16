import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { styled, emphasize } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FiUpload } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover , &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const label = { inputProps: { "aria-label": "Switch demo" } };

const Product_Upload = () => {
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [rating, setrating] = useState(0);
  const [RegularPrice, setRegularPrice] = useState(0);
  const [Discount, setdiscount] = useState(2);
  const [Color, setColor] = useState("");
  const [tags, settags] = useState("");

  const handleChangeCategory = (e) => {
    setcategory(e.target.value);
  };
  const handleChangebrand = (e) => {
    setbrand(e.target.value);
  };
  const handleChangeRegular = (e) => {
    setRegularPrice(e.target.value);
  };

  const handleChangediscount = (e) => {
    setdiscount(e.target.value);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleChangeTags = (e) => {
    settags(e.target.value);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow  border-0  w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product Upload</h5>

          <Breadcrumbs
            aria-label="breadcrumb"
            className="ml-auto breadcrumbs_ "
          >
            <StyledBreadcrumb
              components="a"
              href="#"
              label="Dashboard"
              icon={<IoMdHome fontSize={18} />}
            />

            <StyledBreadcrumb
              label="Products Details"
              components="a"
              href="#"
              icon={<TbListDetails fontSize={18} />}
            />

            <StyledBreadcrumb
              label="Product Upload"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <form className="form">
          <div className="row">
            <div className="col-sm-12">
              <div className="card p-4">
                <h5 className="mb-4">Basic Information</h5>

                <div className="form-group">
                  <h6>Title</h6>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows={5} cols={50} />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={category}
                        onChange={handleChangeCategory}
                        className="w-100"
                      >
                        <MenuItem value="Ten"></MenuItem>
                        <MenuItem value={1}>Ten</MenuItem>
                        <MenuItem value={2}>Twenty</MenuItem>
                        <MenuItem value={3}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={brand}
                        onChange={handleChangebrand}
                        className="w-100"
                      >
                        <MenuItem value="ten">
                          <em>Addidas</em>
                        </MenuItem>
                        <MenuItem value={10}>Addidas</MenuItem>
                        <MenuItem value={20}>Reebok</MenuItem>
                        <MenuItem value={30}>Nike</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={RegularPrice}
                        onChange={handleChangeRegular}
                        className="w-100"
                      >
                        <MenuItem value="Ten">
                          <em>Ten</em>
                        </MenuItem>
                        <MenuItem value={1}>Ten</MenuItem>
                        <MenuItem value={2}>Twenty</MenuItem>
                        <MenuItem value={3}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={Discount}
                        onChange={handleChangediscount}
                        className="w-100"
                      >
                        <MenuItem value="ten"></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>COLOR</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={Color}
                        onChange={handleChangeColor}
                        className="w-100"
                      >
                        <MenuItem value={10}>RED</MenuItem>
                        <MenuItem value={20}>BLUE</MenuItem>
                        <MenuItem value={30}>GREEN</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>TAGS</h6>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={tags}
                        onChange={handleChangeTags}
                        className="w-100"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>RATINGS</h6>

                      <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(e, newValue) => {
                          setrating(newValue);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <Switch {...label} />
                    </div>
                  </div>
                </div>

                <Button className="btn-blue btn-big btn-lg w-100 mt-4">
                  <span className="mr-2">
                    <FiUpload size={20} />
                  </span>
                  PUBLISH AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Product_Upload;
