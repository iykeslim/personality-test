export const INTROVERT = 'introvert';
export const EXTROVERT = 'extrovert';


export default function computeVersion(answers) {
    const versionsummation = answers.reduce((sum, answer) => sum += answer.likelihoodscale, 0);
    const version_average = versionsummation / answers.length;
    console.log(version_average)
    console.log(answers)

    return version_average > 5 ? EXTROVERT : INTROVERT;


    // if(version_average > 5 && version_average != 0){
    //     return EXTROVERT
    // }
    // if(version_average < 5 && version_average != 0 ){
    //     return INTROVERT
    // }
}