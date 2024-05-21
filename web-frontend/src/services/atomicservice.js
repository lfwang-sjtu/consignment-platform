import {Delete, get, post, put} from "../util/fetch";

export function getAtomiclist() {
    return get('AtomicServices/')
}


export function getFieldList(pa) {
    return get('test/',pa)
}

export function putprocess(pa,data) {
    return put('test/',pa,data)
}

export function createprocess(data) {
    return post('test/',data)
}

export function deleteprocess(data) {
    return Delete('test/',data)
}
