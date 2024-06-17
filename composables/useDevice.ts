export const useDevice = () => {
  function isMobile() {
    if (typeof navigator !== "undefined") {
      const details = navigator.userAgent;
      const regexp = /android|iphone|kindle|ipad/i;
      return regexp.test(details);
    }

    return false;
  }

  return {
    isMobile,
  };
};
