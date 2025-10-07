---
title: API Reference
description: Referencia completa de la API JavaScript del widget de AIFindr
slug: /widget-config/api-reference
sidebar_position: 6
---

# AIFindr Commerce Widget

El **AIFindr Commerce Widget** incorpora en tu web un asistente conversacional que **responde preguntas, guía a los usuarios y aumenta la conversión** sin interrumpir la navegación.

## Instalación

La integración del AIFindr Commerce Widget se realiza en dos pasos.

### Paso 1 · Carga el script del widget

```html
<script
  src="https://cdn.aifindrcommerce.ai/widget.js"
  data-client-id="TU_CLIENT_ID"
  defer
></script>
```

:::info
Reemplaza `TU_CLIENT_ID` con el identificador único proporcionado por el equipo de AIFindr Commerce.
:::

#### ¿Dónde colocar el script?

- En el `<head>` con el atributo `defer` para que se cargue de forma asíncrona y sin bloquear la carga de la página.

### Paso 2 · Renderiza el widget en un elemento web usando su constructor

```html
<script>
  // Debemos ejecutar el constructor una vez el DOM esté cargado. Si la página se genera dinámicamente, asegúrate de llamar a este código después de que el contenedor esté en el DOM.
  window.addEventListener('DOMContentLoaded', () => {
    const widget = new AIFindrCommerceWidget({
      "renderTo": "#aifindr-widget-container", // ID del contenedor donde se renderizará el widget
      "clientId": "TU_CLIENT_ID", // Reemplaza con tu Client ID
      "baseUrl": "https://client.aifindrcommerce.ai", // URL del contenido del widget
    });
  });
</script>
```

## API Reference

Documentación completa de la API JavaScript del widget de AIFindr Commerce. La clase `AIFindrCommerceWidget` proporciona una interfaz completa para controlar cada instancia del widget.

### Constructor

#### `new AIFindrCommerceWidget(options)`

Crea una nueva instancia del widget y la inicializa.

**Parámetros:**

- `options` (object): Configuración de inicialización
  - `renderTo` (string): Selector CSS del contenedor donde renderizar el widget
  - `clientId` (string): Tu Client ID de AIFindr Commerce
  - `baseUrl` (string): URL base del servicio del widget

**Retorna:** `AIFindrCommerceWidget` - Instancia del widget

```js
// Crear una instancia del widget
const widget = new AIFindrCommerceWidget({
  renderTo: '#aifindr-widget-container',
  clientId: 'TU_CLIENT_ID',
  baseUrl: 'https://client.aifindrcommerce.ai'
});
```

### Inicialización

#### `widget.ready(callback?)`

Ejecuta código cuando el widget está completamente cargado.

**Parámetros:**

- `callback` (function, opcional): Función a ejecutar cuando esté listo

**Retorna:**

- Si no se pasa callback: `Promise<AIFindrCommerceWidget>`
- Si se pasa callback: `AIFindrCommerceWidget`

```js
// Usando callback
widget.ready(() => {
  console.log('Widget listo!');
}).setContext({ userId: '123' });

// Usando Promise
await widget.ready();
console.log('Widget listo!');
```

#### `widget.isReady()`

Verifica si el widget está listo para usar.

**Retorna:** `boolean`

```js
if (widget.isReady()) {
  widget.open();
} else {
  console.log('Widget aún no está listo');
}
```

### Sistema de Eventos

#### `widget.on(event, callback)`

Registra un listener para un evento específico.

**Parámetros:**

- `event` (string): Nombre del evento
- `callback` (function): Función a ejecutar cuando ocurra el evento

**Retorna:** `AIFindrCommerceWidget` - La misma instancia para encadenamiento

```js
widget.on('widget.opened', () => {
  console.log('Widget se abrió');
});

widget.on('widget.closed', () => {
  console.log('Widget se cerró');
});

// Con encadenamiento
widget
  .on('widget.opened', () => console.log('Abierto'))
  .on('widget.closed', () => console.log('Cerrado'));
```

#### `widget.off(event, callback)`

Desregistra un listener de evento específico.

**Parámetros:**

- `event` (string): Nombre del evento
- `callback` (function): Función listener a remover

**Retorna:** `AIFindrCommerceWidget` - La misma instancia para encadenamiento

