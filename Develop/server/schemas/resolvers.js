const {User } = require ('../models')
const {signToken} = require('../utils/auth')
  const resolvers = {
    Query: {
      me: async (parent, args, context) => { 
        if (context.user){
          const user = await User.findOne({_id: context.user._id})
        return user
        }
        throw new Error('No user found')
        
      }
    },
    Mutation: {
      login: async (parent, { email,password }) => {
        const user = await User.findOne({email})
        if (!user) {
          throw new Error('No user found')

        }
        const pw = user.isCorrectPassword (password)
        if (!pw) {
          throw new Error('Wrong password')
        }
        const token = signToken(user)
        return {token, user}
      },
      addUser: async (parent, { email, username, password}) => {
        const user = await User.create({email, password, username})
        const token = signToken(user)
        return {token, user}
      },
    saveBook: async (parent, {bookData}, context) => {
   
      if (context.user) {
           const user = await User.findByIdAndUpdate(
            {_id: context.user._id},
            {$push: {savedBooks: bookData}},
            {new: true}
           )
    return user

      }
      throw new Error ('No User')
    },
     removeBook: async (parent, { bookId }) => {
        const index = books.findIndex((book) => book.id === id);
        if (context.user) {
          const user = await User.findByIdAndUpdate(
           {_id: context.user._id},
           {$pull: {savedBooks: bookId}},
           {new: true}
          )
   return user

     }
     throw new Error ('No User Found')
      },
    },
  };
  
  module.exports = resolvers;
  