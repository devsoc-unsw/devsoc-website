import React from "react";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Image from "next/image";
import { Button, CardActions, Sheet } from "@mui/material";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { OpenInNew } from "@mui/icons-material";

interface CardPropsImpl {
  name: string;
  desc: string;
  logoUrl?: string;
  thumbnailUrl: string;

  showButton?: boolean;
  buttonTextWithUrl?: string;
  buttonTextNoUrl?: string;
  projectUrl?: string;

  status?: "Operational" | "Unavailable";
}

export type CardType = {
  name: string;
  desc: string;
  projectUrl?: string;
  logoUrl?: string;
  thumbnailUrl: string;
  status?: "Operational" | "Unavailable";
};

export const ProjectCard: React.FC<CardType> = (props: CardType) => {
  return <ProjectCardImpl {...props} />;
};

export const TraineeCard: React.FC<CardType> = (props: CardType) => {
  return <ProjectCardImpl {...props} buttonTextWithUrl={"Check it out"} />;
};

export const TechspireCard: React.FC<CardType> = (props: CardType) => {
  return <ProjectCardImpl {...props} showButton={false} />;
};

const ProjectCardImpl: React.FC<CardPropsImpl> = ({
  name,
  desc,
  logoUrl,
  thumbnailUrl,
  projectUrl,
  showButton = true,
  buttonTextWithUrl = "Visit Now",
  buttonTextNoUrl = "Coming Soon",
}) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: { xs: "100%", md: "95%" }, height: "100%", mx: "auto" }}
    >
      <CardOverflow>
        <AspectRatio ratio="5/2" objectFit="cover">
          <Image fill src={thumbnailUrl} alt="" />
        </AspectRatio>
        {logoUrl && (
          <Sheet
            variant="soft"
            sx={{
              boxShadow: "sm",
              width: 50,
              height: 50,
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "0.8rem",
              bottom: "-1.5rem",
            }}
          >
            <AspectRatio
              ratio="1"
              variant="plain"
              objectFit="contain"
              sx={{
                position: "relative",
                transform: "translateY(30%)",
                margin: "auto",
                width: "60%",
              }}
            >
              <Image fill src={logoUrl} alt="" />
            </AspectRatio>
          </Sheet>
        )}
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm" style={{ whiteSpace: "pre-line" }}>
          {desc}
        </Typography>
      </CardContent>
      {showButton ? (
        <CardActions buttonFlex="1">
          <Button
            component="a"
            disabled={!projectUrl}
            href={projectUrl}
            target="_blank"
            startDecorator={projectUrl && <OpenInNew />}
          >
            {projectUrl ? buttonTextWithUrl : buttonTextNoUrl}
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};
