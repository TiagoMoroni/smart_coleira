var models = require('../database/models');

module.exports = {
    async index(req, res) {
        const users = await models.User.findAll({
            include: [
                {
                    association: 'animals',
                    include: [
                        {association: 'collar'}
                    ]
                },
            ]

        });
        return res.json(users);
    },

    async store(req, res) {
        const { name, email, password } = req.body;


        const user = await models.User.create({
            name, email, password
        });


        return res.json(user);
    },

    async update(req, res) {
        const { userId } = req.params
        const user = await models.User.findByPk(userId)
        const change = await user.update(req.body, { returning: true })
        res.json(change)
    },

    async delete(req, res){
        const {userId} = req.params 
        await models.User.destroy({where: {id: userId}}).then(function () {});
        res.json("sucesso")
    }
};