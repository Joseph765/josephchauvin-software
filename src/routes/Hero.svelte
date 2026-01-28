<script>
    import { Button, Flex, Icon } from "$volt";
</script>

<div class="hero">
    <Flex direction="column">
        <Flex direction="column" gap="xs">
            <p>Hello, I'm  Joseph Chauvin.</p>
            <h1>Frontend software engineer.</h1>
        </Flex>
        <Flex align="center" justify="center">
            <Button size="l" href="/Joseph Chauvin Resume 2025.pdf" download>
                Resume
                <svg slot="end" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
            </Button>
            <Button size="l" href="mailto:joseph.chauvin102@gmail.com" variant="secondary">Contact Me</Button>
        </Flex>
    </Flex>
</div>

<style>
    .hero {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-inline: var(--v-space-xl);
        /* background: linear-gradient(135deg, #0f0f1a 0%, #1a1030 40%, #2a1a4a 70%, #0f0f1a 100%); */
        /* background: linear-gradient(to bottom right, #0a0015, #1c0033 50%, #2e004f 100%); */
        /* background: radial-gradient(circle at 30% 70%, #6e56cf22 0%, transparent 50%), 
            linear-gradient(180deg, #0d001f 0%, #120029 100%); */
        /* background: linear-gradient(90deg, #0a0a15 0%, #150d2a 50%, #1f113f 100%); */
        /* background: linear-gradient(to right, #11001f, #200d38, #6e56cf33, #200d38, #11001f); */
        border-bottom: 1px solid var(--v-accent-2);

        background: linear-gradient(90deg, #0a0a15 0%, #150d2a 50%, #1f113f 100%);
        background-size: 200% 100%;          /* Makes the gradient twice as wide so it can slide */
        animation: subtleShift 12s ease-in-out infinite;  /* Slow & smooth loop */
    }

    @keyframes subtleShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    h1,
    p {
        font-family: var(--v-font);
        margin: 0;
        padding: 0;
        font-size: clamp(2.3rem, 5vw + 1rem, 3.75rem);
        line-height: 1;
        letter-spacing: var(--v-letter-spacing-4xl);
        text-align: center;
    }

    p {
        font-size: var(--v-font-size-xl);
        font-weight: 400;
        /* color: var(--v-color-text-weak); */
    }

    h1 {
        font-weight: var(--v-font-weight-black);
    }

    a {
        height: 46px;
        font-family: var(--v-font);
        font-size: var(--v-font-size-xl);
        font-weight: var(--v-font-weight-regular);
        letter-spacing: 0px;
        width: max-content;
        border-radius: var(--v-radius);
        padding-inline: var(--v-space-xl);
        margin: auto;
        background-color: var(--v-accent-7);
        border: 1px solid var(--v-accent-9);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--v-space-s);
        text-decoration: none;
        color: var(--v-color-text);
    }

    @media (pointer: fine) {
        a:hover {
            background-color: var(--v-color-text);
            cursor: pointer;
            color: var(--v-color-text-contrast);
        }
    }
</style>