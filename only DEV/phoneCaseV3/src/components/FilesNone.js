import React, { Component } from 'react';
import _ from 'lodash';
import copy from 'copy-to-clipboard';

class DownText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNameFile: []
        }
    }

    checkFilesNone = (event) => {
        let arrNameFile = [];
        let input = event.target;
        for (var i = 0; i < input.files.length; i++) {
            let name = input.files[i].name;
            name = name.split(".");
            name = name[0].toLowerCase();
            arrNameFile.push(name);
        }
        this.setState({ arrNameFile: arrNameFile })


    }

    copyText = (param) => {
        copy(param)
    }
    render() {
        let allNameItems = this.props.dataNone;
        console.log(allNameItems);
        allNameItems=allNameItems.map(item=>{return item.toLowerCase().trim()})




        let itemsNone = _.difference(allNameItems, this.state.arrNameFile);
        itemsNone = [...new Set(itemsNone)]
        // console.log(itemsNone);



        let tableitemsnone = [];
        for (let j = 0; j < itemsNone.length; j++) {
            tableitemsnone.push(
                <tr key={j}>
                    <th scope="row">{j + 1}</th>
                    <td className="cot_row" onClick={() => this.copyText(itemsNone[j])} style={{ cursor: "pointer" }}>{itemsNone[j]}</td>

                </tr>)
        }




        return (
            <div className="mt-2">
                <input id='file-input' type='file' className=" btn btn-info" onChange={this.checkFilesNone} multiple style={{ display: "none" }} />
                <label htmlFor="file-input" className="input_exel btn btn-info">File Tif</label>

                {
                    (tableitemsnone.length !== 0) ? (<table className="table table-striped table_amounts">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableitemsnone}
                        </tbody>
                    </table>) : ""

                }

            </div>

        );
    }
}

export default DownText;