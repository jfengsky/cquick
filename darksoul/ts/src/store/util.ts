export const GetQueryString = (name: string): string => {
  let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
  let r: Array<string> = window.location.search.substr(1).match(reg)
  if(r!=null) {
    return  r[2]
  } else {
    return null
  }
}