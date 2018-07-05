import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';
import PeopleIcon from '@material-ui/icons/People';
import MovieIcon from '@material-ui/icons/Movie';
import TVShowIcon from '@material-ui/icons/LiveTv';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom';
export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <Link to="/discover">
        <ListItemText primary="Discover" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MovieIcon />
      </ListItemIcon>
      <ListItemText primary="Movies" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TVShowIcon />
      </ListItemIcon>
      <ListItemText primary="TV shows" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="People" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
