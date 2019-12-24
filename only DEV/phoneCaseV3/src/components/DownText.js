import React, { Component } from 'react';
import _ from 'lodash';

class DownText extends Component {

  saveTextAsFile = (param) => {
    let paramToText = JSON.stringify(param)
    // console.log(param);

    var textToWrite = paramToText // file contents
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var fileNameToSaveAs = `day${param.day}_${param.mounth}.json`// tên file


    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    downloadLink.click();
  }


  render() {

    var demoArr = [1, 2, 2, 3, 4, 5, 5];
    var obj = {}

    for (let k = 0; k < demoArr.length; k++) {
      if (obj[demoArr[k]] === undefined) {
        obj[demoArr[k]] = [demoArr[k]]
      }
      else {
        obj[demoArr[k]] =[...obj[demoArr[k]],demoArr[k]]
        console.log(obj);
      }

    }






    let arr = this.props.dataMayInTo
    let { day, mounth } = this.props;

    let strWrite = {
      data: arr,
      day: day,
      mounth: mounth
    };


    return (

      <button type="button" className="btn btn-warning mt-2" onClick={() => this.saveTextAsFile(strWrite)} style={{ color: "white" }}>Download Photoshop Reader</button>
    );
  }
}

export default DownText;