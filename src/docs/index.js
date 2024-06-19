/**
 * @api {get} /api/products Obtener todos los productos
 * @apiName GetProducts
 * @apiGroup Products
 * @apiPermission admin
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiSuccess {Object[]} products Lista de productos.
 * @apiSuccess {Number} products.id ID del producto.
 * @apiSuccess {String} products.lotNumber Número de lote del producto.
 * @apiSuccess {String} products.name Nombre del producto.
 * @apiSuccess {Number} products.price Precio del producto.
 * @apiSuccess {Number} products.availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} products.entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} products.createdAt Fecha de creación del producto.
 * @apiSuccess {Date} products.updatedAt Fecha de actualización del producto.
 *
 * @apiError {String} InternalServerError Error al obtener los productos.
 *
 * @apiErrorExample {json} Respuesta de error:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar obtener los productos"
 *     }
 */

/**
 * @api {post} /api/products Crear un nuevo producto
 * @apiName CreateProduct
 * @apiGroup Products
 * @apiPermission admin
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiParam {String} lotNumber Número de lote del producto.
 * @apiParam {String} name Nombre del producto.
 * @apiParam {Number} price Precio del producto.
 * @apiParam {Number} availableQuantity Cantidad disponible del producto.
 * @apiParam {Date} entryDate Fecha de entrada del producto.
 *
 * @apiSuccess {Number} id ID del producto creado.
 * @apiSuccess {String} lotNumber Número de lote del producto.
 * @apiSuccess {String} name Nombre del producto.
 * @apiSuccess {Number} price Precio del producto.
 * @apiSuccess {Number} availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} createdAt Fecha de creación del producto.
 * @apiSuccess {Date} updatedAt Fecha de actualización del producto.
 *
 * @apiError {String} InternalServerError Error al intentar crear el producto.
 *
 * @apiErrorExample {json} Respuesta de error:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar crear el producto"
 *     }
 */

/**
 * @api {get} /api/products/:id Obtener un producto por ID
 * @apiName GetProductById
 * @apiGroup Products
 * @apiPermission admin
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiParam {Number} id ID del producto.
 *
 * @apiSuccess {Number} id ID del producto.
 * @apiSuccess {String} lotNumber Número de lote del producto.
 * @apiSuccess {String} name Nombre del producto.
 * @apiSuccess {Number} price Precio del producto.
 * @apiSuccess {Number} availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} createdAt Fecha de creación del producto.
 * @apiSuccess {Date} updatedAt Fecha de actualización del producto.
 *
 * @apiError {String} NotFound Producto no encontrado.
 * @apiError {String} InternalServerError Error al intentar obtener el producto.
 *
 * @apiErrorExample {json} Respuesta de error Producto no encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Producto no encontrado"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al intentar obtener el producto:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar obtener el producto"
 *     }
 */

/**
 * @api {put} /api/products/:id Actualizar producto
 * @apiName UpdateProduct
 * @apiGroup Products
 * @apiPermission admin
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiParam {Number} id ID del producto.
 * @apiParam {String} [lotNumber] Número de lote del producto.
 * @apiParam {String} [name] Nombre del producto.
 * @apiParam {Number} [price] Precio del producto.
 * @apiParam {Number} [availableQuantity] Cantidad disponible del producto.
 * @apiParam {Date} [entryDate] Fecha de entrada del producto.
 *
 * @apiSuccess {Number} id ID del producto actualizado.
 * @apiSuccess {String} lotNumber Número de lote del producto actualizado.
 * @apiSuccess {String} name Nombre del producto actualizado.
 * @apiSuccess {Number} price Precio del producto actualizado.
 * @apiSuccess {Number} availableQuantity Cantidad disponible del producto actualizado.
 * @apiSuccess {Date} entryDate Fecha de entrada del producto actualizado.
 * @apiSuccess {Date} createdAt Fecha de creación del producto.
 * @apiSuccess {Date} updatedAt Fecha de actualización del producto.
 *
 * @apiError {String} NotFound Producto no encontrado.
 * @apiError {String} InternalServerError Error al intentar actualizar el producto.
 *
 * @apiErrorExample {json} Respuesta de error Producto no encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Producto no encontrado"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al intentar actualizar el producto:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar actualizar el producto"
 *     }
 */

/**
 * @api {delete} /api/products/:id Eliminar producto
 * @apiName DeleteProduct
 * @apiGroup Products
 * @apiPermission admin
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiParam {Number} id ID del producto.
 *
 * @apiSuccess {String} message Mensaje de confirmación.
 *
 * @apiError {String} NotFound Producto no encontrado.
 * @apiError {String} InternalServerError Error al intentar eliminar el producto.
 *
 * @apiErrorExample {json} Respuesta de error Producto no encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Producto no encontrado"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al intentar eliminar el producto:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar eliminar el producto"
 *     }
 */

