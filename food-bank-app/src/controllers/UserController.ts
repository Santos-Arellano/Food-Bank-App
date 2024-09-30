// src/controllers/UserController.ts
import { UserModel } from '../models/UserModel';

// Función para obtener todos los usuarios
export const getUsers = async (): Promise<UserModel[]> => {
  // Simulación de una llamada API
  return [
    { id: 1, name: 'Juan Pérez', skills: ['Carpintería', 'Electricidad'] },
    { id: 2, name: 'Ana López', skills: ['Cocina', 'Repostería'] },
  ];
};

// Función para agregar un usuario nuevo
export const addUser = async (user: UserModel): Promise<void> => {
  console.log('Usuario añadido:', user);
};
