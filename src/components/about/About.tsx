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
            marginTop: "20px",
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
              <br /> <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur autem recusandae quidem provident rerum voluptates eos
              ex veniam consectetur, non corrupti nostrum maxime numquam modi,
              accusantium neque expedita dolorem earum? Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ad modi blanditiis earum
              voluptatem laudantium quasi optio temporibus quidem provident
              exercitationem, ea atque, doloremque nesciunt quos praesentium
              voluptas, tempora fuga recusandae! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo officiis laborum consectetur
              fugiat accusamus explicabo quis doloremque sint velit, nam
              deserunt sed temporibus quos hic molestiae dolor aliquid ducimus
              similique?
            </Typography>
          </Box>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,160L20,176C40,192,80,224,120,234.7C160,245,200,235,240,192C280,149,320,75,360,69.3C400,64,440,128,480,138.7C520,149,560,107,600,117.3C640,128,680,192,720,218.7C760,245,800,235,840,224C880,213,920,203,960,176C1000,149,1040,107,1080,85.3C1120,64,1160,64,1200,96C1240,128,1280,192,1320,192C1360,192,1400,128,1420,96L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default About;
