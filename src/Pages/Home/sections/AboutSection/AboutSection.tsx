import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#4f8e3e",
      cursor: "pointer",
      color: "#fff",
      transition: "0.3s",
    },
  }));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Next",
    "Git",
    "HTML",
    "CorelDraw",
    "Vue",
    "Tailwind",
    "Node.js",
    "Express",
    "REST API",
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experience
                </Typography>
                <Typography textAlign="center">1,5+ years</Typography>
                <Typography textAlign="center">FrontEnd Development</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">Bachelors Degree</Typography>
                <Typography textAlign="center">
                  Information Tecnology
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography>
            Sou natural de Porto Alegre - RS, apaixonado por tecnologia, música e
            inovação. Tenho perfil proativo, comunicativo e estou sempre em
            busca de novas ideias e soluções criativas. Valorizo a simplicidade,
            o trabalho em equipe e acredito que bons resultados vêm da
            combinação entre dedicação, aprendizado contínuo e colaboração. Além
            da tecnologia, tenho grande interesse por música e automóveis, e
            encontro equilíbrio passando tempo de qualidade com minha família.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutSection;
