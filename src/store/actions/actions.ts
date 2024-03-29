const increment = (context: { commit: (params: string) => void }) => {
    context.commit('increament')
}
const actionReturn = ({ commit }: { commit: (params: string) => void }) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            commit('increament')
            resolve()
        }, 5000)
    })
}

// const setUserName = ({ commit }: any, user: any) => {
//     commit('setUserName', user)
// }

const setUserName = (context: { commit: (params: string, user: string) => void }, user: string) => {
    context.commit('setUserName', user)
}

export default {
    increment,
    actionReturn,
    setUserName
}
