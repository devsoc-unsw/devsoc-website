'use client'
import { AspectRatio, Card, Stack, Typography } from '@mui/joy';
import React, { useEffect, useRef } from 'react';
import {Box, Button, Link} from "@mui/material";
import { projectData } from '../data';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProjectCardProps } from "../components/ProjectCard";
import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from "../components/embla/EmblaCarouselArrowButtons";

interface EventCardProp {
  title: string;
  href: string;
  dateTime: string;
  thumbnail: string;
  button: string;
}

const eventContent: EventCardProp[] = [
  {
    title: "Techspire",
    href: "https://techspire.devsoc.app/",
    dateTime: "3PM November 5th 2024",
    thumbnail: "",
    button: "Find out more"
  },
  {
    title: "Starlight",
    href: "",
    dateTime: "4PM July 19th 2024",
    thumbnail: "https://scontent.fsyd10-2.fna.fbcdn.net/v/t39.30808-6/450537584_122164728770084186_5143471664708121664_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=75d36f&_nc_ohc=VS3ZyeU4mFsQ7kNvgEImebz&_nc_ht=scontent.fsyd10-2.fna&_nc_gid=AF9I6lbtXbrba9iXodyqkhu&oh=00_AYBQh_N8wIjV_YiH1YkMIw4XfpuOUfHr60Vs_dGTFR6ibQ&oe=66F85975",
    button: "View pictures"
  },
  {
    title: "T3 O-Week",
    href: "",
    dateTime: "September 2 - 6th",
    thumbnail: "",
    button: "Facebook Event"
  },
  {
    title: "T2 O-Week",
    href: "",
    dateTime: "May 20 - 24th",
    thumbnail: "",
    button: "Facebook Event"
  },
  {
    title: "T1 O-Week",
    href: "",
    dateTime: "February 5 - 9th",
    thumbnail: "",
    button: "Facebook Event"
  }
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Stack direction="column">
        <Box sx={{width: "100%"}}>
          <Typography className={"heroText"} mt={3} fontSize={{xs: "1.6rem", sm: "2.3rem", md: "3.2rem"}}
                      fontWeight={500} component='div'>
            UNSW's student developer society
          </Typography>
          <Typography className={"heroText"} mt={0} fontSize={{xs: "1rem", sm: "2rem", md: "2.5rem"}} fontWeight={200}
                      component='div'>
            Run by devs, for devs
          </Typography>
        </Box>
      </Stack>
      <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
        <Typography
          paddingTop={3}
          paddingBottom={3}
          fontSize={30}
          fontWeight={600}
          sx={{alignSelf: 'center'}}
        >
          Highlights
        </Typography>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
          </div>
        </div>
      </Box>
      <Card
        ref={emblaRef}
        className="embla"
        sx={{padding: 0}}
      >
        <Stack className="embla__container">
          {eventContent.map((props, idx) => <HighlightLinkCard key={`event ${props.title}`} {...props}/>)}
        </Stack>
      </Card>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          marginTop: '3rem',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}
      >
        <Stack
          spacing={5}
          direction="row"
        >
          {projectData.map((props, idx) => <NewLinkCard key={props.name} {...props} order={idx + 1}/>)}
        </Stack>
      </Box>
    </Box>
  )
}

const HighlightLinkCard: React.FC<EventCardProp> = ({
                                                      title,
                                                      href,
                                                      dateTime,
                                                      thumbnail,
                                                      button
                                                    }) => {
  let color = "#191919";
  return (
    <Card
      className="embla__slide"
      sx={{
        height: {xs: "1.6rem", sm: "2.3rem", md: "100px"},
        backgroundColor: color,
        borderRadius: 0,
        padding: thumbnail === "" ? '2rem' : '2rem 1rem',
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none'
      }}
    >
      <Box sx={{display: "flex", flexDirection: "row", gap: "2rem"}}>
        {
          thumbnail !== "" ? <Image width={170} height={90} src={thumbnail} alt={title}/> : null
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
      <Link href={href} sx={{ textDecoration: 'none' }}>
        <Button variant="soft">{button}</Button>
      </Link>
    </Card>
  )
}

const NewLinkCard: React.FC<Omit<ProjectCardProps, "trainee"> & { order: number }> = ({
  name,
  desc,
  logoUrl,
  thumbnailUrl,
  projectUrl,
  status,
  order
}) => {
  let color = "#212225";
  switch (order) {
    case 1:
      color = "#182449"; // Indigo 3 - Notangles
      break;
    case 2:
      color = "#0D2847"; // Blue 3 - Circles
      break;
    case 3:
      color = "#202248"; // Iris 3 - Unilectives
      break;
    case 4:
      color = "#351A35"; // Plum 3 - Structs
      break;
    case 5:
      color = "#391714"; // Tomato 3 - Freerooms
      break;
    case 6:
      color = "#291F43"; // Violet 3 - Jobsboard
      break;
    case 7:
      color = "#222222"; // Gray 3 - Chaos
      break;
  }
  return (
    <Card
      className="boxBackground"
      sx={{
        width: { xs: "1.6rem", sm: "2.3rem", md: "250px" },
        height: { xs: "1.6rem", sm: "2.3rem", md: "100px" },
        backgroundColor: color,
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
          style={{ backgroundColor: color }}
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
  )
}

