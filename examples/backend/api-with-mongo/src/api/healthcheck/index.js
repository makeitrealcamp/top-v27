const { Router } = require('express');

const router = Router();

/**
 * @openapi
 * /api/healthcheck:
 *  get:
 *   tags:
 *   - HealthCheck
 *   description: Get a 200 response if the server is up and running
 *   responses:
 *    200:
 *      description: App is up and running

 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'App is up and running' });
});

module.exports = router;
