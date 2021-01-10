import React from 'react';

import { useRouter } from 'next/router';

const Module = () => {
  const router = useRouter();
  return <>Обзор модуля с id = {router.query.moduleId}</>;
};

export default Module;
