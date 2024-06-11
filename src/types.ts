export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
  }
  
  export interface Movie {
    id: string;
    title: string;
    description: string;
    directorId: string;
  }
  
  export interface Director {
    id: string;
    firstName: string;
    lastName: string;
  }
  