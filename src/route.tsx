import * as React from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';
import Theater from './components/Theater';
import Tour from './components/Tour';
class Router extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="part_type">
          <table>
            <tbody>
            <tr style={{textAlign: 'center'}}>
              <td className="type_theater" id="theater_button">
                <Link to='/'>시어터</Link>
              </td>
              <td className="type_tour" id="tour_button">
                <Link to='/tour'>투어</Link>
              </td>
              <td className="type_tune" id="tune_button">
                <Link to='/tune'>튠</Link>
              </td>
              <td className="type_tale" id="tale_button">
                <Link to='tale'>테일</Link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="part_input" id="part_input">
          <Switch>
            <Route exact path='/' component={Theater} />
            <Route path='/tour' component={Tour} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default withRouter(Router);
