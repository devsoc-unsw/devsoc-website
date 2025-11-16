"use client";
import {
  AspectRatio,
  Card,
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 100px)",
          maxWidth: "100vw",
        }}
        padding={[5, 10]}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            fontSize={{ xs: "1.35rem", md: "2rem" }}
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
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            fontWeight={200}
            component="div"
          >
            Run by devs, for devs
          </Typography>
        </Box>
        <Box
          marginTop="2rem"
          sx={{
            display: "flex",
            overflowX: "auto",
            width: "100%",
          }}
        >
          <Stack
            spacing={{ xs: 2, md: 3 }}
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
  const colors = [
    "#142955ff",
    "#331d4dff",
    "#3a607bff",
    "#1d1850",
    "#582a19ff",
  ];
  return (
    <Link href={projectUrl} style={{ textDecoration: "none" }}>
      <Card
        className="boxBackground"
        sx={{
          width: { xs: "100%", lg: "180px" },
          height: { xs: "4rem", lg: "70px" },
          border: "1px solid transparent",
          backgroundColor: colors[order],
          padding: "1rem",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          "&:hover": {
            border: `1px white solid`,
          },
        }}
      >
        <AspectRatio ratio={1} sx={{ width: "2rem", minWidth: "2rem" }}>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={logoUrl ?? ""}
              alt={name}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: colors[order],
              }}
            />
          </Box>
        </AspectRatio>
        <Typography
          sx={{
            color: "#EDEEF0",
            fontSize: { xs: "1rem", lg: "1.25rem" },
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