```js
const handler = () => console.log('Widget abierto');

// Registrar
widget.on('widget.opened', handler);

// Desregistrar
widget.off('widget.opened', handler);
```

### Eventos Disponibles

#### `AIFindrCommerceWidget.EVENTS`

Constante con los nombres de todos los eventos disponibles (disponibles como propiedad estática de la clase).

```js
const { EVENTS } = AIFindrCommerceWidget;

// Eventos del ciclo de vida del widget
widget.on(EVENTS.WIDGET_READY, () => {
  console.log('Widget inicializado y listo');
});

widget.on(EVENTS.WIDGET_OPENED, () => {
  console.log('Widget abierto');
});

widget.on(EVENTS.WIDGET_CLOSED, () => {
  console.log('Widget cerrado');
});

widget.on(EVENTS.WIDGET_ERROR, (error) => {
  console.error('Error en widget:', error);
});

// Eventos de conversación
widget.on(EVENTS.CONV_STARTED, (data) => {
  console.log('Conversación iniciada:', data);
});

widget.on(EVENTS.MESSAGE_SENT, (message) => {
  console.log('Mensaje enviado:', message);
});

widget.on(EVENTS.MESSAGE_RECV, (message) => {
  console.log('Mensaje recibido:', message);
});

// Eventos de comercio
widget.on(EVENTS.PRODUCT_SELECTED, (data) => {
  console.log('Producto seleccionado:', data.productId);
});

widget.on(EVENTS.PRODUCT_CTA, (data) => {
  console.log('CTA de producto:', data.productId, data.actionId);
});
```

#### Lista de Eventos

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `widget.ready` | Widget inicializado y listo | `undefined` |
| `widget.opened` | Widget abierto exitosamente | `undefined` |
| `widget.closed` | Widget cerrado | `undefined` |
| `widget.error` | Error en el widget | `Error object` |
| `conversation.started` | Nueva conversación iniciada | `{ conversationId, timestamp }` |
| `message.sent` | Usuario envió un mensaje | `{ message, timestamp }` |
| `message.received` | IA respondió con un mensaje | `{ message, timestamp }` |
| `commerce.product.selected` | Usuario seleccionó un producto | `{ productId, timestamp }` |
| `commerce.product.cta` | Usuario pulsó CTA de un producto | `{ productId, actionId, timestamp }` |

### Ejemplos de Uso

#### Integración básica

```js
// Crear instancia del widget
const widget = new AIFindrCommerceWidget({
  renderTo: '#aifindr-widget-container',
  clientId: 'TU_CLIENT_ID',
  baseUrl: 'https://client.aifindrcommerce.ai'
}).on('widget.opened', () => {
  trackEvent('widget_opened');
}).on('conversation.started', () => {
  trackEvent('conversation_started');
});
```

#### Eventos de comercio electrónico

```js
const { EVENTS } = AIFindrCommerceWidget;

// Escuchar cuando el usuario selecciona un producto
widget.on(EVENTS.PRODUCT_SELECTED, (data) => {
  console.log('Producto seleccionado:', data.productId);

  // Trackear en analytics
  gtag('event', 'product_view', {
    product_id: data.productId,
    source: 'aifindr_widget'
  });

  // Abrir un nuevo tab con la página del producto
  window.open(`/productos/${data.productId}`, '_blank');
});

// Escuchar cuando el usuario hace click en un CTA de producto
widget.on(EVENTS.PRODUCT_CTA, (data) => {
  console.log('CTA:', data.actionId, 'Producto:', data.productId);

  // Manejar diferentes acciones
  switch (data.actionId) {
    case 'add_to_cart':
      addToCart(data.productId);
      break;
    case 'add_to_wishlist':
      addToWishlist(data.productId);
      break;
    default:
      console.log('Acción no reconocida:', data.actionId);
  }

  // Trackear en analytics
  gtag('event', 'product_cta', {
    product_id: data.productId,
    action: data.actionId,
    source: 'aifindr_widget'
  });
});

// Ejemplo de integración con carrito de compras
function addToCart(productId) {
  fetch('/api/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity: 1 })
  })
  .then(response => response.json())
  .then(cart => {
    console.log('Producto añadido al carrito:', cart);
    updateCartUI(cart);
  });
}
```
