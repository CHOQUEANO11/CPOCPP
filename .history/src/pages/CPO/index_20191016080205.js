import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/PersonAdd';
import TrashIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';

import { Container, List } from './styles';
import { apiInternal, api } from '../../services/api';

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

export default function Cpo() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [elogios, setElogios] = useState([]);
  const [punicaos, setPunicaos] = useState([]);
  const [tempos, setTempos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(true);
  const [person, setPerson] = useState({});
  const [Img, setImg] = useState('');
  const [infoCard, setInfoCard] = useState([]);

  useEffect(async () => {
    const response = apiInternal.get('compete');
    console.log(response);
    setPeople(response.data);
  });

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await apiInternal.get(`compete${e}`);

      await setPeople(response.data.payload);
    }
  }

  async function handleSerachId(e) {
    await setImg(e.idpessoa.toString());
    await setPerson(e);
    await setLoading(true);
    const elogio = await api.get(`api/v1/pessoa/elogio/id/${e.idpessoa}`);
    if (elogio.data.payload.elogios.length >= 0) {
      setLoading(false);
    }
    await setElogios(elogio.data.payload.elogios);

    const punicao = await api.get(`api/v1/pessoa/punicao/id/${e.idpessoa}`);
    await setPunicaos(punicao.data.payload.punicoes);

    const tempo = await api.get(`api/v1/pessoa/tempo/id/${e.idpessoa}`);
    await setTempos(tempo.data.payload);
    await setCard(false);
  }

  function openInfo() {
    setCard(true);
    setSearch('');
    setInfoCard('');
  }
  const classes = useStyles();

  return (
    <>
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
          placeholder="Pesquisar militar no limite de vaga CPO"
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
    </>
  );
}
