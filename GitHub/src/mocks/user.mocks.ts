import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: "Jude Santos",
    company: "yourtechy.com",
    location: "Fontana, CA",
    bio: "I make software using angular and ionic",
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'jude@yourtechy.com'
  },
  {
    name: "Debi Santos",
    company: "yourtechy.com",
    location: "Downey, CA",
    bio: "I make software people work to death using only my charm",
    avatar_url: 'http://i.imgur.com/TzWcihb.png',
    email: 'debi@yourtechy.com'
  }
];

export const USER_LIST = userList;