/**
 * @api {post} /api/purchases Crear una o más compras
 * @apiName CreatePurchase
 * @apiGroup Purchases
 * @apiPermission client
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiBody {Object[]} purchases Array de objetos de compra.
 * @apiBody {Number} purchases.product_id ID del producto.
 * @apiBody {Number} purchases.amount Cantidad del producto.
 *
 * @apiSuccess {Object[]} success Lista de compras exitosas.
 * @apiSuccess {Number} success.id ID de la compra.
 * @apiSuccess {Number} success.product_id ID del producto.
 * @apiSuccess {Number} success.amount Cantidad del producto.
 * @apiSuccess {Date} success.createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} success.updatedAt Fecha de actualización de la compra.
 *
 * @apiError {Object[]} errors Lista de errores.
 * @apiError {Number} errors.product_id ID del producto con error.
 * @apiError {String} errors.error Descripción del error.
 *
 * @apiError (400) {String} BadRequest El cuerpo de la solicitud debe ser un array de compras.
 * @apiError (401) {String} Unauthorized No autorizado.
 * @apiError (404) {String} NotFound Producto no encontrado.
 * @apiError (500) {String} InternalServerError Error al crear la compra.
 *
 * @apiExample {json} Ejemplo de uso:
 *     POST /api/purchases
 *     [
 *       {
 *         "product_id": 1,
 *         "amount": 1
 *       },
 *       {
 *         "product_id": 2,
 *         "amount": 1
 *       }
 *     ]
 *
 * @apiSuccessExample {json} Respuesta exitosa:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": 1,
 *         "product_id": 1,
 *         "amount": 1,
 *         "createdAt": "2024-06-18T14:00:00.000Z",
 *         "updatedAt": "2024-06-18T14:00:00.000Z"
 *       },
 *       {
 *         "id": 2,
 *         "product_id": 2,
 *         "amount": 1,
 *         "createdAt": "2024-06-18T14:00:00.000Z",
 *         "updatedAt": "2024-06-18T14:00:00.000Z"
 *       }
 *     ]
 *
 * @apiErrorExample {json} Respuesta de error:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar crear la compra"
 *     }
 */

/**
 * @api {get} /api/purchases Obtener todas las compras
 * @apiName GetPurchases
 * @apiGroup Purchases
 * @apiPermission client
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiSuccess {Object[]} purchases Lista de compras.
 * @apiSuccess {Number} purchases.id ID de la compra.
 * @apiSuccess {Number} purchases.product_id ID del producto.
 * @apiSuccess {Number} purchases.amount Cantidad del producto.
 * @apiSuccess {Date} purchases.createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} purchases.updatedAt Fecha de actualización de la compra.
 *
 * @apiError {String} InternalServerError Error al recuperar las compras.
 *
 * @apiErrorExample {json} Respuesta de error:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error al recuperar compras"
 *     }
 */

/**
 * @api {get} /api/purchases/:id Obtener una compra por ID
 * @apiName GetPurchaseById
 * @apiGroup Purchases
 * @apiPermission client
 *
 * @apiHeader {String} authorization Token de autorización.
 *
 * @apiParam {Number} id ID de la compra.
 *
 * @apiSuccess {Number} id ID de la compra.
 * @apiSuccess {Number} product_id ID del producto.
 * @apiSuccess {Number} amount Cantidad del producto.
 * @apiSuccess {Date} createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} updatedAt Fecha de actualización de la compra.
 *
 * @apiError {String} NotFound Compra no encontrada.
 * @apiError {String} InternalServerError Error al recuperar la compra.
 *
 * @apiErrorExample {json} Respuesta de error Compra no encontrada:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Compra no encontrada"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al recuperar la compra:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error al recuperar la compra"
 *     }
 */

/**
 * @api {post} /api/login Iniciar sesión
 * @apiName LoginUser
 * @apiGroup Authentication
 *
 * @apiParam {String} email Correo electrónico del usuario.
 * @apiParam {String} password Contraseña del usuario.
 *
 * @apiSuccess {String} username Nombre de usuario.
 * @apiSuccess {String} token Token de acceso.
 *
 * @apiError {String} NotFound Usuario no encontrado.
 * @apiError {String} Unauthorized Contraseña incorrecta.
 * @apiError {String} InternalServerError Hubo un problema al intentar autenticar al usuario.
 *
 * @apiErrorExample {json} Respuesta de error Usuario no encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Usuario no encontrado"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Contraseña incorrecta:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Contraseña incorrecta"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al autenticar al usuario:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Hubo un problema al intentar autenticar al usuario"
 *     }
 */

/**
 * @api {post} /api/users Crear usuario
 * @apiName CreateUser
 * @apiGroup Authentication
 *
 * @apiParam {String} email Correo electrónico del usuario.
 * @apiParam {String} password Contraseña del usuario.
 * @apiParam {String} [username] Nombre de usuario.
 * @apiParam {String} [name] Nombre completo del usuario.
 *
 * @apiSuccess {String} username Nombre de usuario.
 * @apiSuccess {String} message Mensaje de éxito.
 *
 * @apiError {String} BadRequest El correo electrónico ya está registrado.
 * @apiError {String} InternalServerError Error al crear usuario.
 *
 * @apiErrorExample {json} Respuesta de error El correo electrónico ya está registrado:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "El correo electrónico ya está registrado"
 *     }
 *
 * @apiErrorExample {json} Respuesta de error Error al crear usuario:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error al crear usuario"
 *     }
 */
