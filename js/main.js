import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,IndexRoute,hashHistory,browserHistory} from "react-router";
import Index from "Index";
import Manage from "Manage";
import Student from "Student";
import Teacher from "Teacher";
import Course from "Course";
import {Provider} from "react-redux";
import store from "store";
import { AppContainer } from 'react-hot-loader';

import "antd/dist/antd.css";

ReactDOM.render(<AppContainer><Provider store={store}>
    <Router history={hashHistory}>
                    <Route path="/" component={Index}>
                        <IndexRoute component={Manage} />
                        <Route path="/manage" component={Manage}>
                            <Route path="/student" component={Student}></Route>
                            <Route path="/teacher" component={Teacher}></Route>
                            <Route path="/course" component={Course}></Route>
                        </Route>
                    </Route>
    </Router></Provider></AppContainer>,document.getElementById("content"));
