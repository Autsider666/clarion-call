function scrollToId(elementId: string): void {
    // Use useLayoutEffect if element changes shape/location at the same time.
    document.getElementById(elementId)?.scrollIntoView({behavior: "smooth"});
}

export function useScroll() {
    return {
        scrollToId,
    };
}