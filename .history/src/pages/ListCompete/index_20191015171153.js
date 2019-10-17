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

  return <Container />;
}
