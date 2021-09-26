var models = require('../database/models');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;

        const user = await models.User.findOne({where: {email}})
        if (user) {
            const validPassword = await user.validPassword(password)
            if (validPassword) {
                return res.json(user)
            }
        }
        return res.status(400).json({ error: 'Dados inválidos' });
    },
};