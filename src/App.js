import "./styles/App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="container">
      <h1>Brandon Alejandro Boch Lopez</h1>
      <h2>Desarrollador de Software | Flutter | Firebase</h2>

      <h3>Sobre mí</h3>
      <p>
        Desarrollador enfocado en aplicaciones móviles con Flutter y Firebase.
        He desarrollado soluciones para control de gastos y gestión de inventarios,
        aplicadas a escenarios reales de negocio.
      </p>

      <h3>Proyectos</h3>

      {/* PROYECTO GASTOS */}
      <ProjectCard
        title="💸 App de Control de Gastos"
        description="Aplicación para gestionar gastos personales con dashboard de indicadores."
        link="https://github.com/alejandroboch/app-control-de-gastos"
        images={[
          {
            src: "/screenshots/aplicacion_gastos/login_screen.png",
            alt: "login",
            label: "Login de la aplicación"
          },
          {
            src: "/screenshots/aplicacion_gastos/add_expense_screen.png",
            alt: "gastos",
            label: "Registro de gastos"
          },
          {
            src: "/screenshots/aplicacion_gastos/create_categories_screen.png",
            alt: "categorias",
            label: "Creación de categorías"
          },
          {
            src: "/screenshots/aplicacion_gastos/expense_history_screen.png",
            alt: "historial",
            label: "Historial de gastos"
          },
          {
            src: "/screenshots/aplicacion_gastos/dashboard_screen.png",
            alt: "dashboard",
            label: "Dashboard de indicadores"
          }
        ]}
      />

      {/* PROYECTO ABARROTERIA */}
      <ProjectCard
        title="🛒 App de Abarrotería (Proyecto principal)"
        description="Aplicación para control de inventario, ventas, reportes y notificaciones en una tienda."
        link="https://github.com/alejandroboch/app-abarroteria-miscelania"
        images={[
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_login.png",
            alt: "login",
            label: "Login del sistema"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_principal.png",
            alt: "principal",
            label: "Pantalla principal"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_registro_usuario.png",
            alt: "usuarios",
            label: "Registro de usuarios"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_registro_productos.png",
            alt: "productos",
            label: "Registro de productos"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_historial_ventas.png",
            alt: "ventas",
            label: "Historial de ventas"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_inventario.png",
            alt: "inventario",
            label: "Inventario"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_dashboard.png",
            alt: "dashboard",
            label: "Dashboard"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_reportes.png",
            alt: "reportes",
            label: "Reportes"
          },
          {
            src: "/screenshots/aplicacion_abarroteria/pantalla_notificaciones.png",
            alt: "notificaciones",
            label: "Notificaciones"
          }
        ]}
      />

      <h3>Contacto</h3>
      <p>Email: alejandrobochlopez@gmail.com</p>
    </div>
  );
}

export default App;
