var jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next) => {

        const bearerHeader = req.headers['authorization']

        if (typeof bearerHeader !== "undefined") {

            return jwt.verify(bearerHeader, 'secretkey', (err, authData) => {
                if (err) {
                    return res.sendStatus(403)
                }
                
                req.user = authData.user

                next()
            })
        }

        return res.sendStatus(403)

    }
}