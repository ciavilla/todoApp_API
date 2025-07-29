export interface Task {
    id: string;
    title: string;
    color: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTask {
    title: string;
    color?: string;
}

export interface UpdateTask {
    title?: string;
    color?: string;
    completed?: boolean;
}

export const VALID_COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'] as const;
export type TaskColor = typeof VALID_COLORS[number];
