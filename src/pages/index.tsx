import React, { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';

import Table from '../components/Table';

interface IndexProps {
  imageNames: string[];
}

const IndexPage: FunctionComponent<IndexProps> = (props) => (
  <div>
    <h2>Company of Heroes 2 Assets</h2>
    <p>{props.imageNames.length} assets</p>

    <Table images={props.imageNames} />

  </div>
);

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const files = fs.readdirSync('public');
  return {
    props: {
      imageNames: files
    }
  }
};
