export function dateFormat(date: Date): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return  ('0' + date.getDate()).slice(-2) + ' ' +
        monthNames[(date.getMonth())] + ' - ' +
    // date.getFullYear() + '/' +
        ('0' + date.getHours()).slice(-2) + ':' +
        ('0' + date.getMinutes()).slice(-2) + ':' +
        ('0' + date.getSeconds()).slice(-2)

}