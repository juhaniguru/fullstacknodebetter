const User = require('../models/user')

module.exports = {
    register: async (username) => {
        const user = await User.findOne({username})
    
        if(user != null) {
            throw new Error('username taken')
        }

        const newUser = new User({username})
        await newUser.save()
        return newUser
    }
    
}