const { AuthenticationError } = require('apollo-server-express');
const { 
  Category, 
  User, 
  Question, 
  Answer
} = require('../models');

const { update } = require('../models/User');
const { signToken } = require('../utils/auth')

const resolvers = {

  Query: {
    categories: async () => {
      return await Category.find({});
    },
    questions: async () => {
      return await Question.find({}).populate('category').populate('author');
    },
    questionsByUserId: async (parent, {author}) => {
      return await Question.find({ author: author }).populate('category').populate('author');
    },
    questionsByCategory: async (parent, {category}) => {
      return await Question.find({ category: category }).populate('category').populate('author');
    },
    users: async () => {
      return await User.find({});
    },
    user: async (parent, args, context) => {
      const foundUser = await User.findOne({
          $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
        });
    
        if (!foundUser) {
          throw new AuthenticationError('Incorrect credentials');
        }
        return (foundUser);
    }, 
    answers: async () => {
      return await Answer.find({}).populate('authorId').populate('questionId');
    },
    answersByQuestionId: async (parent, {questionId}) => {
      return await Answer.find({ questionId: questionId }).populate('authorId').populate('questionId');
    },
    answersByUserId: async (parent, {authorId}) => {
      return await Answer.find({ authorId: authorId }).populate('authorId').populate('questionId');
    }
  },

  Mutation: {

    addCategory: async (parent, {name}) =>{
      return await Category.create({name})
    },
    addQuestion: async (parent, {questionText, category, author}, context) =>{
      
      let categoryId = await Category.findOne({name:category});
      let userId = await User.findOne({username:author})
      let newQuestion = await Question.create({questionText, category:categoryId, author: userId})
      // let testing3 = await User.findByIdAndUpdate(userId, {questions: newQuestion._id})
      return newQuestion
    },

    removeQuestion: async (parent, { id }) => {
      let removeAnswersByQuestionId = await Answer.deleteMany({ questionId: id })
      return Question.findOneAndDelete({ _id: id });
    },
    // addUser: async (parent, {username, password, email}) =>{
    //   return await User.create({username, password, email})
    // },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    },

    removeUser: async (parent, { id }) => {
      return User.findOneAndDelete({ _id: id });
    },
    addAnswer: async (parent, { answerText, authorId, questionId }) => {
      let user = await User.findOne({username:authorId})
      let question = await Question.findOne({_id:questionId})
      let newAnswer = await Answer.create({answerText, authorId: user, questionId: question})
      return newAnswer
    },
    //added login for the mutations 
    // i know that this seems like its not a manipulation but it is bc your changing STATE
     login: async(_parent, {username, password}) => {

       const user = await User.findOne({ username: username});

       const correctPw = await user.isCorrectPassword(password);

       if(!user) {
        throw new AuthenticationError('incorrect credentials');
      }

       if(!correctPw) {
         throw new AuthenticationError('incorrect credentials');
       }

       const token = signToken(user);

       return { token, user };
     },
     /*updateVoteCount: async(_parent, {_id, voteCount}) => {
      const question = await Question.findByIdAndUpdate({ _id: _id});

      if(!question) {
        throw new Error('No question with that ID')
      }

      newVoteCount = voteCount

     }*/
  }
};

module.exports = resolvers;