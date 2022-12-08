const taskRoutes = require('./taskRoutes');

exports.routesInit = (app) => {
    app.use("/tasks", taskRoutes);

    // Handle case of request to any wrong route
    app.use("", (req, res) => {
        res
            .status(404)
            .json({ msg_error: `Url: ${res.req.originalUrl} not found` });
    });
};