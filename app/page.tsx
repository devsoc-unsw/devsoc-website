"use client";
import { AspectRatio, Card, Stack, Typography, useTheme } from "@mui/joy";
import React, { useEffect, useRef } from "react";
import { Box, Button, Link } from "@mui/material";
import { projectData } from "../data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCardProps } from "../components/ProjectCard";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../components/embla/EmblaCarouselArrowButtons";
import "./styles.css";
import { CustomCarousel } from "../components/carousel/CustomCarousel";

interface EventCardProp {
  title: string;
  href: string;
  dateTime: string;
  thumbnail: string;
  button: string;
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y", duration: 45 },
    [Autoplay({ delay: 5000 })]
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const displayProjects = projectData.filter(
    (x) => x.name !== "Chaos" && x.name !== "Jobsboard"
  );

  return (
    <Box className="homeContent">
      <Stack
        direction="column"
        pt={2}
        px={4}
        width="100%"
        maxWidth={1300}
        m="auto"
        overflow="hidden"
      >
        <Stack direction="column">
          <Box sx={{ width: "100%" }}>
            <Typography
              className={"heroText"}
              mt={3}
              fontSize={{ xs: "2rem", sm: "2.3rem", md: "3.2rem" }}
              fontWeight={500}
              component="div"
            >
              UNSW&apos;s Software Development Society
            </Typography>
            <Typography
              className={"heroText"}
              mt={0}
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
              fontWeight={200}
              component="div"
            >
              Run by devs, for devs
            </Typography>
          </Box>
        </Stack>
        <CustomCarousel />
        <Box
          ref={scrollRef}
          marginBottom={{ xs: "3rem", md: 0 }}
          marginTop={{ xs: "2rem", md: "2rem" }}
          sx={{
            display: "flex",
            overflowX: "auto",
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

const LinkCard: React.FC<
  Omit<ProjectCardProps, "trainee"> & { order: number }
> = ({ name, desc, logoUrl, thumbnailUrl, projectUrl, status, order }) => {
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
    <Link href={projectUrl}>
      <Card
        className="boxBackground"
        sx={{
          width: { xs: "100%", lg: "215px" },
          height: { xs: "5rem", lg: "86px" },
          backgroundColor: colors[order],
          boxShadow: "sm",
          padding: "1rem",
          flexDirection: "row",
          gap: "1.25rem",
          alignItems: "center",
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
