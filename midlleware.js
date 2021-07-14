const notFound = (req, res, next) => {
    const error = new Error(`not Found - ${req,originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, status) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)

    if (!process.env.NODE_ENV == 'production') {
        res.json({
            message: error.message, 
            statusCode: statusCode, 
            erorr: procces.env.NODE_ENV === 'production' ? '🔥' : error.stack,
        })
    } else  {
        res.json({
            message: error.message, 
            statusCode: statusCode
        })
    }
}

module.exports = {
    notFound, 
    errorHandler
}