import type { ReactNode } from 'react';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'General',
    items: [
    
      {
        name: 'Holidays',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/holidays'
      },

      {
        name: 'SchoolList',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/SchoolList'
      },
      
    
   

    

    ]
  },
];

export default menuItems;
