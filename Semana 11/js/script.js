import { registerUser } from "./firebase.js";

async function register() {
    await registerUser("juliocontreras@gmail.com", "12345678");
}

register();