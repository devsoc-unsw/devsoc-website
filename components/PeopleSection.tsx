"use client";

import { PersonProps, teamData } from "../teamData";
import React, { useEffect, useState } from "react";
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
  Slider,
} from "@mui/joy";

export const PeopleSection = () => {
  const [teamYear, setTeamYear] = useState(2025);
  const [subcommittee, setSubcommittee] = useState(
    teamData[teamYear]["subcommittees"][0]?.name
  );
  useEffect(() => {
    if (
      !teamData[teamYear]["subcommittees"].some((s) => s.name === subcommittee)
    ) {
      setSubcommittee(teamData[teamYear]["subcommittees"][0]?.name);
    }
  }, [teamYear]);

  const handleTeamYearChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    if (newValue) {
      setTeamYear(newValue);
    }
  };

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

  function valueText(value: number) {
    return value.toString();
  }
  return (
    <>
      <Slider
        aria-label="Always visible"
        defaultValue={2025}
        getAriaValueText={valueText}
        step={1}
        min={2018}
        max={2025}
        marks={years.map((year) => ({ value: year, label: `${year}` }))}
        color="devsoc_red"
        onChange={(e, year) => setTeamYear(!Array.isArray(year) ? year : 2025)}
      />
      <Typography level="h2" py={4} px={4}>
        {teamYear >= 2024 ? "DevSoc Executives" : null}
        {teamYear == 2023 ? "CSESoc Development Executives" : null}
        {teamYear <= 2022 ? "CSESoc Development Directors" : null}
      </Typography>
      <Stack
        direction="row"
        columnGap={2}
        rowGap={3}
        flexWrap="wrap"
        justifyContent="center"
      >
        {teamData[teamYear].executives.map((props) => (
          <Person {...props} key={props.name} />
        ))}
      </Stack>
      {subcommittee ? (
        <Typography level="h2" pt={4} pb={1} px={4}>
          Teams
        </Typography>
      ) : null}
      {teamData[teamYear]["subcommittees"].length > 0 ? (
        <>
          <Box
            mx={4}
            mb={2}
            pt={1}
            sx={{
              overflowX: "scroll",
              scrollbarWidth: "thin",
              scrollbarColor: "#232323 transparent",
            }}
          >
            <ToggleButtonGroup
              aria-label="outlined primary button group"
              buttonFlex={1}
              value={subcommittee}
              onChange={(event, newValue) => {
                newValue ? setSubcommittee(newValue) : null;
              }}
            >
              {teamData[teamYear]["subcommittees"].map((s) => {
                return (
                  <Button value={s.name} key={s.name}>
                    {s.name}
                  </Button>
                );
              })}
            </ToggleButtonGroup>
          </Box>
          {teamData[teamYear].subcommittees
            .filter((s) => s.name == subcommittee)
            .map((props) => (
              <SubcommitteeList {...props} key={props.name} />
            ))}
        </>
      ) : null}
    </>
  );
};

export interface ExecProps {
  name: string;
  title: string;
  imgUrl?: string;
}

const Person: React.FC<ExecProps> = ({ name, title, imgUrl }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      width={{ xs: "100%", sm: "30%", md: "23%" }}
      textAlign="center"
    >
      <AspectRatio
        ratio="1"
        sx={{ width: { xs: "50%", sm: "80%" }, borderRadius: "50%", mb: 1 }}
      >
        {imgUrl ? (
          <Image fill alt={`Photo of ${name}`} src={imgUrl} />
        ) : (
          <Skeleton variant="overlay">
            <Image
              fill
              alt={`Placeholder for photo of ${name}`}
              src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            />
          </Skeleton>
        )}
      </AspectRatio>
      <Typography level="title-lg">{name}</Typography>
      <Typography>{title}</Typography>
    </Stack>
  );
};

const SubcommitteeList: React.FC<{
  name: string;
  directors: PersonProps[];
  subcommittee: PersonProps[];
  other?: { role: string; people: PersonProps[] }[];
}> = ({ name: string, directors, subcommittee, other }) => {
  return (
    <>
      <Box px={3}>
        <List
          sx={{
            "--ListItemDecorator-size": "56px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 1,
          }}
        >
          {directors.map((props) => {
            return (
              <TeamListItem
                name={props.name}
                imgUrl={props.imgUrl}
                title="Director"
                key={props.name}
              />
            );
          })}
          {subcommittee.map((props) => {
            return (
              <TeamListItem
                name={props.name}
                imgUrl={props.imgUrl}
                title="Subcommittee"
                key={props.name}
              />
            );
          })}
          {other &&
            other.map(({ role, people }) => {
              return people.map((props) => (
                <TeamListItem
                  name={props.name}
                  imgUrl={props.imgUrl}
                  title={role}
                  key={props.name}
                />
              ));
            })}
        </List>
      </Box>
    </>
  );
};

interface TeamListItemProps {
  name: string;
  imgUrl: string | undefined;
  title: string;
}
const TeamListItem = (props: TeamListItemProps) => {
  return (
    <ListItem>
      <ListItemDecorator>
        <Avatar src={`https://github.com/${props.imgUrl}.png`} />
      </ListItemDecorator>
      <ListItemContent>
        <Typography level="title-sm">{props.name}</Typography>
        <Typography level="body-sm" noWrap>
          {props.title}
        </Typography>
      </ListItemContent>
    </ListItem>
  );
};
