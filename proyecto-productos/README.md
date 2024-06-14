Aquí tienes el contenido completo del `README.md` que puedes copiar y pegar directamente:

```markdown
# Proyecto Productos

API para la gestión de productos utilizando Node.js, Express, Sequelize y MariaDB.

## Requisitos

- Node.js
- MariaDB

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/proyecto-productos.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd proyecto-productos
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=productos_db
   PORT=3000
   ```

2. Asegúrate de que MariaDB esté ejecutándose y que hayas creado una base de datos llamada `productos_db`.

## Ejecución

Para iniciar el servidor en modo desarrollo, ejecuta:

```sh
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`.

## Endpoints

### Crear un nuevo producto

- **URL**: `/productos`
- **Método**: `POST`
- **Body**: 

  ```json
  {
    "nombre": "Producto A",
    "precio": 10.99,
    "cantidad": 100,
    "categoria": "Categoría 1"
  }
  ```

### Obtener todos los productos

- **URL**: `/productos`
- **Método**: `GET`

### Obtener un producto por su ID

- **URL**: `/productos/:id`
- **Método**: `GET`

### Actualizar un producto por su ID

- **URL**: `/productos/:id`
- **Método**: `PUT`
- **Body**: 

  ```json
  {
    "nombre": "Producto A Actualizado",
    "precio": 12.99,
    "cantidad": 150,
    "categoria": "Categoría 2"
  }
  ```

### Eliminar un producto por su ID

- **URL**: `/productos/:id`
- **Método**: `DELETE`

### Obtener una lista de productos ordenada

- **URL**: `/productos/ordenados`
- **Método**: `GET`
- **Query Params**:
  - `criterio` (string): Uno de los siguientes valores - `nombre`, `precio`, `cantidad`

### Obtener una lista de productos filtrados

- **URL**: `/productos/filtrados`
- **Método**: `GET`
- **Query Params**:
  - `precioMin` (number, opcional): Precio mínimo del producto
  - `categoria` (string, opcional): Categoría del producto

## Dependencias

- express
- sequelize
- mariadb
- nodemon
- cors
- morgan
- dotenv

## DevDependencies

- nodemon

## Estructura del Proyecto

```plaintext
proyecto-productos/
├── models/
│   ├── index.js
│   └── producto.js
├── routes/
│   └── productos.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Notas

- Asegúrate de que tu base de datos MariaDB esté corriendo y configurada correctamente.
- Revisa los logs del servidor si encuentras algún problema.
- Si necesitas ayuda adicional, no dudes en abrir un issue en el repositorio.
```

Este `README.md` proporciona una descripción clara y detallada de tu proyecto, incluyendo instrucciones sobre cómo configurarlo, ejecutarlo y probar sus endpoints.