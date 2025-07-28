# AI School MEAN Stack Application

## Project Overview
The AI School application is designed to help schools teach AI to students. It supports two types of users: teachers and students, with role-based access to AI tools and dashboards.

## Features
- Separate login flows for teachers and students.
- Role-based access control (RBAC):
  - Teachers have unrestricted access to AI tools and teaching dashboards.
  - Students have restricted access to AI functionality (e.g., daily limits, specific prompt categories).
- Integration with OpenAI API for AI functionalities.
- Modular and scalable MEAN stack architecture.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: Angular
- **Database**: MongoDB
- **AI API**: OpenAI
- **Source Control**: GitHub

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/joshisharvil1104/AI_SCHOOL.git
   ```
2. Navigate to the project directory:
   ```bash
   cd AI_SCHOOL
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open the application in your browser:
   ```
   http://localhost:4000
   ```

## Folder Structure
- `server.js`: Entry point for the backend server.
- `DevelopmentBlueprint.md`: Detailed development blueprint for the project.
- `UserStories.txt`: User stories with technical details and step-by-step guides.
- `package.json`: Project dependencies and scripts.
- `node_modules/`: Installed dependencies.

## Contribution Guidelines
- Use feature branches for new tasks.
- Write clear commit messages.
- Follow coding standards.

## Deployment
- The application can be deployed on free tier platforms like Render, Heroku, or Vercel.

## Future Roadmap
- Add advanced AI features.
- Expand role-based access for additional user types.
- Implement analytics dashboards for teachers.

## License
This project is licensed under the MIT License.

---
This README provides an overview of the AI School application and serves as a guide for developers to start working on the project.
