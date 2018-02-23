module.exports = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({error: 'You must be logged in to perform this action!'});
    } else {
        next();
    }
};