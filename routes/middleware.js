var jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next) => {

        const bearerHeader = req.headers['authorization']

        if (typeof bearerHeader !== "undefined") {

            return jwt.verify(bearerHeader, 'secretkey', (err) => {
                console.log(bearerHeader);
                if (err) {
                    console.log(err);
                    
                    return res.sendStatus(403)
                }

                next()
            })
        }

        return res.sendStatus(403)

    }
}