export function getQuestions() {
  const questions = [
    {
      question:
        'I get uneasy when my space is not clean or is roudy with activity',
      answers: [
        {
          answer: 'Yes, that is accurate for me',
          likelihoodscale: 3,
        },
        {
          answer:
            'I really do not care as long as no one is bothering me',
          likelihoodscale: 7,
        },
        {
          answer: 'Seems correct ',
          likelihoodscale: 4,
        },
        {
          answer:
            'Very true',
          likelihoodscale: 2,
        },
      ],
    },
    {
      question:
        'If I am invited to a party, I get excited with anticipation',
      answers: [
        {
          answer: 'That cannot be me',
          likelihoodscale: 2,
        },
        {
          answer: 'Not at all, I would not feel that way',
          likelihoodscale: 2,
        },
        {
          answer:
            'Yes of cause, I love parties',
          likelihoodscale: 8,
        },
        {
          answer:
            'All the time',
          likelihoodscale: 8,
        },
      ],
    },
    {
      question:
        'Having people around me heightens my excitement, I do not like too quiet places',
      answers: [
        {
          answer: 'No, I like being alone, helps me reason better',
          likelihoodscale: 2,
        },
        {
          answer: 'Most times i would rather be on my own',
          likelihoodscale: 3,
        },
        {
          answer: 'Yes, I like being around poeple; the more the merrier',
          likelihoodscale: 8,
        },
        {
          answer: 'I am excited when people come around me',
          likelihoodscale: 7,
        },
      ],
    },
    {
      question: 'I am very thorough with my time, if wasted I can really angry or feel disappointed',
      answers: [
        {
          answer:
            'That is very accutare, nobody should waste my time',
          likelihoodscale: 2,
        },
        {
          answer: 'Of cause, I work with time',
          likelihoodscale: 3,
        },
        {
          answer: 'Not really, I prefer to look for ways around it than get angry',
          likelihoodscale: 8,
        },
        {
          answer:
            'Why, I can not see myself being angry at little things like that',
          likelihoodscale: 9,
        },
      ],
    },
  ];

  return questions;
}
