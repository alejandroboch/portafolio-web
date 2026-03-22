function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Brandon Alejandro Boch Lopez</h1>
      <h2>Desarrollador de Software</h2>

      <h3>Sobre mí</h3>
      <p>
        Soy desarrollador enfocado en aplicaciones móviles con Flutter y Firebase.
        Me interesa crear soluciones tecnológicas que ayuden a mejorar la gestión de negocios.
      </p>

      <h3>Proyectos</h3>

      <div>
        <h4>💸 App de Control de Gastos</h4>
        <p>Aplicación para gestionar gastos personales con dashboard de indicadores.</p>
          <a 
            href="https://github.com/alejandroboch/app-control-de-gastos" 
            target="_blank"
            rel="noreferrer"
          >
            Ver código
          </a>
          <img src="/screenshots/aplicacion_gastos/login_screen.png" width="300" 
          alt="Pantalla login de la app gastos"/>
          <img src="/screenshots/aplicacion_gastos/add_expense_screen.png" width="300" 
          alt="Pantalla para agregar gastos"/>
          <img src="/screenshots/aplicacion_gastos/create_categories_screen.png" width="300" 
          alt="Pantalla para crear categorias"/>
          <img src="/screenshots/aplicacion_gastos/expense_history_screen.png" width="304" 
          alt="Pantalla para revisar el historial de gastos"/>
          <img src="/screenshots/aplicacion_gastos/dashboard_screen.png" width="204" 
          alt="Pantalla para visualizar dashboar"/>
      </div>

      <div>
        <h4>🛒 App de Abarrotería</h4>
        <p>Aplicación para control de inventario y ventas en una tienda.</p>
        <a 
            href="https://github.com/alejandroboch/app-abarroteria-miscelania" 
            target="_blank"
            rel="noreferrer"
          >
            Ver código
          </a>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_login.png" width="300" 
          alt="Pantalla de login de abarroteria"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_principal.png" width="300" 
          alt="Pantalla principal de la aplicación con todas las opciones disponibles"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_registro_usuario.png" width="266" 
          alt="Pantalla para registrar usuarios"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_registro_productos.png" width="300" 
          alt="Pantalla para registrar productos"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_historial_ventas.png" width="300" 
          alt="Pantalla para revisar el historial de ventas"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_inventario.png" width="238.9" 
          alt="Pantalla para revisar el inventario"/>
          <img src="/screenshots/aplicacion_abarroteria/dashboard.png" width="238.9" 
          alt="Pantalla para visualizar dashboard con indicadores relevantes"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_reportes.png" width="300" 
          alt="Pantalla para descargar reportes"/>
          <img src="/screenshots/aplicacion_abarroteria/pantalla_notificaciones.png" width="300" 
          alt="Pantalla para revisar notificaciones"/>
      </div>

      <h3>Contacto</h3>
      <p>Email: alejandrobochlopez@gmail.com</p>
    </div>
  );
}

export default App;
