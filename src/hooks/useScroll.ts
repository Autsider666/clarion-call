function scrollToId(elementId: string, msTimeout?: number): void {
    const element = document.getElementById(elementId);
    if (!element) {
        return;
    }

    const scroll = () => element.scrollIntoView({behavior: "smooth"});

    if (msTimeout === undefined) {
        scroll();
    } else {
        setTimeout(() => scroll(), 0);
    }
}

export function useScroll() {
    return {
        scrollToId,
    };
}