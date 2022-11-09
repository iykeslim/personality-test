export const INTROVERT = 'introvert'
export const EXTROVERT = 'extrovert'




export const computeVersion = (responses) => {
    const version_summation = responses.reduce((sum, response) => sum += response.likelihoodscale, 0)
    const version_average = version_summation/responses.length

    if(version_average > 5){
        return EXTROVERT
    }else{
        return INTROVERT
    }
}