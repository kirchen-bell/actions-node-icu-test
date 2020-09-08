console.log(nowstr())

function nowstr(locale) {
    return Date.UTC().toLocaleString(locale)
}
