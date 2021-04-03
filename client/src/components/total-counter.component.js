import Counter from './counter.component'
import axios from 'axios';

export default class TotalCounter extends Counter {
    componentDidMount() {
        axios.get('/count/')
            .then(response => {
                let allTotals = response.data.map(function(o,i) {
                    return o.total;
                });

                let totalOfArrays = allTotals.reduce((a, b) => a + b, 0);

                this.setState({
                    total: totalOfArrays,
                })
            })
            .catch((error) => console.log(error))
    }
}