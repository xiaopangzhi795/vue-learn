import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import { createI18n } from 'vue-i18n'
import messages from '../common/i18n';

const i18n = createI18n({
    locale: localeZH.name,
    fallbackLocale: localeEN.name,
    messages,
})

export default (app: any) => {
    app.use(ElementPlus, {locale: localeZH})
    app.use(i18n)
};
