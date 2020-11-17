import * as React from 'react';
import Layout from '../components/Layout';
import AddLinkForm from '../components/AddLinkForm';

export default function Home() {
  return (
    <Layout title={'Learning Lynx | Add a Link'}>
      <AddLinkForm />

      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>
    </Layout>
  );
}
