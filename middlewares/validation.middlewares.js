const { body, validationResult } = require('express-validator')

//VALIDAR LOS MENSAJES DE LOS ERROES
const checkValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const errorMesage = errors.array().map(err => {
            return err.msg
        })
        const message = errorMesage.join('. ')
        return res.status(400).json({
            status: 'error',
            message
        })
    }
    next()
}

//VALIDAR CON EXPRESS VALIDATOR EL TIPO Y EL MODO
const createUserValidators = [
    body('name')
        .isString().withMessage('Name must be a string')
        .notEmpty().withMessage('Name cannot be empty')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('email')
        .isEmail().withMessage('Must provide a valid email'),
    body('password')
        .isString().withMessage('Password must be a string')
        .notEmpty().withMessage('Password cannot be empty')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    checkValidation
]

module.exports = { createUserValidators }