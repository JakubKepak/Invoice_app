export const isIOsDevice = () => [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
].includes(navigator.platform);
