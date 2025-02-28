export const useDevice = () => {
    const getUserAgent = (): string =>
        typeof navigator !== "undefined" ? navigator.userAgent : "";

    const isMobile = (userAgent: string = getUserAgent()): boolean => {
        const mobileRegex = /android|iphone|kindle|ipad/i;
        return mobileRegex.test(userAgent);
    };

    const isTablet = (userAgent: string = getUserAgent()): boolean => {
        const tabletRegex = /ipad|tablet|playbook|silk/i;
        return tabletRegex.test(userAgent);
    };

    return {
        isMobile,
        isTablet,
    };
};
