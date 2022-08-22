import SearchIcon from "@mui/icons-material/Search";
import {
  ButtonBase,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  styled,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const SideBar = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const images = [
    {
      url: "https://media.istockphoto.com/photos/make-up-cosmetics-products-against-pink-color-background-picture-id1221677097?k=20&m=1221677097&s=170667a&w=0&h=WV22Qu02bVAYoVJcJpMz037om38C7cpfUhuY-zaSJeY=",
      title: "All",
      width: "100%",
    },
    {
      url: "https://qvc.scene7.com/is/image/QVC/a/04/a462604.001?$aempdlarge$",
      title: "Lipstics",
      width: "100%",
    },
    {
      url: "https://img.freepik.com/premium-psd/two-realistic-front-view-plastic-cosmetic-face-cream-jars-mockup-template_225210-178.jpg?w=2000",
      title: "Creams",
      width: "100%",
    },
    {
      url: "https://post.healthline.com/wp-content/uploads/2020/09/face-cream-lotion-foundation-makeup-732x549-thumbnail-732x549.jpg",
      title: "Tone creams",
      width: "100%",
    },
    {
      url: "https://cdn.accentuate.io/35811088695449/1634756531721/Fully-Charged--Wands--swatch-on-white--1080x1080.jpg?v=1658853854930",
      title: "mascara",
      width: "100%",
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-050921-best-waterproof-eyeliner-1620662691.png?crop=0.500xw:1.00xh;0.245xw,0&resize=640:*",
      title: "eyeliners",
      width: "100%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: "80px",

    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {},
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
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  const [search, setSearch] = useState(searchParams.get("q") || "");

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

  return (
    <Paper
      sx={{
        m: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: 0,
        maxHeight: "150vh",
        marginLeft: 0,
      }}
    >
      <Box>
        <TextField
          sx={{ mt: 5 }}
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

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ mb: 2 }}>
            Categories
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="lipsticks"
              control={<Radio />}
              label="lipsticks"
            />
            <FormControlLabel
              value="creams"
              control={<Radio />}
              label="creams"
            />
            <FormControlLabel
              value="tone creams"
              control={<Radio />}
              label="tone creams"
            />
            <FormControlLabel
              value="mascara"
              control={<Radio />}
              label="mascara"
            />
            <FormControlLabel
              value="eyeliner"
              control={<Radio />}
              label="eyeliner"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default SideBar;
