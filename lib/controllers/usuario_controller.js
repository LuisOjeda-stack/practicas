
import Usuario from '../models/usuario';

export const index = async (req, res) => {
    const usuarios = await Usuario.findAll({});
    res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};


export const show = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        res.json({ data: usuario.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro el usuario con el id ${req.params.id}` });
    }
};

export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.findByPk(req.params.id);
            usuario.name = req.body.name;
            await usuario.save();
            res.status(200).send({ id: usuario.id });
        } else {
            res.status(400).json('Nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const create = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.create({ name: req.body.name });
            res.status(200).send({ id: rol.id });
        }
        else {
            res.status(400).json("Nombre no recibido");
        }
    } catch (err) {
        return res.status(500).send(err);
    }
}