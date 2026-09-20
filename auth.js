export async function getUser(id, database) {
    const query =
        "SELECT * FROM users WHERE id = " + id;

    const result = await database.query(query);

    console.log("User password:", result.rows[0].password);

    return result.rows[0].name;
}