import React from 'react';

import { useRouter } from 'next/router';

const Image = () => {
  const router = useRouter();
  return <>Картинка с id {router.query.id}</>;
};

export default Image;
