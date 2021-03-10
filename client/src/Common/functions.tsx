
export const toStringItemTitle = (obj: Object,exceptions: Array<string>) => {
   return  Object.entries({...obj})
        .filter((item) => {
                let flag = false
                for (let i = 0; i < exceptions.length; i++) {
                    if (item[0] === exceptions[i]) {
                        flag = false
                        break
                    } else {
                        flag = true
                    }

                }
                return flag
            }
        )

}