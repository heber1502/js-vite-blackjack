
import { pedirCarta, valorCarta, crearCartaHtml }from './'


// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos min de la pc para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error( 'Puntos minimos son necesarios' );
    if( !puntosMinimos ) throw new Error( 'Argumentos puntos HTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
    