import userRoutes from "./user/user.route";
import dataRoutes from "./data/data.route"
export default app => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/data", dataRoutes);
};
