console.log(nowstr('en-US'))
console.log(nowstr('ja-JP'))
console.log('hasicu:', typeof Intl === 'object')
console.log(process.versions)
console.log(process.versions.icu)
console.log('hasFullICU:', hasFullICU())


function nowstr(locale) {
    return (new Date()).toLocaleString(locale, { month: 'long', weekday: 'long' })
}

function hasFullICU() {
    try {
        const january = new Date(9e8);
        const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
        return spanish.format(january) === 'enero';
    } catch (err) {
        return false;
    }
}
