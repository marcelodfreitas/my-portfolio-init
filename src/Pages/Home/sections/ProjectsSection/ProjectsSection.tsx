import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Tindra",
            subtitle: "Fev 2025 - Mai 2025",
            srcImg: "/src/assets/images/avatar.jpg",
            description: "O TINDRA é uma plataforma inovadora que simplifica a compra, venda e troca de veículos no Brasil. Utilizando IA, o sistema gera descrições automáticas dos carros a partir de fotos e informações fornecidas pelos usuários. As negociações são realizadas diretamente pelo WhatsApp, eliminando a necessidade de cadastros extensos ou formulários complexos. O aplicativo ainda está em desenvolvimento!",
            technologies: "",
            websiteURL: "https://tindra-tan.vercel.app/",
            codeURL: "https://github.com/marcelodfreitas/TINDRA",
        },
        {
            title: "Grão e Aroma Cafeteria",
            subtitle: "Mar 2025",
            srcImg: "/src/assets/images/graoearoma.png",
            description: "O site Grão & Aroma é uma cafeteria que oferece uma experiência sensorial completa para os amantes de café. Com grãos selecionados e torra artesanal, o estabelecimento destaca-se por seu ambiente acolhedor e compromisso com a sustentabilidade. Clientes elogiam o atendimento caloroso e a qualidade dos produtos, tornando o Grão & Aroma uma referência para quem busca sabor e aconchego.",
            technologies: "",
            websiteURL: "https://grao-e-aroma.vercel.app/",
            codeURL: "https://github.com/marcelodfreitas/site-cafeteria",
        },
        {
            title: "Tasty Burguer",
            subtitle: "Abr 2025",
            srcImg: "/src/assets/images/tasty.png",
            description: "O site Tasty Burguer é uma lanchonete fictícia localizada em Porto Alegre/RS, com um cardápio focado em hambúrgueres artesanais e acompanhamentos. A interface é moderna e responsiva, permitindo que os usuários naveguem pelo menu, adicionem itens ao carrinho e finalizem pedidos de forma prática.",
            technologies: "",
            websiteURL: "https://tasty-burguer.vercel.app/",
            codeURL: "https://github.com/marcelodfreitas/Site-Hamburgueria",
        },
        {
            title: "NovaMente",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/novamente.png",
            description: "NovaMente apresenta uma plataforma digital voltada para o bem-estar, oferecendo soluções integradas para ajudar os usuários a desenvolverem rotinas saudáveis e alcançarem seu melhor potencial. Funcionalidades Principais: Nutrição Personalizada e Exercícios Físicos, Comunidade e Suporte",
            technologies: "",
            websiteURL: "https://novamente.vercel.app/",
            codeURL: "https://github.com/marcelodfreitas/NovaMente",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
