import "./styles/App.css";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import ImageModal from "./components/ImageModal";

function App() {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para cerrar cualquier modal
  const closeModal = () => {
    setProfileImage(null);
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src="/screenshots/fotos/foto.jpeg"
          alt="foto de Brandon"
          onClick={() =>
            setProfileImage({
              src: "/screenshots/fotos/foto.jpeg",
              alt: "foto de perfil",
              label: "Brandon Alejandro Boch Lopez"
            })
          }
          className="profile-pic"
        />
        <div>
          <h1>Brandon Alejandro Boch Lopez</h1>
          <h2>Desarrollador de Software</h2>
          <p style={{ textAlign: "justify" }}>
            Desarrollo aplicaciones móviles con flutter y soluciones utilizando Firebase, enfocadas en mejorar
            la gestión de negocios. Los proyectos que he realizado han sido principalmente con fines de 
            aprendizaje, lo que me ha permitido fortalecer mis habilidades en desarrollo y en el manejo de 
            bases de datos.
          </p>
          <p style={{ textAlign: "justify" }}>
            Actualmente busco mi primera oportunidad laboral, con interés en seguir aprendiendo sobre todo
            en el área de análisis, crecer profesionalmente y aportar valor en proyectos reales.
          </p>
        </div>
      </div>

      <h3>Tecnologías</h3>
      <div className="skills">
        <span>Flutter</span>
        <span>Firebase</span>
        <span>Firestore</span>
        <span>Authentication</span>
        <span>React</span>
        <span>Java</span>
        <span>C#</span>
        <span>MySQL</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>SQL Server</span>
        <span>HTML</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <h3>Proyectos</h3>

      {/* PROYECTO GASTOS */}
      <ProjectCard
        title="💸 App de Control de Gastos"
        description="Aplicación móvil para la gestión de gastos personales, que permite crear categorías 
        personalizadas, registrar movimientos y visualizar el historial de gastos. Incluye un dashboard 
        con indicadores para el análisis financiero y exportación de datos en formato Excel por rangos de 
        fechas."
        link="https://github.com/alejandroboch/app-control-de-gastos"
        images={[
          { src: "/screenshots/aplicacion_gastos/login_screen.png", alt: "login", label: "Login de la aplicación" },
          { src: "/screenshots/aplicacion_gastos/add_expense_screen.png", alt: "gastos", label: "Registro de gastos" },
          { src: "/screenshots/aplicacion_gastos/create_categories_screen.png", alt: "categorias", label: "Creación de categorías" },
          { src: "/screenshots/aplicacion_gastos/expense_history_screen.png", alt: "historial", label: "Historial de gastos" },
          { src: "/screenshots/aplicacion_gastos/dashboard_screen.png", alt: "dashboard", label: "Dashboard de indicadores" }
        ]}
        onImageClick={(img) => setSelectedImage(img)}
      />

      {/* PROYECTO ABARROTERIA */}
      <ProjectCard
        title="🛒 App de Abarrotería (Proyecto de Tesis)"
        description="Aplicación móvil para la gestión de inventario y ventas en una tienda, que incluye 
        control de productos, registro de ventas, generación de reportes y sistema de notificaciones.
        Permite la exportación de reportes en formato PDF. Desarrollado como proyecto de tesis de 
        licenciatura."
        link="https://github.com/alejandroboch/app-abarroteria-miscelania"
        images={[
          { src: "/screenshots/aplicacion_abarroteria/pantalla_login.png", alt: "login", label: "Login del sistema" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_principal.png", alt: "principal", label: "Pantalla principal" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_registro_usuario.png", alt: "usuarios", label: "Registro de usuarios" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_registro_productos.png", alt: "productos", label: "Registro de productos" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_historial_ventas.png", alt: "ventas", label: "Historial de ventas" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_inventario.png", alt: "inventario", label: "Inventario" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_dashboard.png", alt: "dashboard", label: "Dashboard" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_reportes.png", alt: "reportes", label: "Reportes" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_notificaciones.png", alt: "notificaciones", label: "Notificaciones" }
        ]}
        onImageClick={(img) => setSelectedImage(img)}
      />

      <h3>Contacto</h3>
      <div className="contact">
        <p>Email: alejandrobochlopez@gmail.com</p>
        <a href="https://github.com/alejandroboch" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      {/* MODAL FUERA DE TODOS LOS CONTENEDORES */}
      <ImageModal
        image={profileImage || selectedImage}
        images={selectedImage?.images}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;