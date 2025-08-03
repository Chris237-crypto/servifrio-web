import React, { useState } from "react";
import "../style/Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    electrodomestico: "",
    accion: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarPorWhatsApp = () => {
    const telefono = "593988630953";
    const texto = `Hola, quiero consultar lo siguiente:\n
🧍 Nombre: ${form.nombre}
📍 Dirección: ${form.direccion}
🔧 Electrodoméstico: ${form.electrodomestico}
⚙️ Acción: ${form.accion}
📝 Mensaje: ${form.mensaje || "(sin mensaje adicional)"}  
`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Sección de título superior */}
      <section className="contacto-titulo" id="contact">
        <h2>Estamos aquí para ayudarte</h2>
        <p>Escríbenos o visítanos, responderemos lo antes posible</p>
      </section>

      <section className="contacto-container">
        <div className="contacto-info">
          <h2>Contáctanos</h2>
          <p><strong>📞 Teléfono:</strong> 0988 630 953</p>
          <p><strong>📧 Correo:</strong> servifrio@gmail.com</p>
          <p><strong>📍 Dirección:</strong> Quito, Ecuador</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviarPorWhatsApp();
            }}
            className="formulario-contacto"
          >
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />

            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              required
            />

            <label>Electrodoméstico:</label>
            <select
              name="electrodomestico"
              value={form.electrodomestico}
              onChange={handleChange}
              required
            >
              <option value="">-- Selecciona --</option>
              <option value="Lavadora">Lavadora</option>
              <option value="Refrigeradora">Refrigeradora</option>
              <option value="Cocina">Cocina</option>
              <option value="Microondas">Microondas</option>
              <option value="Otro">Otro</option>
            </select>

            <label>¿Qué desea hacer?</label>
            <select
              name="accion"
              value={form.accion}
              onChange={handleChange}
              required
            >
              <option value="">-- Selecciona --</option>
              <option value="Reparar">Reparar</option>
              <option value="Comprar">Comprar</option>
            </select>

            <label>Mensaje (opcional):</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar por WhatsApp</button>
          </form>
        </div>

        <div className="contacto-mapa">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.6523102566481!2d-78.46783817156546!3d-0.18065396473705862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a5e2bd20f61%3A0x891d2605291e0386!2sQuito!5e0!3m2!1ses-419!2sec!4v1690892857723!5m2!1ses-419!2sec"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contacto;
