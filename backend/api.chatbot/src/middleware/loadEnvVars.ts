import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import logger from '../utils/logger';

/**
 * Load environment variables from .yml files
 */
export function loadEnvVars() {
  try {
    // Load auth config
    const authConfigPath = path.join(__dirname, '../../config/auth.yml');
    const authConfig = yaml.safeLoad(fs.readFileSync(authConfigPath, 'utf8'));

    process.env.TOKEN_SECRET = authConfig.token.secret;
    process.env.TOKEN_EXPIRATION = authConfig.token.expiration;
    process.env.OAUTH_CLIENT_ID = authConfig.oauth.client_id;
    process.env.OAUTH_CLIENT_SECRET = authConfig.oauth.client_secret;
    process.env.OAUTH_REDIRECT_URI = authConfig.oauth.redirect_uri;
    process.env.OAUTH_SCOPES = authConfig.oauth.scopes.join(',');

    // Load secrets config
    const secretsConfigPath = path.join(__dirname, '../../config/secrets.yml');
    const secretsConfig = yaml.safeLoad(fs.readFileSync(secretsConfigPath, 'utf8'));

    process.env.DB_USERNAME = secretsConfig.database.username;
    process.env.DB_PASSWORD = secretsConfig.database.password;
    process.env.DB_HOST = secretsConfig.database.host;
    process.env.DB_PORT = secretsConfig.database.port;
    process.env.DB_NAME = secretsConfig.database.name;
    process.env.API_KEY = secretsConfig.api.key;
    process.env.API_SECRET = secretsConfig.api.secret;
    process.env.OTHER_SECRET_KEY = secretsConfig.other.secret_key;

    logger.info('Environment variables loaded successfully');
  } catch (error) {
    logger.error(`Error loading environment variables: ${error.message}`);
    process.exit(1);
  }
}
