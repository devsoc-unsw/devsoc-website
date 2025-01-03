'use client'
import { AspectRatio, Card, Stack, Typography, useTheme } from '@mui/joy';
import React, { useEffect, useRef } from 'react';
import { Box, Button, Link } from "@mui/material";
import { projectData } from '../data';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCardProps } from "../components/ProjectCard";
import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from "../components/embla/EmblaCarouselArrowButtons";
import "./styles.css"
import { useMediaQuery } from "@mui/system";
import { CustomCarousel } from '../components/carousel/CustomCarousel';

interface EventCardProp {
  title: string;
  href: string;
  dateTime: string;
  thumbnail: string;
  button: string;
}

const eventContent: EventCardProp[] = [
  {
    title: "Clubs Takeover",
    href: "https://www.facebook.com/events/1586760535262553/",
    dateTime: "12-2PM October 22nd 2024",
    thumbnail: "",
    button: "View event"
  },
  {
    title: "Techspire",
    href: "https://techspire.devsoc.app/",
    dateTime: "3PM November 5th 2024",
    thumbnail: "",
    button: "Find out more"
  },
]

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y', duration: 45 }, [Autoplay({delay: 5000})]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const displayProjects = projectData.filter(x => x.name !== "Chaos" && x.name !== "Jobsboard")

  useEffect(() => {
    const handleScroll = (e: { deltaY: any; }) => {
      if (scrollRef.current) {
        // Adjust the scroll position of the div based on the window's scroll position
        scrollRef.current.scrollLeft += e.deltaY; // or adjust based on scroll direction
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Box className="homeContent">
      <Stack direction="column" pt={2} px={4} width="100%" maxWidth={1300} m="auto" overflow="hidden">
        <Stack direction="column">
          <Box sx={{width: "100%"}}>
            <Typography className={"heroText"} mt={3} fontSize={{xs: "2rem", sm: "2.3rem", md: "3.2rem"}}
                        fontWeight={500} component='div'>
              UNSW&apos;s software development society
            </Typography>
            <Typography className={"heroText"} mt={0} fontSize={{xs: "1.5rem", sm: "2rem", md: "2.5rem"}} fontWeight={200}
                        component='div'>
              Run by devs, for devs
            </Typography>
          </Box>
        </Stack>
        {/* <Box sx={{display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center"}} mt={{xs: 2, md: 0}}>
          <Typography
            paddingTop={{xs: 1, md: 3}}
            paddingBottom={{xs: 1, md: 3}}
            fontSize={{xs: 20, md: 30}}
            fontWeight={600}
          >
            Highlights
          </Typography>
        </Box> */}
        <CustomCarousel/>
        <Box
          ref={scrollRef}
          marginBottom={{xs: "3rem", md: 0}}
          marginTop={{xs: "2rem", md: "3rem"}}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          <Stack
            spacing={{xs: 3, md: 5}}
            direction={{xs: "column", md: "row"}}
            sx={{display: "flex", width: '100%'}}
            flexDirection={{xs: "column", md: "row"}}
          >
            {displayProjects.map((props, idx) => <LinkCard key={props.name} {...props} order={idx}/>)}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}


const Slide: React.FC<EventCardProp> = ({
  title,
  href,
  dateTime,
  thumbnail,
  button
}) => {
  let color = "#111111";
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Card
      className="embla__slide"
      sx={{
        height: {xs: "200px", md: "500px"},
        backgroundColor: color,
        borderRadius: 0,
        padding: thumbnail && isMdUp ? '2rem 1rem' : {xs: '1rem', md: '2rem'},
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none'
      }}
    >
      <Box sx={{display: "flex", flexDirection: "row", gap: "2rem"}}>
        {
          thumbnail && isMdUp ? <Image width={170} height={90} src={thumbnail} alt={title}/> : null
        }
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Typography
            sx={{
              color: "#EDEEF0",
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 500,
              alignSelf: "flex-start",
              justifySelf: "center"
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#EDEEF0",
              alignSelf: "flex-start",
              justifySelf: "center"
            }}
          >
            {dateTime}
          </Typography>
        </Box>
      </Box>
      {
        button ?
          <Link href={href} sx={{ textDecoration: 'none' }}>
            <Button variant="soft">{button}</Button>
          </Link> : null
      }
    </Card>
  )
}


const HighlightLinkCard: React.FC<EventCardProp> = ({
  title,
  href,
  dateTime,
  thumbnail,
  button
}) => {
  let color = "#111111";
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Card
      className="embla__slide"
      sx={{
        height: {xs: "90px", md: "100px"},
        backgroundColor: color,
        borderRadius: 0,
        padding: thumbnail && isMdUp ? '2rem 1rem' : {xs: '1rem', md: '2rem'},
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none'
      }}
    >
      <Box sx={{display: "flex", flexDirection: "row", gap: "2rem"}}>
        {
          thumbnail && isMdUp ? <Image width={170} height={90} src={thumbnail} alt={title}/> : null
        }
        <Box sx={{display: "flex", flexDirection: "column"}}>
          <Typography
            sx={{
              color: "#EDEEF0",
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 500,
              alignSelf: "flex-start",
              justifySelf: "center"
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#EDEEF0",
              alignSelf: "flex-start",
              justifySelf: "center"
            }}
          >
            {dateTime}
          </Typography>
        </Box>
      </Box>
      {
        button ?
          <Link href={href} sx={{ textDecoration: 'none' }}>
            <Button variant="soft">{button}</Button>
          </Link> : null
      }
    </Card>
  )
}

const LinkCard: React.FC<Omit<ProjectCardProps, "trainee"> & { order: number }> = ({
  name,
  desc,
  logoUrl,
  thumbnailUrl,
  projectUrl,
  status,
  order
}) => {
  // Class 3 colors sourced from https://www.radix-ui.com/colors
  const colors = ["#182449", "#0D2847", "#202248", "#351A35", "#391714", "#291F43", "#222222"]
  return (
    <Link href={projectUrl}>
      <Card
        className="boxBackground"
        sx={{
          width: { xs: "100%", md: "250px" },
          height: { xs: "5rem", md: "100px" },
          backgroundColor: colors[order],
          boxShadow: 'sm',
          padding: '1rem',
          flexDirection: 'row',
          gap: '2rem',
          alignItems: 'center',
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
            fontSize: {xs: '1.5rem', sm: '1.75rem', md: '1.5rem'},
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </Card>
    </Link>
  )
}

