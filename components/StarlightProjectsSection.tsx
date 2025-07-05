"use client";

import React, { useState } from 'react';
import { Grid, Slider, Box } from '@mui/joy';
import { ProjectCard } from "./ProjectCard";
import PageSection from "./PageSection";
import { starlightProjectData } from "../data";

const years = [2025, 2024];

export function StarlightProjectsSection() {
    const [selectedYear, setSelectedYear] = useState<number>(2025);

    const handleYearChange = (event: any, newValue: number | number[]) => {
        setSelectedYear(newValue as number);
    };

    const valueText = (value: number) => value.toString();

    return (
        <PageSection title={`${selectedYear} Submissions`}>
            <Box sx={{ paddingBottom: "4rem" }}>
                <Slider
                    aria-label="Select Year"
                    value={selectedYear}
                    getAriaValueText={valueText}
                    step={null}
                    min={Math.min(...years)}
                    max={Math.max(...years)}
                    marks={years.map((year, i) => ({
                        value: year,
                        label: `${year}`
                    }))}
                    color="devsoc_red"
                    onChange={handleYearChange}
                    sx={{
                        px: 8,
                        '.MuiSlider-markLabel': {
                            '&:first-of-type': { left: '16% !important' },
                            '&:last-of-type': { left: '84% !important' },
                        },
                    }}
                />
            </Box>
            
            <Grid container flexGrow={1} rowSpacing={3}>
                {(starlightProjectData[selectedYear] || []).map((props) => (
                    <Grid xs={12} md={6} key={props.name}>
                        <ProjectCard {...props} trainee={true} />
                    </Grid>
                ))}
            </Grid>
        </PageSection>
    );
}