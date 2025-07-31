# Todo App

A full-stack todo application built with Express.js, Prisma, MySQL, and Next.js.

## Features

- ✅ Create, read, update, and delete tasks
- 🎨 Color-coded tasks with 9 different colors
- ✔️ Mark tasks as complete/incomplete
- 📱 Responsive design with modern UI
- 🚀 REST API with TypeScript
- 🗄️ MySQL database with Prisma ORM

## Tech Stack

**Backend:**
- Express.js
- TypeScript
- Prisma ORM
- MySQL
- CORS enabled

**Frontend:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MySQL database server
- Git

## Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd todo-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
DATABASE_URL="mysql://username:password@localhost:3306/todoapp"
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

> **Note:** Replace `username`, `password`, `localhost:3306`, and `todoapp` with your MySQL credentials and database name.

Initialize database:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed  # Optional: adds sample data
```

Start backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Add the clipboard image to `public/clipboardimage.png` for the empty state.

Start frontend application:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Database Schema

The application uses a single `Task` model:

```prisma
model Task {
    id String @id @default(cuid())
    title String
    color String @default("blue")
    completed Boolean @default(false)
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    @@map("tasks")
}
```

### Available Colors

- Red, Orange, Yellow, Green, Blue, Indigo, Purple, Pink, Brown

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a specific task |
| DELETE | `/api/tasks/:id` | Delete a specific task |
| GET | `/health` | Health check |

### Request/Response Examples

**Create Task:**
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "color": "blue"
}
```

**Update Task:**
```bash
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Updated task title",
  "color": "green",
  "completed": true
}
```

## Development Scripts

### Backend

```bash
npm run dev          # Start development server with auto-reload
npm run build        # Build TypeScript to JavaScript
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Create and apply database migrations
npm run db:seed      # Seed database with sample data
```

### Frontend

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Database Management

### Common Prisma Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply new migration
npx prisma migrate dev

# View database in Prisma Studio
npx prisma studio

# Reset database (⚠️ Deletes all data)
npx prisma migrate reset

# Push schema changes without migration (prototyping)
npx prisma db push
```

### Making Schema Changes

1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev` to create migration
3. Run `npx prisma generate` to update client

## Troubleshooting

### Database Connection Issues

**Problem:** `Error: Can't reach database server`
```bash
# Check if MySQL is running
sudo service mysql start  # Linux
brew services start mysql # macOS
```

**Problem:** `Access denied for user`
- Verify username/password in `DATABASE_URL`
- Ensure database exists: `CREATE DATABASE todoapp;`

### Port Conflicts

**Backend (default: 3001):**
```bash
PORT=3002 npm run dev
```

**Frontend (default: 3000):**
```bash
npm run dev -- -p 4000
```

### CORS Issues

Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL.

### Prisma Issues

```bash
# Clear Prisma cache
npx prisma generate --force

# Verify database connection
npx prisma db pull
```

## Project Structure

```
todo-app/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Validation middleware
│   │   ├── routes/          # API routes
│   │   ├── types/           # TypeScript interfaces
│   │   └── app.ts           # Express app setup
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # Database migrations
│   └── package.json
└── frontend/
    ├── src/
    │   ├── app/             # Next.js app router
    │   ├── components/      # React components
    │   ├── lib/             # API utilities
    │   ├── styles/          # Global styles
    │   ├── types/           # TypeScript interfaces
    │   └── utils/           # Helper functions
    └── package.json
```

## Deployment

### Backend

1. Set production environment variables
2. Build: `npm run build`
3. Start: `npm start`
4. Ensure database is accessible from production environment

### Frontend

1. Set production `NEXT_PUBLIC_API_URL`
2. Build: `npm run build`
3. Deploy `.next` folder to hosting platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues, please check the troubleshooting section above or create an issue in the repository.
