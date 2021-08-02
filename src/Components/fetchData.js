import axios from 'axios';
export default function fetchData(props) {
        return axios.get(props)
        .then((response) => response);
}
