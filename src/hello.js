// hello.js
import React, {Component} from 'react'; // 这两个模块必须引入

let name = 'Alans';

export default class Hello extends Component{
    render() {
        return (
            <div>
                {name}
            </div>
        );
    }
}