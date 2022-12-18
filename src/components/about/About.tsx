import React from "react";
import { Box, Typography } from "@mui/material";
import me from "../../images/nyoman.png";
import "./style.scss";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "40px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">About Me</Typography>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <img
            src={me}
            alt="its me"
            style={{
              borderRadius: "50%",
              width: "250px",
              backgroundColor: "#333",
            }}
          />
          <Box
            className="about__text"
            sx={{
              width: "60%",
            }}
          >
            <Typography>
              Informatics Engineering student at Lampung University, Indonesia.
              my interest in programming is in the field of web development,
              especially in the field of front-end development. I am currently
              learning React JS and iam intereseted in javascript ecosystem. i
              am also interested in information and technology development.
            </Typography>
          </Box>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,181.3C672,192,768,160,864,165.3C960,171,1056,213,1152,192C1248,171,1344,85,1392,42.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default About;
