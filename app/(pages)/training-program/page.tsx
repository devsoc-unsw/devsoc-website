import PageSection from "../../../components/PageSection";
import { Button, Stack, Typography } from "@mui/joy";


export default function TrainingProgramPage() {
  const open = true;

    return (
      <>
      <PageSection title="Training Program">
        <Typography textAlign="justify" mb={3}>
          Training Program is a 3x Arc Award winning termly web development 
          initiative where we provide students with hands-on industry-style 
          experience in modern software development. Throughout the term, 
          participants collaborate in teams as a trainee or a training lead 
          to design and build a full-stack web application.
        </Typography>

        <Typography textAlign="justify" mb={3}>
          The program is designed for students of all experience levels. Beginners 
          (Trainees) are guided through weekly workshops covering modern web development 
          concepts and practices, while more experienced students have the opportunity 
          to take on Training Lead roles, mentoring others and strengthening their 
          leadership abilities.
        </Typography>

        <Typography textAlign="justify" mb={3}>
          Each workshop focuses on a key area of the software development lifecycle, 
          including UI/UX design with Figma, beginner and advanced React, styling with 
          Tailwind CSS, backend development with TypeScript, databases, and 
          introductory system design concepts. The program also features guest workshops 
          and industry talks hosted by different DevSoc portfolios, giving participants 
          additional insights to further enhance their technical abilities.
        </Typography>

        <Typography textAlign="justify" mb={3}>
          In addition to technical upskilling, the program fosters a collaborative and 
          supportive community through team-based learning, bonding events, and mentorship. 
          The term concludes with a final project showcase where teams present the projects 
          they have built over the course of the program.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          size="lg"
          component={open ? "a" : "button"}
          disabled={!open}
          variant={open ? "solid" : "plain"}
          href={'/get-involved'}
          target="_blank"
        >
          <Stack alignItems="center">
            <Typography mb={-0.5} fontWeight="bold">
              Get Involved
            </Typography>
          </Stack>
        </Button>
        </div>

      </PageSection>
      <PageSection title="Workshops">
        <p>figma react react css express mongo</p>
    

      </PageSection>

      <PageSection title="Testimonials">
        <p>testimonial</p>
    

      </PageSection>

      <PageSection title="Projects">
        <p>projects here</p>
        

      </PageSection>
      </>
      
    );
  }
  