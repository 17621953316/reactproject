import axios from 'axios'

export default function ajax(url,data={},type='GET'){
 if(type === 'GET') {
     reutrn axios.get(url)
 }else {
     reutrn axios.post(url,data)
 }
}