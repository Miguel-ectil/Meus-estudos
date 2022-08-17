import Datastore from 'nedb';

export const db = {
  users: new Datastore({ filename: './data/users.db', autoload: true }),
};
db.users.ensureIndex({ fieldName: 'username', unique: true });

const videos = [
  {
    id: 'b273eff9-b963-49f1-923e-4a7d01f26d29',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '9d4adbbe-84c1-4e2a-929d-9904dfca9c44',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]


export default {
  videos,
};
