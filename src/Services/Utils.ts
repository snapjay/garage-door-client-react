export function dateFormat(date: Date): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return  ('0' + date.getUTCDate()).slice(-2) + ' ' +
        monthNames[(date.getUTCMonth())] + ' - ' +
    // date.getUTCFullYear() + '/' +
        ('0' + date.getUTCHours()).slice(-2) + ':' +
        ('0' + date.getUTCMinutes()).slice(-2) + ':' +
        ('0' + date.getUTCSeconds()).slice(-2)

}