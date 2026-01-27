<script>
    import { Button, Flex, Text } from "$volt";
</script>

<div class="projects" id="projects">
    <div class="title-content-wrapper">
        <Text size="4xl" weight="black" align="center" measure="none">Projects</Text>
        <div class="project">
            <img src="/Volt-UI-Showcase.png" alt="Volt-UI Design System Project" />
            <div class="description">
                <Text size="3xl" weight="bold">Volt UI</Text>
                <Text size="xl" variant="weak" measure="s">Modern design system for building consistent, high-quality interfaces fast. It gives you reusable components and design tokens so your UI stays cohesive without slowing you down.</Text>
                <Flex>
                    <Button variant="secondary" href="https://volt-ui.com/getting-started" target="_blank">View Documentation</Button>
                    <Button variant="secondary" href="https://github.com/Joseph765/Volt-UI" target="_blank">View Code</Button>
                </Flex>
            </div>
        </div>
    </div>
</div>

<style>
    .projects {
        max-width: 1600px;
        margin: auto;
        padding: 12rem var(--v-space-2xl);
    }

    .title-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-2xl);
    }

    .project {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
    }

    img {
        height: 32rem;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-m);
        width: 524px;
    }

    @media (max-width: 1580px) {
        .projects {
            max-width: min-content;
        }

        .project {
            flex-direction: column;
            gap: var(--v-space-xl);
            align-items: start;
        }

        img {
            height: 32rem;
        }
    }

    @media (max-width: 1200px) {
        .projects {
            padding: var(--v-space-2xl);
            max-width: 100%;
        }

        .title-content-wrapper {
            gap: var(--v-space-xl);
        }

        .description {
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        .projects {
            padding: var(--v-space-xl);
        }
        
        img {
            height: auto;
            width: 100%;
        }
    }
</style>