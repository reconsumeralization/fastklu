# Project: Klu Conversational Knowledge Base Graph Chatbot

## Description

Klu Conversational Knowledge Base Graph Chatbot is an innovative and intelligent AI chatbot, designed to understand, interpret, and learn from human languages. It's hyper-intelligent, providing users with interactive sessions and tailored responses to their requests. Our chatbot builds a comprehensive knowledge graph from research papers and their references, using machine learning algorithms to classify user utterances based on associated intentions. 

## Installation

To install the Klu Chatbot project, clone the repository and install the necessary dependencies with the following steps:

```bash
git clone https://github.com/reconsumeralization/klu-chatbot.git
cd klu-chatbot
npm install
```

## Usage

To start the application, use the following command:

```bash
npm start
```

This command will start the backend server and the frontend application concurrently.

## Project Structure

The project is divided into two main parts - the frontend and the backend.

- The frontend is a React application and the main entry point is frontend/public/main.tsx.
- The backend is a Node.js application and the main entry point is backend/api.chatbot/src/index.ts.

## Documentation

Detailed documentation about how to use our chatbot, its features, and how it works can be found on the `/docs` page of the application.

## Contributing

We warmly welcome contributions to the Klu Chatbot project. Please follow our style guide and make sure to write meaningful comments for complex code blocks. Before contributing, please check out our Sweep issue template and Sweep rules for more information on how we manage issues and pull requests.

## Testing

To run the tests for the application, use the following command:

```bash
npm test
```

## License

This project is licensed under the ISC License.

## Knowledge Graph

Our chatbot uses the Klu Python SDK to create and manage a knowledge graph. The knowledge graph is built from research papers and their references, recursively adding citations until the research topic is fully covered. The knowledge graph can be queried to retrieve information about a specific topic, find connections between topics, and more.

The chatbot also uses a PostgreSQL database to store user data and conversation history. The database configuration is located in backend/api.chatbot/dbConfig.ts and the user schema is defined in backend/api.chatbot/schema/UserSchema.ts.

The chatbot uses the Express.js framework for handling HTTP requests and responses. The main routes are defined in backend/api.chatbot/src/routes.ts. The chatbot also uses the Winston logging library to log requests and errors, as defined in backend/api.chatbot/src/utils/logger.ts.

The chatbot uses the Bcrypt.js library to hash user passwords and JSON Web Tokens (JWT) for authentication. The user controller, located in backend/api.chatbot/controllers/userController.ts, handles user registration and authentication.
