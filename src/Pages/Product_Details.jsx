import React, { useRef } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { MdBrandingWatermark } from "react-icons/md";
import { IoIosPricetags, IoMdHome } from "react-icons/io";
import { styled, emphasize } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoColorPalette } from "react-icons/io5";
import { GiPriceTag } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { PiStarOfDavidDuotone } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import Button from "@mui/material/Button";
import UserAvtar from "../Components/UserAvtar/userAvtar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { RiReplyAllFill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Product1 from "../assets/product1.webp";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.webp";
import Product4 from "../assets/product4.webp";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/product6.webp";

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

const Product_Details = () => {
  const productsSliderBig = useRef();
  const productSliderSmall = useRef();

  const gotoSlide = (index) => {
    productsSliderBig.current.slickGoTo(index);
    productSliderSmall.current.slickGoTo(index);
  };

  var productsSlider = {
    dots: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
  };
  var productsSmSlider = {
    dots: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };

  return (
    <>
      {/* BreadCrumbs */}
      <div className="right-content w-100">
        <div className="card shadow  border-0  w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product View</h5>

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
              label="Products"
              components="a"
              href="#"
              icon={<TbListDetails fontSize={18} />}
            />

            <StyledBreadcrumb
              label="Product View"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        {/* Slider-Slick */}
        <div className="card productdetailSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h2 className="mb-4 text-center">Product Gallery</h2>
                <Slider
                  {...productsSlider}
                  className="sliderBig mb-3"
                  ref={productsSliderBig}
                >
                  <div className="item">
                    <img src={Product1} className="w-100" />
                  </div>

                  <div className="item">
                    <img src={Product2} className="w-100" />
                  </div>

                  <div className="item">
                    <img src={Product3} className="w-100" />
                  </div>

                  <div className="item">
                    <img src={Product4} className="w-100" />
                  </div>

                  <div className="item">
                    <img src={Product5} className="w-100" />
                  </div>

                  <div className="item">
                    <img src={Product6} className="w-100" />
                  </div>
                </Slider>

                <Slider
                  {...productsSmSlider}
                  className="sliderSmall"
                  ref={productSliderSmall}
                >
                  <div className="item p-2" onClick={() => gotoSlide(3)}>
                    <img
                      src={Product1}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>

                  <div className="item p-2" onClick={() => gotoSlide(0)}>
                    <img
                      src={Product2}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>

                  <div className="item p-2" onClick={() => gotoSlide(1)}>
                    <img
                      src={Product3}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>

                  <div className="item p-2" onClick={() => gotoSlide(2)}>
                    <img
                      src={Product4}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>

                  <div className="item p-2" onClick={() => gotoSlide(3)}>
                    <img
                      src={Product5}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>

                  <div className="item p-2" onClick={() => gotoSlide(3)}>
                    <img
                      src={Product6}
                      className="w-100"
                      style={{ height: "79.1px" }}
                    />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h4 className="mb-4">Product Details</h4>

                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>

                <div className="productinfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Pranjal</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>

                    <div className="col-sm-9">
                      :
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>RED</span>
                        </li>

                        <li className="list-inline-item">
                          <span>BLUE</span>
                        </li>

                        <li className="list-inline-item">
                          <span>WHITE</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <GiPriceTag />
                      </span>
                      <span className="name">Price</span>
                    </div>

                    <div className="col-sm-9">
                      :
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>SUITE</span>
                        </li>

                        <li className="list-inline-item">
                          <span>PARTY</span>
                        </li>

                        <li className="list-inline-item">
                          <span>DRESS</span>
                        </li>

                        <li className="list-inline-item">
                          <span>MAN</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosPricetags />
                      </span>
                      <span className="name">Tags</span>
                    </div>

                    <div className="col-sm-9">
                      :
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>SUITE</span>
                        </li>

                        <li className="list-inline-item">
                          <span>PARTY</span>
                        </li>

                        <li className="list-inline-item">
                          <span>DRESS</span>
                        </li>

                        <li className="list-inline-item">
                          <span>MAN</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaCartPlus />
                      </span>
                      <span className="name">Stock</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Pranjal</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <PiStarOfDavidDuotone />
                      </span>
                      <span className="name">Review</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Pranjal</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <SiTicktick />
                      </span>
                      <span className="name">Published</span>
                    </div>

                    <div className="col-sm-9">
                      : <span>Pranjal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <h5 className="mt-4 mb-3">Product Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quae aut fugiat. Soluta accusamus dolores autem
              officiis porro. Dolor totam maiores, molestias quidem quos
              consequuntur consequatur est cumque deserunt quisquam, sunt et
              maxime pariatur mollitia recusandae! Aliquid, deserunt
              voluptatibus. Quo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque quae aut fugiat. Soluta accusamus
              dolores autem officiis porro. Dolor totam maiores, molestias
              quidem quos consequuntur consequatur est cumque deserunt quisquam,
              sunt et maxime pariatur mollitia recusandae! Aliquid, deserunt
              voluptatibus. Quo.
            </p>

            <br />

            <h5 className="mt-4 mb-4">Rating Analysis</h5>

            <div className="ratingsection">
              <div className="ratinggrow d-flex align-items-center">
                <span className="col1">5 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(22)</div>
              </div>

              <div className="ratinggrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(2)</div>
              </div>

              <div className="ratinggrow d-flex align-items-center">
                <span className="col1">3 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(22)</div>
              </div>

              <div className="ratinggrow d-flex align-items-center">
                <span className="col1">2 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
                <div className="col3">(1)</div>
              </div>
            </div>

            <br />

            <h5 className="mt-4 mb-4">Customer Reviews</h5>

            <div className="reviewsection">
              <div className="ReviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvtar lg={true} />

                        <div className="info pl-3">
                          <h6>Pranjal Jaiswal</h6>
                          <span className="mb-0">15 days ago!</span>
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      </Stack>
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button
                        variant="contained"
                        className="btn-blue btn-big ml-auto"
                      >
                        <span className="mr-1">
                          <RiReplyAllFill size={"18"} />
                        </span>{" "}
                        Reply
                      </Button>
                    </div>
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima quo fugit ex fuga officiis officia quidem eum, cum
                    perspiciatis nam porro at vel tempore quas itaque. Natus,
                    iste eum. Labore.
                  </p>
                </div>
              </div>

              <div className="ReviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvtar lg={true} />

                        <div className="info pl-3">
                          <h6>Pranjal Jaiswal</h6>
                          <span className="mb-0">1 days ago!</span>
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      </Stack>
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button
                        variant="contained"
                        className="btn-blue btn-big ml-auto"
                      >
                        <span className="mr-1">
                          <RiReplyAllFill size={"18"} />
                        </span>{" "}
                        Reply
                      </Button>
                    </div>
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima quo fugit ex fuga officiis officia quidem eum, cum
                    perspiciatis nam porro at vel tempore quas itaque. Natus,
                    iste eum. Labore.
                  </p>
                </div>
              </div>

              <div className="ReviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvtar lg={true} />

                        <div className="info pl-3">
                          <h6>Pranjal Jaiswal</h6>
                          <span className="mb-0">15 days ago!</span>
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      </Stack>
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button
                        variant="contained"
                        className="btn-blue btn-big ml-auto"
                      >
                        <span className="mr-1">
                          <RiReplyAllFill size={"18"} />
                        </span>{" "}
                        Reply
                      </Button>
                    </div>
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima quo fugit ex fuga officiis officia quidem eum, cum
                    perspiciatis nam porro at vel tempore quas itaque. Natus,
                    iste eum. Labore.
                  </p>
                </div>
              </div>

              <div className="ReviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvtar lg={true} />

                        <div className="info pl-3">
                          <h6>Pranjal Jaiswal</h6>
                          <span className="mb-0">1 days ago!</span>
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={3.5}
                          precision={0.5}
                        />
                      </Stack>
                    </div>
                  </div>

                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button
                        variant="contained"
                        className="btn-blue btn-big ml-auto"
                      >
                        <span className="mr-1">
                          <RiReplyAllFill size={"18"} />
                        </span>{" "}
                        Reply
                      </Button>
                    </div>
                  </div>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima quo fugit ex fuga officiis officia quidem eum, cum
                    perspiciatis nam porro at vel tempore quas itaque. Natus,
                    iste eum. Labore.
                  </p>
                </div>
              </div>
            </div>

            <br />

            <h5 className="mt-4 mb-4">Review Reply Form</h5>

            <form className="reviewForm">
              <textarea placeholder="Write Here..."></textarea>
              <Button className="btn-blue btn-big btn-lg w-100 mt-4">
                Droup Your Reply
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Ends */}
    </>
  );
};

export default Product_Details;
