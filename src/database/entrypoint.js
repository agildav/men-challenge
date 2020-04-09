const databases = ['codea-men-challenge', 'codea-men-challenge-test'];
const user = 'root';
const pwd = 'password';
const role = 'readWrite';

databases.forEach((database) => {
  db = db.getSiblingDB(database);

  db.createUser({
    user,
    pwd,
    roles: [
      {
        role,
        db: database,
      },
    ],
  });
});
