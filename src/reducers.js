import {GUARDAR_CITAS_PENDIENTES, ELIMINAR_CITA_PENDIENTE} from './actions';

export const citasPendientes = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case GUARDAR_CITAS_PENDIENTES:{
            const citasPendientes = payload;
            return state.concat(citasPendientes);
        }
        case ELIMINAR_CITA_PENDIENTE:{
            const citaEliminar = payload;
            return state.filter(cita => cita.descripcion !== citaEliminar.descripcion);
        }
        default:
            return state;
    }

};
