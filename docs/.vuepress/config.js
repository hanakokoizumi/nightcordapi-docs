import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Nightcord API',
    description: '简洁易用的 Project Sekai API',
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            '/start/README.md',
            '/api/README.md',
            {
                text: 'Nightcord.de',
                link: 'https://nightcord.de',
            },
        ],
        repo: 'hanakokoizumi/nightcordapi-docs',
    }),
})