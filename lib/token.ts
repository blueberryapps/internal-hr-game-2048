
const TOKEN = "token" as const;

export function getToken(): string | null {
    return window?.sessionStorage?.getItem(TOKEN);
}

export function setToken(value: string): void {
    window?.sessionStorage?.setItem(TOKEN, value);
}

export function clearToken(): void {
    window?.sessionStorage?.clear();
}
