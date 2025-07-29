import { Request, Response, NextFunction } from "express";
import { VALID_COLORS } from "../types";

export const validateCreateTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, color } = req.body;

  if (!title || typeof title !== 'string' || title .trim().length === 0) {
    return res.status(400).json({ error: 'Title is required and must not be empty'});
  }

  if (color && !VALID_COLORS.includes(color)) {
    return res.status(400).json({ error: `invalid color. valid colors are: ${VALID_COLORS.join(', ')}`});
  }

  req.body.title = title.trim();
  next();
};

export const validateUpdateTask = (req: Request, res: Response, next: NextFunction) => {
    const { title, color, completed } = req.body;

    if (title !== undefined) {
        if (typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json({ error: 'Title must not be empty'});
        }
        req.body.title = title.trim();
    }

    if (color !== undefined && !VALID_COLORS.includes(color)) {
        return res.status(400).json({
            error: `Invalid color. Valid colors are: ${VALID_COLORS.join(', ')}`
        });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean'})
    }

    next();
};
