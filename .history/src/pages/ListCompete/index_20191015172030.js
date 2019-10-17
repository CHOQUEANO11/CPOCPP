import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/PersonAdd';
import TrashIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from './styles';
import { apiInternal } from '../../services/api';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    flexFlow: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    flex: 1,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: 800
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function ListCompete() {
  const [people, setPeople] = useState([]);

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await apiInternal.get(`compete${e}`);

      await setPeople(response.data.payload);
    }
  }
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          onChange={e =>
            handleSearch(e.target.value) + setSearch(e.target.value)
          }
          className={classes.input}
          value={search}
          placeholder="Pesquisar militar"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          {card ? <DirectionsIcon /> : <TrashIcon onClick={openInfo} />}
        </IconButton>
      </Paper>
      {people.map(item => (
        <List key={item.idpessoa} onClick={() => handleSerachId(item)}>
          {item.Graduacao.graduacao} {item.rg} {item.nome} - {item.SiglaUnidade}
        </List>
      ))}
    </Container>
  );
}
