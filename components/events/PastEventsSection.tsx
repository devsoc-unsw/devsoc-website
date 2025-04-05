'use client';
import React, { useState, useEffect } from 'react';
import { Slider, Typography, Grid } from '@mui/joy';
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

export default function PastEventsSection() {
  const [events, setEvents] = useState<EventsByTerm>(eventsData[2025]);
  const [year, setYear] = useState<number>(2025);
  const years = [2025, 2024];

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setYear(newValue);
    }
  };

  useEffect(() => {
    setEvents(eventsData[year]);
  }, [year]);

  const formatTerm = (term: string): string => {
    return 'Term ' + term.charAt(1);
  };

  return (
    <>
      <Slider
        aria-label="Always visible"
        defaultValue={2025}
        step={1}
        min={2024}
        max={2025}
        color="devsoc_red"
        onChange={handleSliderChange}
        marks={years.map((year) => ({ value: year, label: `${year}` }))}
      />
      {Object.keys(events).map((termKey, index) => (
        <div key={index}>
          {events[termKey].length === 0 ? null : (
            <Typography level="h3" pb={2} pt={4}>
              {formatTerm(termKey)}
            </Typography>
          )}
          <Grid container spacing={2}>
            {events[termKey].map((event, eventIndex) => (
              event.blurb ? null : (
                <Grid 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  key={eventIndex} 
                  component="div" 
                  sx={{
                    "&:hover": {
                      backgroundColor: "#32383E", 
                      borderRadius: "5px",
                    },
                  }}
                >
                  <div
                    onClick={() =>
                      window.open(`https://www.facebook.com/events/${event.eventId}`, '_blank')
                    }
                    style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
                  >
                    <Image
                      src={event.url}
                      alt={`Event ${eventIndex}`}
                      fill
                      style={{
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                </Grid>
              )
            ))}
          </Grid>
        </div>
      ))}
    </>
  );
}