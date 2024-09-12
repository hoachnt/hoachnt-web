export const useTechnologyStore = defineStore("technology", () => {
    let animationFrameId: number;
    let lastShuffleTime: number = 0;
    const shuffleInterval = 5000; // 5 seconds

    const technologies = ref([
        { id: 0, title: "Golang", icon: "logos:go", url: "https://go.dev/" },
        {
            id: 1,
            title: "JavaScript",
            icon: "logos:javascript",
            url: "https://www.javascript.com/",
        },
        {
            id: 2,
            title: "TypeScript",
            icon: "logos:typescript-icon",
            url: "https://www.typescriptlang.org/",
        },
        {
            id: 3,
            title: "Nuxt.js",
            icon: "logos:nuxt-icon",
            url: "https://nuxt.com/",
        },
        {
            id: 4,
            title: "Next.js",
            icon: "logos:nextjs-icon",
            url: "https://nextjs.org/",
        },
        {
            id: 5,
            title: "Linux",
            icon: "logos:linux-tux",
            url: "https://www.linux.org/",
        },
        {
            id: 6,
            title: "Docker",
            icon: "logos:docker-icon",
            url: "https://www.docker.com/",
        },
        {
            id: 7,
            title: "PostgreSQL",
            icon: "logos:postgresql",
            url: "https://www.postgresql.org/",
        },
        {
            id: 8,
            title: "SQLite",
            icon: "logos:sqlite",
            url: "https://sqlite.org/",
        },
        {
            id: 9,
            title: "Caddy",
            icon: "",
            iconUrl: "/icons/caddy.svg",
            url: "https://caddyserver.com/",
        },
        {
            id: 10,
            title: "Directus",
            icon: "",
            iconUrl: "/icons/directus.png",
            url: "https://directus.io/",
        },
    ]);

    const shuffleArray = () => {
        technologies.value = technologies.value
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const shuffleLoop = (timestamp: number) => {
        if (timestamp - lastShuffleTime >= shuffleInterval) {
            shuffleArray();
            lastShuffleTime = timestamp;
        }
        animationFrameId = requestAnimationFrame(shuffleLoop);
    };

    const startShuffle = (updateHeight: () => void) => {
        stopShuffle();

        lastShuffleTime = performance.now();
        animationFrameId = requestAnimationFrame(shuffleLoop);
        updateHeight();
    };

    const stopShuffle = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    return {
        technologies,
        startShuffle,
        stopShuffle,
    };
});
