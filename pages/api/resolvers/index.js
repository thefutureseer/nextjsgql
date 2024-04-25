import axios from 'axios';

export const resolvers = {
  Query: {
    getUsers: async ()=>{
      try{
        const users = await axios.get('https://api.github.com/users');
          return users.data.map(({id, login, avatar_url})=>({

          }))

      } catch(err) {
        console.error("error with getusers: ", message.err);
        throw err
      }

    },

    getUser: async (_, args)=>{
      try {
        const user = await axios.get(`https://api.github.com/users/${args.name}`);
        return {
          id: user.data.id, 
          login: user.data.login, 
          avatar_url: user.data.avatar_url

        }
      } catch(error) {
        throw error;
      }

    }
  }
}