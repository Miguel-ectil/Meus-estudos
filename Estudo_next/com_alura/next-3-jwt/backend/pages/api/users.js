import { v4 as uuid } from 'uuid';
import { db } from '../../db';

const userController = {
  getAll(_, res) {
    db.users.find({}, function (err, docs) {
      res.status(200).json({
        data: {
          users: docs,
        }
      });
    });
  },
  create(req, res) {
    const newUser = {
      username: req.body.username,
      password: 'safepassword',
      name: req.body.name,
      email: req.body.email,
    };

    db.users.insert(newUser, function(err) {
      if(err) {
        res.status(400).json({
          error: {
            status: 400,
            message: 'User already exists'
          }
        });
      }

      res.status(201).json({
        data: {
          user: newUser,
        }
      });
    });


  }
}


const controllerBy = {
  GET: userController.getAll,
  POST: userController.create,
}

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create an user
 *     requestBody:
 *        content:
 *          application/json:
 *             schema:
 *                properties: 
 *                   username:
 *                      type: string
 *                      default: peas
 *                   password:
 *                      type: string
 *                      default: safepassword
 *                   name:
 *                      type: string
 *                      default: Paulo Silveira
 *                   email:
 *                      type: string
 *                      default: paulo@alura.com.br
 *     responses:
 *       201:
 *         description: User created with success
 *       400:
 *         description: User already exists
 *   get:
 *     summary: Return all users
 *     responses:
 *       200:
 *         description: User created with success
 */
export default function handle(req, res) {
  if (controllerBy[req.method]) return controllerBy[req.method](req, res);

  res.status(404).json({
    error: {
      status: 404,
      message: 'Not Found'
    }
  });
}
