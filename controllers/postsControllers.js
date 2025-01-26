// Import
const connection = require("../data/blog_db");

// Functions
// index
function index(req, res) {
    // preparo la query
    const sql = 'SELECT * FROM posts'

    // eseguo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500), json({
            error: 'Database query failed'
        })
        res.json(results);
    })
};

// show
function show(req, res) {
    // recuperiamo l'id dall'URL
    const id = req.params.id;

    // preparo la query
    const sql = 'SELECT * FROM posts WHERE id = ?'

    // eseguo la query
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: 'Database query failed'
        });
        if (results.length === 0) return res.status(404).json({
            error: 'Pizza not found'
        });
        res.json(results[0]);
    });
};

// store
function store(req, res) {

};

// updute
function updute(req, res) {

};

// modify
function modify(req, res) {

};

// destroy
function destroy(req, res) {
    // recuperiamo l'id dall'URL
    const { id } = req.params;

    // preparo la query
    const sql = 'DELETE FROM posts WHERE id = ?'

    // eseguo la query
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: 'Failed to delete post'
        });
        res.sendStatus(204);
    });
};

// Export
module.exports = {
    index,
    show,
    store,
    updute,
    modify,
    destroy
};