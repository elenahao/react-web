const commonBase = () => {
    return process.env.NODE_ENV === "development" ?
        "//192.168.1.155:8082" :
        "//portal-gateway.mtime-dev.com"
}
export default commonBase;