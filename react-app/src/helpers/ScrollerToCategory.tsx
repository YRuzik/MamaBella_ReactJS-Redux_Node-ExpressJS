
export const scroller = (e: any, id: string) => {
    const element = document.getElementById(id);
    e.preventDefault();
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(id, id, `/#${id}`);
}
