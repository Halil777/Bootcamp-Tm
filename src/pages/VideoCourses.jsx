import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import Spacer from "../components/Spacer.jsx";
import { videoTitle } from "../style/videoStyle.mjs";

const VideoCourses = () => {
  return (
    <div>
      <Container>
        <Stack direction="row" justifyContent={"center"}>
          <Typography sx={videoTitle}>Web development video course</Typography>
        </Stack>
        <Spacer count={3} />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            {/* <ReactPlayer
              width={"100%"}
              height={"200px"}
              style={{ borderRadius: "10px" }}
              controls
              url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VideoCourses;

//  const [randomNumber, setRandomNumber] = useState(null);

//  useEffect(() => {
//    const interval = setInterval(() => {
//      const newRandomNumber = Math.random() + 40; // Generate a random number between 40 and 41
//      setRandomNumber(newRandomNumber.toFixed(2)); // Limit the number of decimal places to 2
//    }, 10000); // 10 seconds in milliseconds

//    return () => clearInterval(interval);
//  }, []);

// const [randomNumber, setRandomNumber] = useState(null);

// useEffect(() => {
//   const interval = setInterval(() => {
//     const newRandomNumber = Math.floor(Math.random() * 6) + 40; // Generate a random number between 40 and 45
//     setRandomNumber(newRandomNumber);
//   }, 10000); // 10 seconds in milliseconds

//   return () => clearInterval(interval);
// }, []);
