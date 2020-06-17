const ok = (data, use = true) => {
    if(use){
        return {
            error: false,
            data,
        }
    }
    return data
}

const error = (error) => {
    return {
        error: true,
        data:{
            code: error.code || '',
            message: error.message || '',
        },
    }
}

const normal = (data, use = true) => {
    if(use){
        return data }
    return data
}

module.exports = {
    ok,
    error,
    normal
}