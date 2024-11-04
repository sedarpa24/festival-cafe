// sedes.ts
export interface Actividad {
  lugar?: string;
  tipo?: string;
  fecha: string;
  hora: string;
  descripcion: string;
}

export interface Sede {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
  map?: string;
  description: string[];
  program: Actividad[];
}
