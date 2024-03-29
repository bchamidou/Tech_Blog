// Defines various routes
const router = require('express').Router();
const apiRoutes = require('./api');
const routesHome = require('./homeRoutes');
const routesDashboard= require('./dashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', routesHome);
router.use('/dashboard', routesDashboard);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
