.

🚀 DevTinder – Developer Networking Platform

DevTinder is a full-stack web application inspired by Tinder, designed exclusively for developers to connect, collaborate, and network based on their skills, interests, and tech stack.

🧠 Key Idea

“Match developers with developers, not profiles with photos.”

Users can create developer profiles, explore other developers, send connection requests, and build meaningful tech collaborations.

🛠️ Tech Stack
Frontend

React.js

JavaScript (ES6+)

HTML5 & CSS3

Axios

React Router

Tailwind CSS / Custom CSS (if applicable)

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt.js

📁 Project Structure
DevTinder/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md

🎨 Frontend (Client)
✨ Features

Developer signup & login

Profile creation with skills & bio

Browse developer profiles

Send & receive connection requests

Responsive UI for all devices

⚙️ Setup Instructions
cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000

🔗 API Integration

Communicates with backend using Axios

Uses JWT stored securely for authentication

Protected routes for logged-in users

🧩 Backend (Server)
✨ Features

RESTful APIs for authentication & users

Secure JWT-based login system

Password encryption using bcrypt

MongoDB schema modeling with Mongoose

Connection request & matching logic

⚙️ Setup Instructions
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:5000

🔐 Environment Variables

Create a .env file inside backend/

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

📌 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register developer
POST	/api/auth/login	Login developer
GET	/api/users	Get all developers
POST	/api/connect	Send connection request
🚀 Future Enhancements

Skill-based matching algorithm

Real-time chat using WebSockets

GitHub profile integration

Project collaboration feature

Notifications system

🏆 Why DevTinder?

Built with scalable MERN architecture

Focused on real-world developer networking

Clean separation of frontend & backend

Resume-ready full-stack project

👨‍💻 Author

Nitai Gupta
Full-Stack Developer
📌 Passionate about building scalable web applications
