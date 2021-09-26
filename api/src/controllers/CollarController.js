var models = require('../database/models');

module.exports = {
    async index(req, res) {
        const collars = await models.Collar.findAll();
        return res.json(collars);
    },

    async store(req, res) {
        const { color, animalId } = req.body;

        const animal = models.Animal.findByPk(animalId)

        if (!animal) {
            return res.status(400).json({ error: 'Animal not found' });
        }

        const collar = await models.Collar.create({
            color, animalId
        });


        return res.json(collar);
    },

    async update(req, res) {
        const { collarId } = req.params
        const collar = await models.Collar.findByPk(collarId)
        const change = await collar.update(req.body, { returning: true })
        res.json(change)
    },

    async delete(req, res){
        const {collarId} = req.params 
        await models.Collar.destroy({where: {id: collarId}})
        res.json("sucesso")
    }
};