const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const { notFound, errorHandler } = require('./midlleware')

const app = express()
app.use(cors())
app.use(morgan())
app.use(helmet())

app.use((req, res, next) => {
    res.set('Cache-control', 'public, s-maxage=60, state-while-revalidate')
    next()
})

app.get('/', (req, res) => {
    res.redirect('/api')
})

app.use('/api', require('./routes/routes'))


app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at port ${PORT}`))