import { Router } from "express";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskController";
import { validateCreateTask, validateUpdateTask } from "../middleware/validation";

const router = Router();

router.get('/', getAllTasks);
router.post('/', validateCreateTask, createTask);
router.put('/:id', validateUpdateTask, updateTask);
router.delete('/:id', deleteTask);

export default router;
