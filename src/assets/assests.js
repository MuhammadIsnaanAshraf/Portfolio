// Backwards compatibility shim for the original misspelled module name.
// Prefer importing from `./assets` (correct spelling). This file re-exports
// the corrected module so existing imports keep working.
import assets from "./assets";

export default assets;
