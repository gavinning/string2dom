/**
 * 字符串转dom
 * @desc string to dom
 * @date 2018-07-23
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2018-07-23 by gavinning
 *
 */

export default (htmlstring) => {
    if (typeof htmlstring !== 'string') {
        return htmlstring
    }
    let parser = new DOMParser()
    let doc = parser.parseFromString(htmlstring, "text/html")
    return [...doc.body.children]
}
