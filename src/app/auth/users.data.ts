import { User } from './../app.model';

const users: User[] = [
  {
    name: 'admin',
    email: 'admin@demo.com',
    password: 'admin',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john.doe@demo.com',
    password: 'password123',
    role: 'User',
  },
  {
    id: '3',
    name: 'Meeta Sharma',
    email: 'meeta.sharma@demo.com',
    password: 'password456',
    role: 'User',
  },
  {
    id: '4',
    name: 'Palak Gupta',
    email: 'palak@demo.com',
    password: 'palak123',
    role: 'User',
  },
];

export default users;