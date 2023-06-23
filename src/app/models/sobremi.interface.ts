import { Curso } from "./curso.interface";
import { Educacion } from "./educacion.interface";
import { Experiencia } from "./experiencia.interface";
import { Habilidad } from "./habilidades.interface";
import { Proyecto } from "./proyecto.interface";

export interface SobreMi {
  nombre: string;
  edad: number;
  profesion: string;
  resumen: string;
  habilidades: Habilidad[];
  educacion: Educacion[];
  experiencia: Experiencia[];
  cursos: Curso[];
  proyectos: Proyecto[];
}
