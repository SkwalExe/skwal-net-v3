import {defineStore} from 'pinia'
import type NavBtnInfo from '~/classes/NavBtnInfo'

const defaultButtons: NavBtnInfo[] = [
    {title: 'Home', path: '/', icon: 'ic:round-home', newTab: false},
    {title: 'Explore', path: '/explore', icon: 'fluent-emoji:sparkles', newTab: false},
    {title: 'Blog', path: 'https://blog.skwal.net', icon: 'material-symbols:article', newTab: true},
    {title: 'Projects', path: 'https://projects.skwal.net', icon: 'solar:star-bold', newTab: true},
    {title: 'GitHub', path: 'https://github.com/SkwalExe', icon: 'mdi:github', newTab: true}
]

export const useNavbarStore = defineStore('navbar', () => {
    const links = ref(defaultButtons)

    const setLinks = (newLinks: NavBtnInfo[]) => (links.value = newLinks)

    return {links, setLinks}
})
