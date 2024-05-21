export default class NavBtnInfo {
    title: string
    path: string
    icon: string | null
    newTab: boolean = false

    constructor(title: string, path: string, icon: string | null = null, newTab: boolean = false) {
        this.title = title
        this.path = path
        this.icon = icon
        this.newTab = newTab
    }
}
