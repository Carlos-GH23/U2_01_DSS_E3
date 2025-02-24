export interface User {
    id: number;          // Identificador único del usuario
    name: string;        // Nombre del usuario
    email: string;       // Correo electrónico del usuario
    telefono: string;    // Número de teléfono del usuario
    age: number;         // Edad del usuario
}

export interface ApiResponse {
    data: User[];       // Array de usuarios
    status: string;      // Estado de la respuesta
    error: boolean;      // Indica si hubo un error
    message: string | null; // Mensaje adicional (puede ser null)
}

export interface ApiResponseDelete {
    data: any | null;
    status: string;
    error: boolean;
    message: string;
  }
  
  // Ejemplo de uso
  const response: ApiResponseDelete = {
    data: null,
    status: "OK",
    error: false,
    message: "Registro Eliminado",
  };
  
