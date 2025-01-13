import { Wrapper } from '../wrappers/Characteristics';

const Characteristics = () => {
  return (
    <Wrapper>
      <div className='item'>
        <h2>Modelo basado en API RESTful:</h2>
        <ul>
          <li>Los datos del backend son consumidos mediante solicitudes HTTP utilizando Axios.</li>
          <li>
            Las respuestas de la API son procesadas en loaders o hooks personalizados (customFetch) para separar la lógica de datos del componente
            visual.
          </li>
        </ul>
      </div>

      <div className='item'>
        <h2>Gestión del estado global:</h2>
        <ul>
          <li>
            UserSlice: Maneja los datos relacionados con la autenticación y la información del usuario, como el perfil o el historial de compras.
          </li>
          <li>Evita errores en tiempo de desarrollo y facilita el mantenimiento del código.</li>
        </ul>
      </div>

      <div className='item'>
        <h2>Tipado de datos con TypeScript:</h2>
        <ul>
          <li>Uso de interfaces como ProductsResponse para garantizar la integridad de los datos recibidos desde el backend.</li>
          <li>
            Las respuestas de la API son procesadas en loaders o hooks personalizados (customFetch) para separar la lógica de datos del componente
            visual.
          </li>
        </ul>
      </div>
      <div className='item'>
        <h2>Diseño centrado en el usuario:</h2>
        <ul>
          <li>Navegación fácil y estructura visual intuitiva gracias a styled-components.</li>
          <li>Compatibilidad con dispositivos móviles para una experiencia de compra óptima.</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Characteristics;
