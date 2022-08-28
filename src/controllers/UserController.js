const User = require('../model/User');

module.exports = {
    // find to all users in database
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    // this function has the objective of registering a new user in the database
    async registerUser(req, res) {
        try {
            const { age, username, password } = req.body;
            const user = await User.create({ age, username, password, status: true });
            return res.json({
                error: false,
                msg: "success when registering user"
            });

        } catch (error) {
            return res.json({
                error: true,
                msg: "failed to register user",
                type: error['name']
            });
        }
    }
};
