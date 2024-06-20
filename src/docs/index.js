/**
 * @api {post} /api/products Crear un nuevo producto
 * @apiName CreateProduct
 * @apiGroup Products
 *
 * @apiParam {String} lotNumber Número de lote del producto.
 * @apiParam {String} name Nombre del producto.
 * @apiParam {Float} price Precio del producto.
 * @apiParam {Number} availableQuantity Cantidad disponible del producto.
 * @apiParam {Date} entryDate Fecha de entrada del producto.
 *
 * @apiSuccess {Object} product El producto creado.
 * @apiSuccess {Number} product.id ID del producto.
 * @apiSuccess {String} product.lotNumber Número de lote del producto.
 * @apiSuccess {String} product.name Nombre del producto.
 * @apiSuccess {Float} product.price Precio del producto.
 * @apiSuccess {Number} product.availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} product.entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} product.createdAt Fecha de creación del registro.
 * @apiSuccess {Date} product.updatedAt Fecha de última actualización del registro.
 *
 * @apiError (400) El producto ya está registrado.
 * @apiError (500) Error al intentar crear el producto.
 */

/**
 * @api {get} /api/products Obtener todos los productos
 * @apiName GetProducts
 * @apiGroup Products
 *
 * @apiSuccess {Object[]} products Lista de productos.
 * @apiSuccess {Number} products.id ID del producto.
 * @apiSuccess {String} products.lotNumber Número de lote del producto.
 * @apiSuccess {String} products.name Nombre del producto.
 * @apiSuccess {Float} products.price Precio del producto.
 * @apiSuccess {Number} products.availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} products.entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} products.createdAt Fecha de creación del registro.
 * @apiSuccess {Date} products.updatedAt Fecha de última actualización del registro.
 */

/**
 * @api {get} /api/products/:id Obtener un producto por ID
 * @apiName GetProductById
 * @apiGroup Products
 *
 * @apiParam {Number} id ID del producto.
 *
 * @apiSuccess {Object} product El producto encontrado.
 * @apiSuccess {Number} product.id ID del producto.
 * @apiSuccess {String} product.lotNumber Número de lote del producto.
 * @apiSuccess {String} product.name Nombre del producto.
 * @apiSuccess {Float} product.price Precio del producto.
 * @apiSuccess {Number} product.availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} product.entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} product.createdAt Fecha de creación del registro.
 * @apiSuccess {Date} product.updatedAt Fecha de última actualización del registro.
 *
 * @apiError (404) Producto no encontrado.
 * @apiError (500) Error al intentar obtener el producto.
 */

/**
 * @api {put} /api/products/:id Actualizar un producto
 * @apiName UpdateProduct
 * @apiGroup Products
 *
 * @apiParam {Number} id ID del producto.
 * @apiParam {String} [lotNumber] Número de lote del producto.
 * @apiParam {String} [name] Nombre del producto.
 * @apiParam {Float} [price] Precio del producto.
 * @apiParam {Number} [availableQuantity] Cantidad disponible del producto.
 * @apiParam {Date} [entryDate] Fecha de entrada del producto.
 *
 * @apiSuccess {Object} product El producto actualizado.
 * @apiSuccess {Number} product.id ID del producto.
 * @apiSuccess {String} product.lotNumber Número de lote del producto.
 * @apiSuccess {String} product.name Nombre del producto.
 * @apiSuccess {Float} product.price Precio del producto.
 * @apiSuccess {Number} product.availableQuantity Cantidad disponible del producto.
 * @apiSuccess {Date} product.entryDate Fecha de entrada del producto.
 * @apiSuccess {Date} product.createdAt Fecha de creación del registro.
 * @apiSuccess {Date} product.updatedAt Fecha de última actualización del registro.
 *
 * @apiError (404) Producto no encontrado.
 * @apiError (500) Error al intentar actualizar el producto.
 */

/**
 * @api {delete} /api/products/:id Eliminar un producto
 * @apiName DeleteProduct
 * @apiGroup Products
 *
 * @apiParam {Number} id ID del producto.
 *
 * @apiSuccess {String} message Mensaje de confirmación.
 *
 * @apiError (404) Producto no encontrado.
 * @apiError (500) Error al intentar eliminar el producto.
 */

/**
 * @api {get} /api/details-purchases Obtener todos los detalles de compras
 * @apiName GetAllPurchaseDetails
 * @apiGroup PurchaseDetails
 *
 * @apiSuccess {Object[]} purchaseDetails Lista de detalles de compras.
 * @apiSuccess {Number} purchaseDetails.id ID del detalle de compra.
 * @apiSuccess {Number} purchaseDetails.user_id ID del usuario que realizó la compra.
 * @apiSuccess {Date} purchaseDetails.datePurchase Fecha de la compra.
 * @apiSuccess {Number} purchaseDetails.product_id ID del producto comprado.
 * @apiSuccess {Number} purchaseDetails.amount Cantidad del producto comprado.
 * @apiSuccess {Float} purchaseDetails.totalPrice Precio total de la compra.
 *
 * @apiError (500) Error al intentar obtener los detalles de compras.
 */

/**
 * @api {post} /api/purchases Crear una compra
 * @apiName CreatePurchase
 * @apiGroup Purchases
 *
 * @apiParam {Object[]} purchasesData Lista de objetos de compras.
 * @apiParam {Number} purchasesData.product_id ID del producto.
 * @apiParam {Number} purchasesData.amount Cantidad del producto.
 *
 * @apiSuccess {Object[]} success Compras exitosas.
 * @apiSuccess {Number} success.id ID de la compra.
 * @apiSuccess {Number} success.product_id ID del producto.
 * @apiSuccess {Number} success.user_id ID del usuario.
 * @apiSuccess {Number} success.amount Cantidad comprada.
 * @apiSuccess {Date} success.createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} success.updatedAt Fecha de última actualización de la compra.
 *
 * @apiError (400) El cuerpo de la solicitud debe ser un array de compras.
 * @apiError (207) success Compras exitosas.
 * @apiError (207) errors Errores ocurridos durante la creación de las compras.
 * @apiError (500) Error al intentar crear la compra.
 */

/**
 * @api {get} /api/purchases Obtener todas las compras
 * @apiName GetAllPurchases
 * @apiGroup Purchases
 *
 * @apiSuccess {Object[]} purchases Lista de compras.
 * @apiSuccess {Number} purchases.product_id ID del producto.
 * @apiSuccess {Number} purchases.user_id ID del usuario.
 * @apiSuccess {Number} purchases.amount Cantidad comprada.
 * @apiSuccess {Date} purchases.createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} purchases.updatedAt Fecha de última actualización de la compra.
 *
 * @apiError (500) Error al intentar obtener las compras.
 */

/**
 * @api {get} /api/purchases/:id Obtener una compra por ID
 * @apiName GetPurchaseById
 * @apiGroup Purchases
 *
 * @apiParam {Number} id ID de la compra.
 *
 * @apiSuccess {Object} purchase La compra encontrada.
 * @apiSuccess {Number} purchase.product_id ID del producto.
 * @apiSuccess {Number} purchase.user_id ID del usuario.
 * @apiSuccess {Number} purchase.amount Cantidad comprada.
 * @apiSuccess {Date} purchase.createdAt Fecha de creación de la compra.
 * @apiSuccess {Date} purchase.updatedAt Fecha de última actualización de la compra.
 *
 * @apiError (404) Compra no encontrada.
 * @apiError (500) Error al intentar obtener la compra.
 */
