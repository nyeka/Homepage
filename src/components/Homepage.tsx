import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Homepage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Typography>Hai, I'am</Typography>
        <Typography variant="h4">Nyoman Eka Swardita</Typography>
        <Typography variant="h6">React Developer</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <GitHubIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
