'use client'

import {PersonProps, teamData} from "../data";
import React, {useState} from "react";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
  Avatar,
  AspectRatio,
  Box,
  Option,
  Select,
  Skeleton,
  Stack,
  Typography,
  ButtonGroup,
  Button
} from "@mui/joy";

export const PeopleSection = () => {
  const [teamYear, setTeamYear] = useState(2024);
  const [subcommittee, setSubcommittee] = useState("Chaos");
  const handleTeamYearChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    if (newValue) {
      setTeamYear(parseInt(newValue));
    }
  };

  return (
    <>
      <Box sx={{width: { xs: '85%', sm: 200}, margin: {xs: "auto", sm: 0}, marginLeft: {sm: "auto"}}}>
        <Select defaultValue="2024" onChange={handleTeamYearChange}>
          <Option value="2024">2024</Option>
          <Option value="2023">2023</Option>
          <Option value="2022">2022</Option>
          <Option value="2021">2021</Option>
          <Option value="2020">2020</Option>
          <Option value="2019">2019</Option>
          <Option value="2018">2018</Option>
        </Select>
      </Box>
      <Typography level="h2" py={4} px={4}>
        {teamYear >= 2024 ? "DevSoc Executives" : null}
        {teamYear == 2023 ? "CSESoc Development Executives" : null}
        {teamYear == 2022 ? "CSESoc Development Directors" : null}
      </Typography>
      <Stack direction='row' columnGap={2} rowGap={3} flexWrap="wrap" justifyContent="center">
        {teamData[teamYear].executives.map((props) => <Person {...props} key={props.name}/>)}
      </Stack>
      <Typography level="h2" pt={4} pb={1} px={4}>
        Teams
      </Typography>
      <Box mx={4} pb={2} pt={1} sx={{overflowX:"scroll", scrollbarWidth: "none"}}>
        <ButtonGroup aria-label="outlined primary button group" buttonFlex={1}>
          <Button color="neutral" variant={subcommittee === 'Chaos' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Chaos')}>Chaos</Button>
          <Button color="neutral" variant={subcommittee === 'Circles' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Circles')}>Circles</Button>
          <Button color="neutral" variant={subcommittee === 'Freerooms' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Freerooms')}>Freerooms</Button>
          <Button color="neutral" variant={subcommittee === 'Jobsboard' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Jobsboard')}>Jobsboard</Button>
          <Button color="neutral" variant={subcommittee === 'Notangles' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Notangles')}>Notangles</Button>
          <Button color="neutral" variant={subcommittee === 'Structs' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Structs')}>Structs</Button>
          {
            teamYear >= 2024 ? <>
              <Button color="neutral" variant={subcommittee === 'Marketing' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Marketing')}>Marketing</Button>
              <Button color="neutral" variant={subcommittee === 'HR' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('HR')}>HR</Button>
              <Button color="neutral" variant={subcommittee === 'Unilectives' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Unilectives')}>Unilectives</Button>
            </> : null
          }
          {
            teamYear == 2023 ? <>
              <Button color="neutral" variant={subcommittee === 'CSElectives' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('CSElectives')}>CSElectives</Button>
              <Button color="neutral" variant={subcommittee === 'Discord Bot' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Discord Bot')}>Discord&nbsp;Bot</Button>
              <Button color="neutral" variant={subcommittee === 'Website' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Website')}>Website</Button>
              <Button color="neutral" variant={subcommittee === 'Culture' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Culture')}>Culture</Button>
              <Button color="neutral" variant={subcommittee === 'Content' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Content')}>Content</Button>
              <Button color="neutral" variant={subcommittee === 'Education' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Education')}>Education</Button>
              <Button color="neutral" variant={subcommittee === 'Architects' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Architects')}>Architects</Button>
            </> : null
          }
          <Button color="neutral" variant={subcommittee === 'UIUX' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('UIUX')}>UI/UX</Button>
          <Button color="neutral" variant={subcommittee === 'Platform' ? 'solid' : 'outlined'} onClick={() => setSubcommittee('Platform')}>Platform</Button>
        </ButtonGroup>
      </Box>
      {
        teamData[teamYear].subcommittees.filter(s => s.name == subcommittee).map((props) => <SubcommitteeList {...props} key={props.name}/>)
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