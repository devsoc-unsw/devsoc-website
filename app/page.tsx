"use client";
import {
  AspectRatio,
  Button,
  Card,
  Snackbar,
  Stack,
  Typography,
} from "@mui/joy";
import { Box, Link } from "@mui/material";
import { CardType } from "../components/ProjectCard";
import Image from "next/image";
import "./styles.css";
import { flagshipProjectData } from "../data/project";

export default function Home() {
  const displayProjects = flagshipProjectData.filter(
    (x) => x.name !== "Chaos" && x.name !== "Jobsboard"
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100%"
    >
      <GradientBlob />
      <Stack
        sx={{
          position: "relative",
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 75px)",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            fontSize={{ xs: "2rem", sm: "2.3rem", md: "3rem" }}
            fontWeight={600}
            component="div"
            sx={{ color: "white" }}
          >
            UNSW&apos;s
            <br />
            Software Development Society
          </Typography>
          <Typography
            mt={2}
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
            fontWeight={200}
            component="div"
          >
            Run by devs, for devs
          </Typography>
        </Box>
        <Box
          marginBottom={{ xs: "3rem", md: 0 }}
          marginTop={{ xs: "2rem", md: "2rem" }}
          sx={{
            display: "flex",
            overflowX: "auto",
            width: "100%",
          }}
        >
          <Stack
            spacing={{ xs: 3, lg: 5 }}
            direction={{ xs: "column", lg: "row" }}
            sx={{ display: "flex", width: "100%" }}
            flexDirection={{ xs: "column", lg: "row" }}
          >
            {displayProjects.map((props, idx) => (
              <LinkCard key={props.name} {...props} order={idx} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

const LinkCard: React.FC<Omit<CardType, "trainee"> & { order: number }> = ({
  name,
  logoUrl,
  projectUrl,
  order,
}) => {
  // Class 3 colors sourced from https://www.radix-ui.com/colors
  const colors = [
    "#182449",
    "#0D2847",
    "#202248",
    "#351A35",
    "#391714",
    "#291F43",
    "#222222",
  ];
  return (
    <Link href={projectUrl} style={{ textDecoration: "none" }}>
      <Card
        className="boxBackground"
        sx={{
          width: { xs: "100%", lg: "210px" },
          height: { xs: "5rem", lg: "86px" },
          borderColor: colors[order],
          backgroundColor: colors[order],
          padding: "1rem 2rem",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover": {
            border: "2px grey solid",
          },
        }}
      >
        <AspectRatio objectFit="contain" ratio={1} sx={{ width: "3rem" }}>
          <Image
            fill
            alt={name}
            src={logoUrl ?? ""}
            style={{ backgroundColor: colors[order] }}
          />
        </AspectRatio>
        <Typography
          sx={{
            color: "#EDEEF0",
            fontSize: { xs: "1.5rem", lg: "1.25rem" },
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </Card>
    </Link>
  );
};

const GradientBlob = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "10%",
        width: "40vw",
        height: "50vh",
        background: "url('/home/gradient.svg') no-repeat center center",
        backgroundSize: "150%",
        filter: "blur(110px)",
        zIndex: -1,
        animation: "ripple 5s ease-in-out infinite",
      }}
    >
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: translateY(-50%) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-50%) scale(1.2);
              opacity: 0.3;
            }
            100% {
              transform: translateY(-50%) scale(1);
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
};
