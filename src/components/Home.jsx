import children from "../assets/icons/children.jpg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Button, FormControl, FormControlLabel, Link, Radio, RadioGroup } from "@mui/material"
import { useProducts } from "../contexts/ProductContextProvider";

const first = [
  {
    url: 'https://cf.shopee.ph/file/4c006ddead76ddc0cab3bc9e99a1bda2',
    title: 'Plush Toys',
    width: '20%',
    id: 1,
  },];
const second = [
  {
    url: 'https://static3.depositphotos.com/1000865/118/i/950/depositphotos_1183767-stock-photo-toy-car.jpg',
    title: 'Toy Cars',
    width: '20%',
    id: 2,
  },];
const third = [
  {
    url: 'https://ae01.alicdn.com/kf/H3caf0b2e90f7469f905e602c866b8d99L/23-Handmade-1-3-Bjd-Dolls-Full-Set-Large-60cm-Fashion-Pink-Girls-Princess-Ball-Jointed.jpg_Q90.jpg_.webp',
    title: 'Dolls',
    width: '20%',
    id: 3,
  },];
const fourth = [
  {
    url: 'https://www.businessinsider.in/thumb/msid-81507028,width-640,resizemode-4/Master.jpg',
    title: 'Educational Toys',
    width: '20%',
    id: 4,
  },];
const fifth = [
  {
    url: 'https://ae01.alicdn.com/kf/HTB1ALAoacrrK1RjSspaq6AREXXa8/Programmable-Robot-Toys-For-Kids-Boy-With-Intelligence-Diy-Remote-Control-Robot-Robotics-Kits-Programmer-Programmable.jpg_Q90.jpg_.webp',
    title: 'Robotics',
    width: '20%',
    id: 5,
  },];
const sixth = [
  {
    url: 'https://ae01.alicdn.com/kf/Hba2d143968c84871accf10656c428271Z/280pcs-Dreamy-Nail-Art-Sets-Nail-Art-Toys-Girls-Gifts-Pretend-Play-Safe-No-Toxic-For.jpg_Q90.jpg_.webp',
    title: 'For Girls',
    width: '20%',
    id: 6,
  },];
const seventh = [
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-toys-per-age-1-1635449252.png?crop=0.474xw:0.949xh;0.271xw,0.0288xh&resize=640:*',
    title: 'For Boys',
    width: '20%',
    id: 7,
  },];
const eighth = [
  {
    url: 'https://images-na.ssl-images-amazon.com/images/I/51ZbwxuM-WL.jpg',
    title: 'For Little Babies',
    width: '20%',
    id: 8,
  },];
const nineth = [
  {
    url: 'https://ae01.alicdn.com/kf/S50173981e2cf4f8ea05f96f34dbc1c3dh/6-Styles-Haikyuu-Anime-Figure-616-Kei-Tsukishima-Action-Figure-789-Ushijima-Wakatoshi-605-Kozume-Kenma.jpg_Q90.jpg_.webp',
    title: 'Anime Chibi Dolls',
    width: '20%',
    id: 9,
  },];
const tenth = [
  {
    url: 'https://img.joomcdn.net/745c82bf730e51473488fe4e43686d392d47dab1_original.jpeg',
    title: 'Sport Toys',
    width: '20%',
    id: 10,
  },];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  const { getProducts, fetchByParams } = useProducts();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box id="homeTitle">
        <h1>
          Are You Looking for a Gift for Your Child and Don't Know What to Buy?
        </h1>
      </Box>
      <Box id="homeTitle2">
        <h2>
          We will Help You!
        </h2>
      </Box>
      <Card id="mainCard" sx={{ boxShadow: 24 }}>
        <CardMedia
          id="imgCard"
          component="img"
          image={children}
          alt="childer"
        />
      </Card>
      <Link href="/products" style={{ textDecoration: 'none' }}>
        <Button id="seeButton" variant="outlined" sx={{ borderColor: "#e91e63" }}>
          See products
        </Button>
      </Link>
      <Box id="aboutP">
        <h2>About Us</h2>
      </Box>
      <Box id="aboutDescr">
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eos architecto placeat numquam dolorum. Nostrum soluta omnis numquam a, iusto excepturi laborum officia repudiandae repellat, maiores sit. Provident minus nulla eum reprehenderit expedita aut, tempore animi odio asperiores aspernatur nemo ratione quasi repellat maxime molestiae ullam reiciendis unde voluptates velit dolores accusamus ad? Maxime optio magnam adipisci quas ipsam impedit eveniet. Impedit debitis sapiente magni sit atque repudiandae reiciendis officia itaque et tenetur, iste laboriosam quam aliquam hic facilis suscipit id, maxime nam quidem delectus, dolor dicta exercitationem perferendis. Fugiat obcaecati exercitationem veritatis alias ipsam maiores nam suscipit doloribus doloremque asperiores, aspernatur animi blanditiis qui eum atque consequatur? Suscipit harum animi inventore nam ab eaque asperiores facilis non. Blanditiis eligendi impedit natus molestias, nihil alias possimus ratione unde cupiditate laudantium assumenda itaque necessitatibus harum deleniti. Natus est fuga illo, fugit, esse repellat tenetur sequi debitis obcaecati exercitationem laboriosam aspernatur, sapiente nemo. Necessitatibus, dolorum fugit reprehenderit deserunt deleniti, magni, neque eius quas dignissimos ullam pariatur eveniet nemo ipsum numquam repellendus. Vero illum asperiores nesciunt iusto quis labore tempore rerum deserunt, voluptatibus minus facere? Sequi, a. Tempore, exercitationem accusantium quae natus hic debitis ea corrupti esse quam quo recusandae minima non aliquam.
        </h3>
      </Box>
      <Box id="aboutT">
        <h2>Also We Have also different types of toys for your child!</h2>
      </Box>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="plushToys" control={<Radio />}>
          <Link href="/products?q=plushToys" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {first.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="toyCars" control={<Radio />}>
          <Link href="/products?q=toyCars" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {second.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="dolls" control={<Radio />}>
          <Link href="/products?q=dolls" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {third.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="educationalToys" control={<Radio />}>
          <Link href="/products?q=educationalToys" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {fourth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="robotics" control={<Radio />}>
          <Link href="/products?q=robotics" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {fifth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="forGirls" control={<Radio />}>
          <Link href="/products?q=forGirls" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {sixth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="forBoys" control={<Radio />}>
          <Link href="/products?q=forBoys" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {seventh.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="forLittleBabies" control={<Radio />}>
          <Link href="/products?q=forLittleBabies" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {eighth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="animeChibiDolls" control={<Radio />}>
          <Link href="/products?q=animeChibiDolls" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {nineth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
        <FormControl value="sportToys" control={<Radio />}>
          <Link href="/products?q=sportToys" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {tenth.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}>
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </Link>
        </FormControl>
      </RadioGroup>
      <Box id="offers">
        <h2>
          Do You Have Some Questions or Some Offers to Do Our Online Store Better?
        </h2>
      </Box>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <Box id="contText">
          <h2>
            Let's Contact Us!
          </h2>
        </Box>
      </Link>
   </Box> 
  );
}