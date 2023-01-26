import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
       login(username: $username, password: $password) {
        token
        user {
            _id
            username
        }
       } 
    }
`
export const ADD_QUESTION = gql`
mutation Mutation($questionText: String!, $author: String!) {
  addQuestion(questionText: $questionText, author: $author) {
    _id
    author {
      username
    }
  }
}

`

export const ADD_CATEGORY = gql`
    mutation addCategory($name: String!){
        addCategory(name: $name){
            category {
                _id
                name
            }
        }
    }
`
// verify parameter name, apollo liked this syntax
export const REMOVE_QUESTION = gql`
    mutation removeQuestion($removeQuestionId: ID!) {
        removeQuestion(id: $removeQuestionId) {
            _id
        }
    }
`

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
            }
        }
    }
`
// verify parameter name, apollo liked this syntax
export const REMOVE_USER = gql`
    mutation removeUser($removeUserId: ID!) {
        removeUser(id: $removeUserId) {
            _id
        }
    }
`

export const ADD_ANSWER = gql`
    mutation addAnswer($answerText: String!, $authorId: ID!, $questionId: ID!) {
        addAnswer(answerText: $answerText, authorId: $authorId, questionId: $questionId) {
            _id
            answerText
        }
    }
`
export const UPDATE_VOTECOUNT = gql`
    mutation updateVoteCount($id: ID!) {
        updateVoteCount(id: $id) {
            _id
            questionText
            voteCount
        }
    }
`
