export const INTROVERT = 'introvert';
export const EXTROVERT = 'extrovert';

/**
 * Each answer is marked from 1-10 based on the extroversion level, 1 being the most introvert
 * 
 * @param {array} answers 
 * @returns {string} extrovert / introvert
 */
export default function calculateExtroversionLevel(responses) {
    const sumExtroversion = responses.reduce((sum, response) => sum += response.likelihoodscale, 0);
    const averageExtroversionLevel = sumExtroversion / responses.length;

    return averageExtroversionLevel > 5 ? EXTROVERT : INTROVERT;
}