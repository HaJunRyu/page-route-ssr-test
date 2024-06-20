import { GetServerSideProps } from 'next';
import React from 'react';

type Props = {};

export default function SsrPage({}: Props) {
  return <div>SsrPage</div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
