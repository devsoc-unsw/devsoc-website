'use client';
import React from 'react';
import { Grid, Typography } from '@mui/joy';
import Image from 'next/image';
import { eventsData } from '../../data';

interface EventData {
  eventId: number;
  url: string;
  blurb?: string;
}

interface EventsByTerm {
  [term: string]: EventData[];
}

export default function CurEventSection() {
  const events = eventsData[2025] as EventsByTerm;

  return (
    <>
      {Object.keys(events).map((termKey, index) => (
        <div key={index}>
          <Grid container spacing={2}>
            {events[termKey].map((event, eventIndex) =>
              event.blurb ? (
                <Grid
                  key={eventIndex}
                  container
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  component="div"
                  onClick={() =>
                    window.open(`https://www.facebook.com/events/${event.eventId}`, '_blank')
                  }
                  sx={{
                    "&:hover": {
                      backgroundColor: "#32383E", 
                      borderRadius: "10px",

                    },
                    marginTop: 1,
                  }}
                >
                  <Grid xs={12} sm={6} component="div" pt={2}>
                    <Image
                      src={event.url}
                      alt={`Event ${eventIndex}`}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} component="div">
                    <Typography>
                      {event.blurb.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {event.blurb && index < event.blurb.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null
            )}
          </Grid>
        </div>
      ))}
    </>
  );
}
