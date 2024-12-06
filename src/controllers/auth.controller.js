import {saveUser} from '../models/user.model.js';

export const register = async (req, res) => {
    try{
        const {nombre, email, password, rol} = req.body;

        const user = await saveUser({nombre, email, password, rol});
        res.status(201).json(user);        
    }catch{
        res.status(500).json({message: 'Error al registrar el usuario'});
    }
}

export const login = (req, res) => res.send('login')