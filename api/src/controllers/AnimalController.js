var models = require('../database/models');

module.exports = {
    async index(req, res) {
        const animals = await models.Animal.findAll({
            include: [
                {
                    association: 'collar',
                },
            ]

        });
        return res.json(animals);
    },

    async store(req, res) {
        const { name, specie, breed, userId } = req.body;

        const user = await models.User.findByPk(userId)

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const animal = await models.Animal.create({
            name, specie, breed, userId
        });


        return res.json(animal);
    },

    async update(req, res) {
        const { animalId } = req.params
        const animal = await models.Animal.findByPk(animalId)
        const change = await animal.update(req.body, { returning: true })
        res.json(change)
    },

    async delete(req, res){
        const {animalId} = req.params 
        await models.Animal.destroy({where: {id: animalId}})
        res.json("sucesso")
    }
};