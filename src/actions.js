export const GUARDAR_CITAS_PENDIENTES = 'GUARDAR_CITAS_PENDIENTES';
export const guardarCitasPendientes = (citas) => ({
    type: GUARDAR_CITAS_PENDIENTES,
    payload: citas,
});

export const ELIMINAR_CITA_PENDIENTE = 'ELIMINAR_CITA_PENDIENTE';
export const eliminarCitaPendiente = (citaEliminar) => ({
    type: ELIMINAR_CITA_PENDIENTE,
    payload: citaEliminar,
});
