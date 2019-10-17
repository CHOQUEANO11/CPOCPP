import React, { useState } from 'react';

import { Container } from './styles';
import { apiInternal } from '../../services/api';

export default function ListCompete() {
  const [people, setPeople] = useState([]);

  async function handleSearch(e) {
    if (await (e.length > 8)) {
      const response = await apiInternal.get(`compete${e}`);

      await setPeople(response.data.payload);
    }
  }

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
    </Container>
  );
}
