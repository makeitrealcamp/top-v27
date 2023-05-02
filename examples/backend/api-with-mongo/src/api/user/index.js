const router = require("express").Router();
const userController = require("./user.controller");

router.route("/signup").post(userController.signup)
router.route("/signin").post(userController.signin)
/**
 * @openapi
 * /api/users:
 *  get:
 *   tags:
 *   - Users
 *   description: Get all users
 *   responses:
 *    200:
 *      description: An array of users
 *      content: 
 *        application/json:
 *          schema:
 *            type: array
 */
router.route("/").get(userController.listUsers)
/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *   tags:
 *   - Users
 *   description: Get a single user
 *   responses:
 *    200:
 *      description: A single user
 *      content: 
 *        application/json:
 *          schema:
 *    404:
 *      description: User not found
 *      content: 
 *        application/json:
 *          schema:
 *    500:
 *      description: Internal server error
 *      content: 
 *        application/json:
 *          schema:
 */
router.route("/:userId").get(userController.showUser)
/**
 * @openapi
 * /api/users:
 *  post:
 *   tags:
 *   - Users
 *   description: Create a new user an return the user
 *   requestBody:
 *    required: true,
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              example: Jhon Doe
 *              description: The name if the user
 *            email:
 *              type: string
 *              example: jd@test.com
 *   responses:
 *    200:
 *      description: A single user
 *      content: 
 *        application/json:
 *          schema:
 *    404:
 *      description: User not found
 *      content: 
 *        application/json:
 *          schema:
 *    500:
 *      description: Internal server error
 *      content: 
 *        application/json:
 *          schema:
 */
router.route("/").post(userController.createUser);

module.exports = router;