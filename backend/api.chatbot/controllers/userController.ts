import { db } from '../models/db';
import { logger } from '../utils/logger';
import { Joi } from '@hapi/joi';
import { bcrypt } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

export const createUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    logger.error('Validation error: ', error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  };

  try {
    const result = await db.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *', [user.username, user.email, user.password]);
    const token = jwt.sign({ id: result.rows[0].id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  } catch (err) {
    logger.error('Database error: ', err);
    res.status(500).send(err);
  }
};

export const loginUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    logger.error('Validation error: ', error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  const user = await db.query('SELECT * FROM users WHERE username = $1', [req.body.username]);
  if (!user.rows[0]) {
    logger.error('User not found');
    return res.status(400).send('Username or password is wrong');
  }

  const validPass = await bcrypt.compare(req.body.password, user.rows[0].password);
  if (!validPass) {
    logger.error('Invalid password');
    return res.status(400).send('Username or password is wrong');
  }

  const token = jwt.sign({ id: user.rows[0].id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
};