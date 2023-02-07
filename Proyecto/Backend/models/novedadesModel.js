var pool = require('./bd');


async function getNovedades() {
    try {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error)
    }
}

async function getNovedadesById(id) {
    try {
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.log(error)
    }
}

async function insertNovedades(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        console.log(rows)
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function delNovedadesById(id) {
    try {
        var query = 'delete from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function modNovedadesById(obj,id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, getNovedadesById, insertNovedades, delNovedadesById, modNovedadesById }