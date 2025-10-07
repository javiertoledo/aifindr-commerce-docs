# AIFindr Commerce - Documentación del Widget

Este repositorio contiene la guía oficial para instalar y configurar el widget conversacional de AIFindr Commerce. El sitio está construido con [Docusaurus 3](https://docusaurus.io/) y se centra exclusivamente en flujos de onboarding, personalización visual y despliegue del widget.

## 🚀 Instalación y configuración inicial

> ⚠️ Usa **yarn** como gestor de paquetes para evitar incidencias con peer dependencies.

```bash
# Clonar el repositorio
git clone <repository-url>
cd aifindr-commerce-docs

# Instalar dependencias
yarn install
```

## 🛠️ Desarrollo local

```bash
# Servidor de desarrollo con recarga automática
yarn start
```

El sitio se abre en `http://localhost:3000` y refleja los cambios de Markdown/React en caliente. Reinicia el servidor si tocas la configuración principal (`docusaurus.config.ts`).

## 📚 Guías de contenido

Toda la documentación editable vive en `docs/widget-config/` y está organizada por etapas:

- `intro.md`: visión general del widget y casos de uso
- `instalacion.md`: snippet de inserción y requisitos previos
- `triggers.md`: configuración de disparadores
- `personalizacion.md`: estilos, temas y copywriting
- `contexto-metadatos.md`: cómo enviar datos dinámicos al asistente

Cada archivo debe mantener front matter con `slug`, `title` y `sidebar_position` para preservar la navegación.

## 🧪 Validación antes de publicar

```bash
# Construir versión de producción
yarn build

# Revisar el bundle generado
yarn serve
```

`yarn build` detecta enlaces rotos, activos faltantes y errores de Markdown. Usa `yarn serve` para revisar el resultado final tal como lo verán clientes y partners.

## 🌐 Despliegue

GitHub Actions construye y publica automáticamente el sitio en GitHub Pages cada vez que hay commits en `main`:

1. Actualiza el contenido en `docs/widget-config/`
2. Ejecuta `yarn build` de forma local para validar
3. Haz commit y push a `main`
4. El workflow `Deploy Docs` compila el sitio y lo sube al artefacto de GitHub Pages
5. GitHub Pages publica el contenido en la rama gestionada por Actions (`github-pages`)

> ℹ️ Tras el primer merge con `main`, entra en *Settings → Pages* y selecciona **GitHub Actions** como fuente. Si usas dominio personalizado, defínelo ahí y añade el registro DNS correspondiente.

## 🏗️ Estructura del proyecto

```
aifindr-commerce-docs/
├── docs/                  # Contenido en Markdown del widget
├── src/                   # Componentes React y estilos globales
├── static/                # Imágenes, fuentes y assets estáticos
├── docusaurus.config.ts   # Configuración principal del sitio
├── sidebars.ts            # Definición de la navegación lateral
├── package.json           # Dependencias y scripts de Yarn
└── yarn.lock              # Bloqueo de dependencias
```

## 🔧 Personalización

- Ajusta estilos globales en `src/css/custom.css`
- Añade componentes reutilizables en `src/components/`
- Crea páginas promocionales o landings en `src/pages/`
- Mantén el contenido traducido y consistente con la voz de marca

## 📖 Recursos adicionales

- [Documentación de Docusaurus](https://docusaurus.io/docs)
- [Guía de componentes de React](https://react.dev/learn)
- [Documentación Cloudflare Pages](https://developers.cloudflare.com/pages)
