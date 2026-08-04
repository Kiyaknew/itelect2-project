import express from "express";
import router, { setUserList } from "./routes/index.js";
import { fetchSampleUsers } from "./src/api.js";

const app = express();

app.use("/api", router);

const PORT = process.env.PORT || 3000;
async function startServer() {
    const users = await fetchSampleUsers();
    setUserList(users);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

startServer();