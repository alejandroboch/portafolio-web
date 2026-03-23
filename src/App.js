import "./styles/App.css";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import ImageModal from "./components/ImageModal";

function App() {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/screenshots/fotos/Foto.jpeg"}
          alt="Foto de Brandon"
          onClick={() =>
            setProfileImage({
              src: process.env.PUBLIC_URL + "/screenshots/fotos/Foto.jpeg",
              alt: "Foto de perfil",
              label: "Brandon Boch"
            })
          }
          className="profile-pic"
        />

        <div>
          <h1>Brandon Boch</h1>
          <h2>Desarrollador de Software</h2>

          <p style={{ textAlign: "justify" }}>
            Desarrollo aplicaciones móviles con Flutter y soluciones utilizando Firebase, enfocadas en mejorar
            la gestión de negocios. Los proyectos que he realizado han sido principalmente con fines de 
            aprendizaje, lo que me ha permitido fortalecer mis habilidades en desarrollo y en el manejo de 
            bases de datos.
          </p>

          <p style={{ textAlign: "justify" }}>
            Actualmente busco mi primera oportunidad laboral, con la idea de compartir mis conocimientos
            adquiridos y crecer profesionalmente.
          </p>
        </div>

        <ImageModal
          image={profileImage}
          onClose={() => setProfileImage(null)}
        />
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
          { src: "/screenshots/aplicacion_gastos/login_screen.png", alt: "Login", label: "Login de la aplicación" },
          { src: "/screenshots/aplicacion_gastos/add_expense_screen.png", alt: "Gastos", label: "Registro de gastos" },
          { src: "/screenshots/aplicacion_gastos/create_categories_screen.png", alt: "Categorías", label: "Creación de categorías" },
          { src: "/screenshots/aplicacion_gastos/expense_history_screen.png", alt: "Historial", label: "Historial de gastos" },
          { src: "/screenshots/aplicacion_gastos/dashboard_screen.png", alt: "Dashboard", label: "Dashboard de indicadores" }
        ]}
        onImageClick={(img) => setSelectedImage(img)} 
      />

      <ImageModal
        image={profileImage || selectedImage}
        images={selectedImage?.images} 
        onClose={() => {
          setProfileImage(null);
          setSelectedImage(null);
        }}
      />

      {/* PROYECTO ABARROTERIA */}
      <ProjectCard
        title="🛒 App de Control de Inventario para un Negocio Pequeño (Proyecto de Tesis)"
        description="Aplicación móvil para la gestión de inventario y ventas en una tienda, que incluye 
        control de productos, registro de ventas, generación de reportes y sistema de notificaciones.
        Permite la exportación de reportes en formato PDF. Desarrollado como proyecto de tesis de 
        licenciatura."
        link="https://github.com/alejandroboch/app-abarroteria-miscelania"
        images={[
          { src: "/screenshots/aplicacion_abarroteria/pantalla_login.png", alt: "Login", label: "Login del sistema" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_principal.png", alt: "Principal", label: "Pantalla principal" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_registro_usuario.png", alt: "Usuarios", label: "Registro de usuarios" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_registro_productos.png", alt: "Productos", label: "Registro de productos" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_historial_ventas.png", alt: "Ventas", label: "Historial de ventas" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_inventario.png", alt: "Inventario", label: "Inventario" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_dashboard.png", alt: "Dashboard", label: "Dashboard" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_reportes.png", alt: "Reportes", label: "Reportes" },
          { src: "/screenshots/aplicacion_abarroteria/pantalla_notificaciones.png", alt: "Notificaciones", label: "Notificaciones" }
        ]}
        onImageClick={(img) => setSelectedImage(img)}
      />

      <h3>Contacto</h3>
      <div className="contact">
        <p>Email: alejandrobochlopez@gmail.com</p>
        <a href="https://github.com/alejandroboch" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default App;
