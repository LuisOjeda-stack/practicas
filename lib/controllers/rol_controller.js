import Rol from "../models/rol";


export const index = async (req, res) => {
    const roles = await Rol.findAll({});
    res.json({ data: roles.map((rol) => rol.toJSON()) });
};

export const show = async (req, res) => {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
        res.json({ data: rol.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `no se encontro la carrera  id ${req.params.id}` });
    }
};

export const create = async (req, res) => {

    try {
        console.log("llega");
        if (req.body.name !== undefined) {
            console.log(req.body.name);
            const rol = await Rol.create({ name: req.body.name });
            req.status(200).send({ data: rol.id });
        }
        else {
            cosole.log("llego");
            res.status(400).json('nombre no recibido');
        }

    } catch (err) {
        console.log("trato");
        return res.status(500).send(err);
    }
};

export const update = async (req, res) => {
    try {
        if (req.body.name !== undefined) {
            const Rol = await rol.findByPk(req.params.id);
            rol.name = req.body.name;
            await rol.save();
            res.status(200).send({ data: rol.id });
        } else {
            res.status(400).json('nombre no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};