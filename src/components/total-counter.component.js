import Counter from './counter.component'
import axios from 'axios';

export default class TotalCounter extends Counter {
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND}/count/`)
            .then(response => {
                let allTotals = response.data.map(function(o,i) {
                    return o.total;
                });

                let total = allTotals.reduce((a, b) => a + b, 0);

                this.setState({
                    total: total,
                })
            })
            .catch((error) => console.log(error))
    }
}