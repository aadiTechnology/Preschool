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
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/extended-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: '/extended-sidebar/dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - ve rsion 3.0'
          },
          {
            name: 'Expenses',
            link: '/extended-sidebar/dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
          },
        ],
      },
      {
        name: 'Holidays',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/holidays'
      },
      
    
   

    

    ]
  },
];

export default menuItems;
