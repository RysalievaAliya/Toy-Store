import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useProducts } from "../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Sidebar.css";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SideBar() {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  const images = [
    {
      url: "https://cf.shopee.ph/file/4c006ddead76ddc0cab3bc9e99a1bda2",
      title: "Plush Toys",
      width: "20%",
      id: 1,
    },
    {
      url: "https://static3.depositphotos.com/1000865/118/i/950/depositphotos_1183767-stock-photo-toy-car.jpg",
      title: "Toy Cars",
      width: "20%",
      id: 2,
    },
    {
      url: "https://ae01.alicdn.com/kf/H3caf0b2e90f7469f905e602c866b8d99L/23-Handmade-1-3-Bjd-Dolls-Full-Set-Large-60cm-Fashion-Pink-Girls-Princess-Ball-Jointed.jpg_Q90.jpg_.webp",
      title: "Dolls",
      width: "20%",
      id: 3,
    },
    {
      url: "https://www.businessinsider.in/thumb/msid-81507028,width-640,resizemode-4/Master.jpg",
      title: "Educational Toys",
      width: "20%",
      id: 4,
    },
    {
      url: "https://ae01.alicdn.com/kf/HTB1ALAoacrrK1RjSspaq6AREXXa8/Programmable-Robot-Toys-For-Kids-Boy-With-Intelligence-Diy-Remote-Control-Robot-Robotics-Kits-Programmer-Programmable.jpg_Q90.jpg_.webp",
      title: "Robotics",
      width: "20%",
      id: 5,
    },
    {
      url: "https://ae01.alicdn.com/kf/Hba2d143968c84871accf10656c428271Z/280pcs-Dreamy-Nail-Art-Sets-Nail-Art-Toys-Girls-Gifts-Pretend-Play-Safe-No-Toxic-For.jpg_Q90.jpg_.webp",
      title: "For Girls",
      width: "20%",
      id: 6,
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-per-age-1-1635449252.png?crop=0.474xw:0.949xh;0.271xw,0.0288xh&resize=640:*",
      title: "For Boys",
      width: "20%",
      id: 7,
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/51ZbwxuM-WL.jpg",
      title: "For Little Babies",
      width: "20%",
      id: 8,
    },
    {
      url: "https://ae01.alicdn.com/kf/S50173981e2cf4f8ea05f96f34dbc1c3dh/6-Styles-Haikyuu-Anime-Figure-616-Kei-Tsukishima-Action-Figure-789-Ushijima-Wakatoshi-605-Kozume-Kenma.jpg_Q90.jpg_.webp",
      title: "Anime Chibi Dolls",
      width: "20%",
      id: 9,
    },
    {
      url: "https://img.joomcdn.net/745c82bf730e51473488fe4e43686d392d47dab1_original.jpeg",
      title: "Sport Toys",
      width: "20%",
      id: 10,
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",

    height: 100,
    [theme.breakpoints.down("sm")]: {
      width: "50% !important",
      height: 50,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 0,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "1px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% 5px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      <TextField
        sx={{ mt: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            {image.title}
            <ImageMarked className="MuiImageMarked-root" />
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
