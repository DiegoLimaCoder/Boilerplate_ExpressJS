import { app } from "@/app";
import { Env } from "@/env";

const port = Env.PORT || 8080;

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
