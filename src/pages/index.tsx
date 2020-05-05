import React, { FunctionComponent, useState } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';

import Table from '../components/Table';

interface IndexProps {
  imageNames: string[];
}

const IndexPage: FunctionComponent<IndexProps> = (props) => { 
  const [filterText, setFilterText] = useState<string>();

  let filteredNames = props.imageNames;
  if (filterText) {
    filteredNames = filteredNames.filter(name => name.toLowerCase().includes(filterText));
  }

  return (
    <div>
      <h2>Company of Heroes 2 Assets</h2>
      <input type='text' placeholder='Search...'
        onChange={(event) => setFilterText(event.target.value.toLowerCase())} />
     
      <br />
      <p>Showing {filteredNames.length}/{props.imageNames.length} assets</p>
      <Table images={filteredNames} />
    </div>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const files = fs.readdirSync('public');
  return {
    props: {
      imageNames: files
    }
  }
};
