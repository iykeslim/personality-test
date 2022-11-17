import computeVersion, { EXTROVERT, INTROVERT } from "./computeVersion.js";



test("should return INTROVERT if average sum is less than 5", () => {
    const answers = [
        {
            answer: 'One',
            likelihoodscale: 4,
        },
        {
            answer: 'Two',
            likelihoodscale: 3,
        },
        {
            answer: 'Three',
            likelihoodscale: 5,
        }
    ];

    expect(computeVersion(answers)).toBe(INTROVERT);
});

test("should return EXTROVERT if average sum is greater than 5", () => {
    const answers = [
        {
            answer: 'One',
            likelihoodscale: 5,
        },
        {
            answer: 'Two',
            likelihoodscale: 6,
        },
        {
            answer: 'Three',
            likelihoodscale: 6,
        }
    ];
    
    expect(computeVersion(answers)).toBe(EXTROVERT);
});