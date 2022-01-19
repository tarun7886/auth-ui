export function clsx(...args) {
    let outputClass = []
    args.map(el => {
        if (typeof el === 'string') {
            outputClass.push(el)
        } else if (Array.isArray(el)) {
            outputClass = outputClass.concat(el.filter(el => typeof el !== "boolean"))
        } else if (el && typeof el === 'object') {
            Object.keys(el).map(className => el[className] ? outputClass.push(className) : "")
        }
    })
    return outputClass.join(' ')
}