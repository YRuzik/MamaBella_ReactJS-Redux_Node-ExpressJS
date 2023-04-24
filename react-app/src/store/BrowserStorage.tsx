export function loadState(key: string) {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState) || '[]';
    } catch (e) {
        return undefined;
    }
}

export async function saveState(key: string, state: object[]) {
    try {
        const serializedState = JSON.stringify(state);
        if (serializedState) localStorage.setItem(key, serializedState);
    } catch (e) {
        //ignore
    }
}
