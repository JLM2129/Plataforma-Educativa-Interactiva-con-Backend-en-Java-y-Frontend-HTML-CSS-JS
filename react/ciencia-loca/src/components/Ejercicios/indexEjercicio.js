import EjercicioSeleccionMultiple from "./EjercicioSeleccionMultiple";
import EjercicioCompletar from "./EjercicioCompletar";

export function getEjercicioComponente(tipo) {
    switch (tipo) {
        case "seleccion_multiple": return EjercicioSeleccionMultiple;

        case "completar": return EjercicioCompletar;
        default:
            return null;
    }
}




