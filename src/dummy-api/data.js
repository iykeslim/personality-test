export function getQuestions() {
    const questions = [
        {
            question:
                'I get uneasy when my space is not clean',
            
                responses: [
                {
                    response: 'Yes. that is accurately me',
                    likelihoodscale: 2,
                },
                {
                    response:
                        'I really do not care',
                    likelihoodscale: 7,
                },
                {
                    response: 'I have not thought about it',
                    likelihoodscale: 5,
                },
                {
                    response:
                        'Very accurate',
                    likelihoodscale: 2,
                },
            ],
        },
        {
            question:
                'when I am invited for a party I get excited before it is time',
            responses: [
                {
                    response: 'Not me at all',
                    likelihoodscale: 3,
                },
                {
                    response: 'most likely me',
                    likelihoodscale: 6,
                },
                {
                    response:
                        'yes, of course',
                    likelihoodscale: 8,
                },
                {
                    response:
                        'Sometimes',
                    likelihoodscale: 4,
                },
            ],
        },
        {
            question:
                'Having people around me levels up my energy',
            responses: [
                {
                    response: 'I like being alone, No',
                    likelihoodscale: 3,
                },
                {
                    response: 'Not so much',
                    likelihoodscale: 4,
                },
                {
                    response: 'Most definitely',
                    elikelihoodscale: 8,
                },
                {
                    response: 'Yes, I would say',
                    likelihoodscale: 7,
                },
            ],
        },
        {
            question: 'I am very thorough with my time, if wasted, I get angry',
            responses: [
                {
                    response:
                        'That is exactlt how I will feel',
                    likelihoodscale: 3,
                },
                {
                    response: 'Very accurate',
                    likelihoodscale: 2,
                },
                {
                    response: 'No, not me, I try to adjust my schedule',
                    likelihoodscale: 8,
                },
                {
                    response:
                        'Not at all, wont be agry at such',
                    likelihoodscale: 9,
                },
            ],
        },
        {
            question: 'I am shy at first but later on I am very expressive.',
            responses: [
                {
                    response:
                        'That feels like me',
                    likelihoodscale: 4,
                },
                {
                    response: 'Very accurate',
                    likelihoodscale: 2,
                },
                {
                    response: 'Not really, Most times I am expressive from the start',
                    likelihoodscale: 7,
                },
                {
                    response:
                        'No. I am a very expressive person',
                    likelihoodscale: 9,
                },
            ],
        },
        
    ];

    return questions;
}