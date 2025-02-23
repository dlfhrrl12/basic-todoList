import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const todoClient = axios.create({
  baseURL: 'http://localhost:3000/todos',
});

export const useTodos = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const {data} = await todoClient.get('/');
            return data;
        }
    })
}

export const useTodoItem = (id) => {
    return useQuery({
        queryKey: ['todo', id],
        queryFn: async () => {
            const {data} = await todoClient.get(`/${id}`);
            return data;
        }
    })
}

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (text) => {
            const {data} = await todoClient.post('/', {text, completed: false});
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        }
    })
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id) => {
            await todoClient.delete(`/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        }
    })
}

export const useToggleCompleted = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({id, currentCompleted}) => {
            await todoClient.patch(`/${id}`, {completed: !currentCompleted})
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']);
        }
    })
}