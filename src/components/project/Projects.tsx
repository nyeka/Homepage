import React from "react";
import { Box, Typography } from "@mui/material";
import { Data } from "./data";

interface ItemProjectProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const ItemProject = ({ name, description, image, link }: ItemProjectProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f5",
        width: "320px",
        borderRadius: "8px",
      }}
    >
      <a href={link}>
        <img
          src={image}
          alt={description}
          style={{
            width: "100%",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
          }}
        />
      </a>
      <Typography
        variant="h6"
        sx={{
          padding: "2px 10px",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          padding: "3px 10px",
          color: "#000",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          padding: "24px",
          marginTop: "40px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          Projects
        </Typography>
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          {Data.map((item) => {
            return <ItemProject key={item.id} {...item} />;
          })}
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,106.7C480,107,549,117,617,101.3C685.7,85,754,43,823,42.7C891.4,43,960,85,1029,133.3C1097.1,181,1166,235,1234,213.3C1302.9,192,1371,96,1406,48L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Projects;
