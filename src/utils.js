export const formatDate = (date) => `Due ${date.toLocaleDateString()}`;
export const validateTask = ({title, dueDate} = {}) => Boolean(title && dueDate);
export const mergeTaskUpdate =  (original, ...updates) => Object.assign({}, original, ...updates);

//mocktask
export const mockTasks = [
    { id: 1, title: 'Write project report', dueDate: '2026-08-15', completed: false },
    { id: 2, title: 'Bring index card', dueDate: '2026-07-17', completed: true },
    { id: 3, title: 'Submit GT5 assignment', dueDate: '2026-08-04', completed: false },
];

export class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TaskValidationError';
    }
}

export function createTask(taskData) {
    if (!validateTask(taskData)) {
        throw new TaskValidationError('Invalid task data');
    }

    return {
        id: Date.now(), completed: false, ...taskData,
    };
  
}
