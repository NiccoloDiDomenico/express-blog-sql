// Import
const connection = require("../data/blog_db");

// Functions
// index
function index(req, res) {
    // preparo la query
    const sql = 'SELECT * FROM posts'

    // eseguo la query
    connection.query(sql, (err, result) => {
        if (err) return res.status(500), json({
            error: 'Database query failed'
        })
        res.json(result);
    })
};

// show
function show(req, res) {

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