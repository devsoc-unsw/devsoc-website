'use client'

import {PersonProps, teamData} from "../data";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
  Avatar,
  AspectRatio,
  Box,
  Skeleton,
  Stack,
  Typography,
  ToggleButtonGroup,
  Button,
  Slider
} from "@mui/joy";

export const PeopleSection = () => {
  const [teamYear, setTeamYear] = useState(2024);
  const [subcommittee, setSubcommittee] = useState(teamData[teamYear]["subcommittees"][0]?.name);
  useEffect(() => {
    setSubcommittee(teamData[teamYear]["subcommittees"][0]?.name);
  }, [teamYear]);
  const handleTeamYearChange = (
    event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    if (newValue) {
      setTeamYear(newValue);
    }
  };
  const years = [
    {
      value: 2024,
      label: "2024"
    },
    {
      value: 2023,
      label: "2023"
    },
    {
      value: 2022,
      label: "2022"
    },
    {
      value: 2021,
      label: "2021"
    },
    {
      value: 2020,
      label: "2020"
    },
    {
      value: 2019,
      label: "2019"
    },
    {
      value: 2018,
      label: "2018"
    }
  ]
  function valueText(value: number) {
    return value.toString();
  }
  return (
    <>
      <Slider
        aria-label="Always visible"
        defaultValue={2024}
        getAriaValueText={valueText}
        step={1}
        min={2018}
        max={2024}
        marks={years}
        color="devsoc_red"
        onChange={(e, year) => setTeamYear(!Array.isArray(year) ? year : 2024)}
      />
      <Typography level="h2" py={4} px={4}>
        {teamYear >= 2024 ? "DevSoc Executives" : null}
        {teamYear == 2023 ? "CSESoc Development Executives" : null}
        {teamYear <= 2022 ? "CSESoc Development Directors" : null}
      </Typography>
      <Stack direction='row' columnGap={2} rowGap={3} flexWrap="wrap" justifyContent="center">
        {teamData[teamYear].executives.map((props) => <Person {...props} key={props.name}/>)}
      </Stack>
      {
        subcommittee ?
          <Typography level="h2" pt={4} pb={1} px={4}>
            Teams
          </Typography>
          : null
      }
      {
        teamData[teamYear]["subcommittees"].length > 0 ? <>
          <Box mx={4} mb={2} pt={1} sx={{overflowX:"scroll", scrollbarWidth: "thin", scrollbarColor: "#232323 transparent"}}>
            <ToggleButtonGroup aria-label="outlined primary button group" buttonFlex={1} value={subcommittee} onChange={(event, newValue)=> {
              newValue ? setSubcommittee(newValue) : null
            }}>
              {
                teamData[teamYear]["subcommittees"].map((s) => {
                  return <Button value={s.name} key={s.name}>{s.name}</Button>
                })
              }
            </ToggleButtonGroup>
          </Box>
          {
            teamData[teamYear].subcommittees.filter(s => s.name == subcommittee).map((props) => <SubcommitteeList {...props} key={props.name}/>)
          }
        </> : null
      }
    </>
  )
}

export interface ExecProps {
  name: string;
  title: string;
  imgUrl?: string;
}

const Person: React.FC<ExecProps> = ({ name, title, imgUrl }) => {
  return (
    <Stack
      direction='column'
      alignItems='center'
      width={{ xs: "100%", sm: "30%", md: "23%" }}
      textAlign="center"
    >
      <AspectRatio ratio="1" sx={{ width: { xs: "50%", sm: "80%"}, borderRadius: "50%", mb: 1 }}>
        {imgUrl
          ? (
            <Image
              fill
              alt={`Photo of ${name}`}
              src={imgUrl}
            />
          ) : (
            <Skeleton variant="overlay">
              <Image
                fill
                alt={`Placeholder for photo of ${name}`}
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          )
        }
      </AspectRatio>
      <Typography level="title-lg">
        {name}
      </Typography>
      <Typography>
        {title}
      </Typography>
    </Stack>
  )
};

const SubcommitteeList: React.FC<{ name: string, directors: PersonProps[], subcommittee: PersonProps[] }> = ({name: string, directors, subcommittee}) => {
  return (
    <>
      <Box px={3}>
        <List
          sx={{
            '--ListItemDecorator-size': '56px',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)'
            },
            gap: 1,
          }}
        >
          {
            directors.map((props) => {
              return (
                <ListItem key={props.name}>
                  <ListItemDecorator>
                    <Avatar src={`https://github.com/${props.imgUrl}.png`} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level="title-sm">{props.name}</Typography>
                    <Typography level="body-sm" noWrap>
                      Director
                    </Typography>
                  </ListItemContent>
                </ListItem>
              )
            })
          }
          {
            subcommittee.map((props) => {
              return (
                <ListItem key={props.name}>
                  <ListItemDecorator>
                    <Avatar src={`https://github.com/${props.imgUrl}.png`} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level="title-sm">{props.name}</Typography>
                    <Typography level="body-sm" noWrap>
                      Subcommittee
                    </Typography>
                  </ListItemContent>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    </>
  )
}