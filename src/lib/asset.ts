/** GitHub Pages subpath-safe asset URL. Always ends up as `/repo/...` or `/...`. */
export const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "") + "/";

export function asset(path: string) {
  return base + path.replace(/^\//, "");
}
