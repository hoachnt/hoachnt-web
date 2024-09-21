interface ITechnology {
    id: number;
    title: string;
    icon?: string;
    url: string;
    iconUrl?: string;
    temp: number;
}

export const useTechnologyStore = defineStore("technology", () => {
    let animationFrameId: number;
    let lastShuffleTime: number = 0;
    const shuffleInterval = 5000; // 5 seconds

    const modalData = reactive({
        isOpen: false,
        technology: {} as ITechnology,
    });

    const technologies = ref<ITechnology[]>([
        {
            id: 0,
            title: "Golang",
            icon: "logos:go",
            url: "https://go.dev/",
            temp: 40,
        },
        {
            id: 1,
            title: "JavaScript",
            icon: "logos:javascript",
            url: "https://www.javascript.com/",
            temp: 60,
        },
        {
            id: 2,
            title: "TypeScript",
            icon: "logos:typescript-icon",
            url: "https://www.typescriptlang.org/",
            temp: 50,
        },
        {
            id: 3,
            title: "Nuxt.js",
            icon: "logos:nuxt-icon",
            url: "https://nuxt.com/",
            temp: 60,
        },
        {
            id: 11,
            title: "Angular",
            icon: "logos:angular-icon",
            url: "https://angular.dev/",
            temp: 30,
        },
        {
            id: 4,
            title: "Next.js",
            icon: "logos:nextjs-icon",
            url: "https://nextjs.org/",
            temp: 55,
        },
        {
            id: 5,
            title: "Linux",
            icon: "logos:linux-tux",
            url: "https://www.linux.org/",
            temp: 55,
        },
        {
            id: 6,
            title: "Docker",
            icon: "logos:docker-icon",
            url: "https://www.docker.com/",
            temp: 60,
        },
        {
            id: 7,
            title: "PostgreSQL",
            icon: "logos:postgresql",
            url: "https://www.postgresql.org/",
            temp: 40,
        },
        {
            id: 8,
            title: "SQLite",
            icon: "logos:sqlite",
            url: "https://sqlite.org/",
            temp: 50,
        },
        {
            id: 9,
            title: "Caddy",
            icon: "",
            iconUrl: "/icons/caddy.svg",
            url: "https://caddyserver.com/",
            temp: 80,
        },
        {
            id: 10,
            title: "Directus",
            icon: "",
            iconUrl: "/icons/directus.png",
            url: "https://directus.io/",
            temp: 70,
        },
    ]);

    const carouselStore = useCarouselStore();

    const shuffleArray = () => {
        technologies.value = technologies.value
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const shuffleLoop = (timestamp: number) => {
        if (timestamp - lastShuffleTime >= shuffleInterval) {
            shuffleArray();
            carouselStore.updateHeight();
            lastShuffleTime = timestamp;
        }
        animationFrameId = requestAnimationFrame(shuffleLoop);
    };

    const startShuffle = () => {
        stopShuffle();

        lastShuffleTime = performance.now();
        animationFrameId = requestAnimationFrame(shuffleLoop);
    };

    const stopShuffle = () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    const openModal = (technology: ITechnology) => {
        modalData.isOpen = true;
        modalData.technology = technology;
    };

    return {
        modalData,
        technologies,
        startShuffle,
        stopShuffle,
        openModal,
    };
});
