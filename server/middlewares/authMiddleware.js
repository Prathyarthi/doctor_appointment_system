import jwt from 'jsonwebtoken'

export const isLoggedIn = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).send("Access Denied: Authorization header missing");
        }

        let token = req.headers.authorization.split(" ")[1];
        console.log(token);

        if (!token) {
            return res.status(403).send("Access Denied")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id
        next()

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}