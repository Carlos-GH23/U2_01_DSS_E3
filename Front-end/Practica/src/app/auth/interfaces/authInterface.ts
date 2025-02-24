export interface User {
    id_usuario: number;
    email: string;
    contrasena: string;
    role: Role;
  }
  
  export interface Role {
    id_role: number;
    name: string;
  }
  
  export interface TokenData {
    token: string;
    tokenType: string;
    user: User;
    role: any; // O puedes definir una interfaz para el rol si es necesario
  }
  
  export interface ApiResponse {
    data: TokenData;
    status: string;
    error: boolean;
    message: string | null; // Puede ser null o un string
  }
  