import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TrashIcon from '@material-ui/icons/Clear';
import DirectionsIcon from '@material-ui/icons/PersonAdd';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Modal from '@material-ui/core/Modal';

import api from '../../services/api';

import { Container, List, Loading, LoadingContainer } from './styles';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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

export default function Compete() {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [elogios, setElogios] = useState([]);
  const [punicaos, setPunicaos] = useState([]);
  const [tempos, setTempos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(true);

  const classes = useStyles();

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await api.get(`api/v1/pessoa/condecoracao/find/${e}`);

      await setPeople(response.data.payload);
    }
  }

  async function handleSerachId(e) {
    await setLoading(true);
    const elogio = await api.get(`api/v1/pessoa/elogio/id/${e}`);
    if (elogio.data.payload.elogios.length >= 0) {
      setLoading(false);
    }
    await setElogios(elogio.data.payload.elogios);

    const punicao = await api.get(`api/v1/pessoa/punicao/id/${e}`);
    await setPunicaos(punicao.data.payload);

    const tempo = await api.get(`api/v1/pessoa/tempo/id/${e}`);
    await setTempos(tempo.data.payload);
    await setCard(false);
  }

  function openInfo() {
    setCard(true);
    setSearch('');
  }

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
      {loading && (
        <LoadingContainer>
          <Loading color="#274293" />
        </LoadingContainer>
      )}
      <Container>
        {card &&
          people.map(item => (
            <List
              key={item.idpessoa}
              onClick={() => handleSerachId(item.idpessoa)}
            >
              {item.Graduacao.graduacao} {item.rg} {item.nome} -{' '}
              {item.SiglaUnidade}
            </List>
          ))}
        {!card &&
          elogios.map(item => (
            <TextareaAutosize
              key={item.idelogio}
              rows={3}
              rowsMax={4}
              placeholder="Minimum 3 rows"
              value={item.doc_pub}
            />
          ))}
      </Container>
    </>
  );
}
