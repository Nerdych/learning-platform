import React from 'react';

import { useRouter } from 'next/router';

const Question = () => {
  const router = useRouter();
  return <>Вопрос номер {router.query.questionId}</>;
};

export default Question;
