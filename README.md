#Klu Conversational Knowledge Base Graph Chatbot

Klu Conversational Knowledge Base Graph Chatbot is an intelligent chatbot designed to understand, interpret, and learn from human languages. It guides users through interactive sessions, provides tailored responses to user requests, and builds a comprehensive knowledge graph from research papers and their references. It uses machine learning algorithms and techniques to classify user utterances based on associated intentions and to construct a knowledge graph that completes the research topic.
Installation

You can install the Klu Chatbot project by cloning the repository and installing the necessary dependencies.

Usage

##To start the application, use the following command:

##This will start the backend server and the frontend application concurrently.
Project Structure

##The project is divided into two main parts: the frontend and the backend.

##The frontend is a React application and the main entry point is frontend/public/main.tsx.

##The backend is a Node.js application and the main entry point is backend/api.chatbot/src/index.ts.
Documentation

##Detailed documentation about how to use our chatbot, its features, and how it works can be found on the /docs page of the application.
Contributing

##We welcome contributions to the Klu Chatbot project. Please follow our style guide and make sure to write meaningful comments for complex code blocks.

##Before contributing, please check out our Sweep issue template and Sweep rules for more information on how we manage issues and pull requests.
Testing

##To run the tests for the application, use the following command: 

git clone https://github.com/reconsumeralization/klu-chatbot.git
cd klu-chatbot
npm install

##License

This project is licensed under the ISC License.
Knowledge Graph

The chatbot uses the Klu Python SDK to create and manage a knowledge graph. The knowledge graph is built from research papers and their references, recursively adding citations until the research topic is fully covered. The knowledge graph can be queried to retrieve information about a specific topic, find connections between topics, and more.

The Klu Python SDK is used in the backend to interact with the Klu API. The main entry point for the Klu integration is backend/api.chatbot/src/klu.ts.

The chatbot also uses a PostgreSQL database to store user data and conversation history. The database configuration is located in backend/api.chatbot/dbConfig.ts and the user schema is defined in backend/api.chatbot/schema/UserSchema.ts.

The chatbot uses the Express.js framework for handling HTTP requests and responses. The main routes are defined in backend/api.chatbot/src/routes.ts. The chatbot also uses the Winston logging library to log requests and errors, as defined in backend/api.chatbot/src/utils/logger.ts.

The chatbot uses the Bcrypt.js library to hash user passwords and JSON Web Tokens (JWT) for authentication. The user controller, located in backend/api.chatbot/controllers/userController.ts, handles user registration and authentication.
