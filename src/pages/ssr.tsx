import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function SsrPage({}: Props) {
  return (
    <div>
      <Link href="/">Go To Home</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
