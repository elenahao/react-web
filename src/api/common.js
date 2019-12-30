import api from "@/api/index.js"
// import { commonBase }  from "@/config.js"
export const getMenuListData = (data) => {
    return api.request({
        url: `http://portal-gateway.mtime-dev.com/portal/menu/header_nav`,
        method: 'post',
        params: data
    })
}

export const getSidebarSubmit = (data) => {
    return api.request({
        url: `http://portal-gateway.mtime-dev.com/portal/menu/sidebar`,
        method: 'post',
        params: data
    })
}