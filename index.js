console.log(nowstr('en-US'))
console.log(nowstr('ja-JP'))

function nowstr(locale) {
    return (new Date()).toLocaleString(locale, { month: 'long', weekday: 'long' })
}
