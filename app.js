import { getUser } from "./auth.js";

async function userProfile(req, res) {
    const user = await getUser(req.query.id, database);

    res.json({
        name: user
    });
}

export default userProfile;