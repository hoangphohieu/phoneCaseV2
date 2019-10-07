import React, { Component } from 'react';
import BanTo from './BanTo';
import BanNho from './BanNho';
import ItemThua from './ItemThua';
import _ from 'lodash';
import DownText from './DownText';
import FilesNone from './FilesNone';

class BigTable extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  printScreen: false,
                  changePrint: false,

                  phoneCase: { // w và h tính theo pixcel
                        i6: { w: 791, h: 1630 },
                        i7: { w: 791, h: 1630 },
                        i6plus: { w: 909, h: 1866 },
                        i7plus: { w: 909, h: 1866 },
                        ix: { w: 791, h: 1654 },
                        ixs: { w: 791, h: 1654 },
                        ixr: { w: 874, h: 1760 },
                        imax: { w: 898, h: 1831 },
                        s7: { w: 803, h: 1655 },
                        s7e: { w: 827, h: 1760 },
                        s8plus: { w: 827, h: 1843 },
                        s8: { w: 780, h: 1724 },
                        note8: { w: 862, h: 1902 },
                        s9: { w: 791, h: 1713 },
                        s9plus: { w: 839, h: 1843 },
                        note9: { w: 886, h: 1902 },
                        s10: { w: 815, h: 1760 },
                        s10e: { w: 791, h: 1642 },
                        s10plus: { w: 862, h: 1854 },
                        hp30p: { w: 839, h: 1843 },
                        hp30: { w: 815, h: 1748 },
                        mate20p: { w: 827, h: 1843 },
                        hp20p: { w: 850, h: 1807 },
                        oppoa5: { w: 874, h: 1819 },
                        oneplus6: { w: 862, h: 1807 },
                        note10: { w: 1000, h: 2000 }, // sai
                        note10plus: { w: 909, h: 1913 },
                        i11: { w: 862, h: 1760 },
                        i11pro: { w: 862, h: 1760 }, // sai
                        i11promax: { w: 886, h: 1831 },
                        khay: { w: 28346, h: 15354 }

                  }
            }
      }


      changeScreen = () => { this.setState({ printScreen: !this.state.printScreen }) }
      changePrint = () => { this.setState({ changePrint: !this.state.changePrint }) }
      render() {

            let items = this.props.items;


            let sumAmount, itemsFilter, itemThua;
            let amountAllPhoneCase = [];
            let allFileName = [];
            let dataSortItems = [];
            let arr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
            if (items != null) {
                  // console.log(items.Sheet1);
                  items = items.Sheet1;
                  items = items.filter(item => (item.idClient !== undefined || item.amount !== undefined)); // lọc loại bỏ những item trắng

                  items = items.map(item => { return { rePrint: false, ...item, amount: parseInt(item.amount), anyMore: false } }) // chuyển amount từ string sang number, thêm trạng thái anyMore:0


                  sumAmount = items.reduce((sum, item) => { // tính tổng amount
                        return (sum + parseInt(item.amount))
                  }, 0);

                  items = items.map(item => { // đổi tên phoneCase cho ngắn gọn
                        if (item.phoneCase === undefined) return item
                        // iphone
                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/ 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/6 s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6 /6 s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6, 6s") === true
                        ) return { ...item, phoneCase: "i6" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip78") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7/8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7") === true
                        ) return { ...item, phoneCase: "i7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ipx") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone x") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone x") === true
                        ) return { ...item, phoneCase: "ix" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xs") === true
                        ) return { ...item, phoneCase: "ixs" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("6plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6splus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6 splus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6/6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6 plus/6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6/6splus") === true
                        ) return { ...item, phoneCase: "i6plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("78 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("8/7 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7/8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7/ip8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip78p") === true
                        ) return { ...item, phoneCase: "i7plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xr") === true
                        ) return { ...item, phoneCase: "ixr" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xsmax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ipxm") === true
                        ) return { ...item, phoneCase: "imax" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("i11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 11") === true
                        ) return { ...item, phoneCase: "i11" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("i11p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip11pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 11 pro") === true
                        ) return { ...item, phoneCase: "i11pro" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("11 pro max") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11 promax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11pm") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11promax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11 max") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11max") === true
                        ) return { ...item, phoneCase: "11promax" }

                        // samsung
                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7") === true
                        ) return { ...item, phoneCase: "s7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8") === true
                        ) return { ...item, phoneCase: "s8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9") === true
                        ) return { ...item, phoneCase: "s9" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10") === true
                        ) return { ...item, phoneCase: "s10" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7 e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7 edge") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7e") === true
                        ) return { ...item, phoneCase: "s7e" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10 e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10 edge") === true
                        ) return { ...item, phoneCase: "s10e" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8+") === true
                        ) return { ...item, phoneCase: "s8plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9+") === true
                        ) return { ...item, phoneCase: "s9plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10p") === true
                        ) return { ...item, phoneCase: "s10plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss8n") === true
                        ) return { ...item, phoneCase: "note8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 9") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note9") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss9n") === true
                        ) return { ...item, phoneCase: "note9" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 10") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note10") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss10n") === true
                        ) return { ...item, phoneCase: "note10" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note 10 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss10np") === true
                        ) return { ...item, phoneCase: "note10plus" }
                        // huwei

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p30") === true
                        ) return { ...item, phoneCase: "hp30" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p30 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p30p") === true
                        ) return { ...item, phoneCase: "hp30p" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("one plus 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("oneplus 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("one plus6") === true
                        ) return { ...item, phoneCase: "oneplus6" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p20 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("hwp20p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p20p") === true
                        ) return { ...item, phoneCase: "hp20p" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("mate 20pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("mate20p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("mate 20 pro") === true
                        ) return { ...item, phoneCase: "mate20p" }

                        else return { ...item, phoneCase: item.phoneCase }
                  });   // hết đổi tên

                  for (let i = 0; i <= items.length - 1; i++) {  // lặp lại những item có amount >1
                        if (items[i].amount > 1) {
                              for (let j = 1; j < items[i].amount; j++) {
                                    items.push({ ...items[i], amount: 0 })
                              }
                        }
                  }

                  items = items.sort(function (a, b) { // lọc danh sách items theo idClient
                        var x = a.idClient.toLowerCase();
                        var y = b.idClient.toLowerCase();
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0;
                  });

                  for (let i = 0; i < items.length; i++) {

                        try {
                              if (((i < (items.length - 1)) && items[i].idClient === items[i + 1].idClient) || ((i > 0) && items[i].idClient === items[i - 1].idClient)) {
                                    items[i].anyMore = true;
                              }
                        } catch (error) {
                              console.log("anymore loi");

                        }

                  }

                  // console.log(items);


                  itemsFilter = items.filter(item => {
                        return item.phoneCase === 'i6plus'
                              || item.phoneCase === "i7plus"
                              || item.phoneCase === "ixr"
                              || item.phoneCase === "imax"
                              || item.phoneCase === "i11"
                              || item.phoneCase === "i11pro"
                              || item.phoneCase === "i11promax"
                              || item.phoneCase === "s9plus"
                              || item.phoneCase === "s10plus"
                              || item.phoneCase === "note8"
                              || item.phoneCase === "note9"
                              || item.phoneCase === "note10"
                              || item.phoneCase === "note10plus"
                              || item.phoneCase === "hp30"
                              || item.phoneCase === "hp30p"
                              || item.phoneCase === "hp20p"
                              || item.phoneCase === "mate20p"
                              || item.phoneCase === "oneplus6"
                              || item.phoneCase === "i6"
                              || item.phoneCase === "i7"
                              || item.phoneCase === "ix"
                              || item.phoneCase === "ixs"
                              || item.phoneCase === "s7"
                              || item.phoneCase === "s8"
                              || item.phoneCase === "s9"
                              || item.phoneCase === "s10"
                              || item.phoneCase === "s7e"
                              || item.phoneCase === "s10e"
                  })


                  // lấy item thừa 
                  itemThua = _.difference(items, itemsFilter);
                  console.log(itemThua);

                  // lấy idDesign để xem file nào chưa có
                  allFileName = items.map(item => { return item.idDesign })


                  // đếm ốp
                  let allPhoneCase = [];
                  for (let j = 0; j < items.length; j++) { // lấy danh sách tên tất cả các đt trong items
                        if (allPhoneCase.indexOf(items[j].phoneCase) === -1)
                              allPhoneCase.push(items[j].phoneCase)
                  }
                  for (let j = 0; j < allPhoneCase.length; j++) {
                        let onePhoneCase = items.filter(item => { return item.phoneCase === allPhoneCase[j] })
                        amountAllPhoneCase.push(
                              <tr key={j}>
                                    <th scope="row">{j + 1}</th>
                                    <td className="cot_row">{allPhoneCase[j]}</td>
                                    <td className="cot_row">{onePhoneCase.length}</td>
                              </tr>)
                  }

                  items = itemsFilter;
                  let pixel = this.state.phoneCase;
                  items = _.orderBy(items, ['phoneCase', 'rePrint', 'idDesign'], ['asc', 'asc', 'desc']);
                  items = items.map((item, key) => { return { ...item, stt: key + 1 } });
                  dataSortItems = items;    // lấy danh sách để in bảng 12 ra màn hình
                  items = items.map(item => { return { name: item.phoneCase, idDesign: item.idDesign.trim(), stt: item.stt, pixel: toPixel(item.phoneCase) } })
                  // console.log(items);
                  function toPixel(params) {
                        if (params === "i7") return pixel.i7
                        else if (params === "i6") return pixel.i6
                        else if (params === "i6plus") return pixel.i6plus
                        else if (params === "i7plus") return pixel.i7plus
                        else if (params === "ix") return pixel.ix
                        else if (params === "ixs") return pixel.ixs
                        else if (params === "ixr") return pixel.ixr
                        else if (params === "imax") return pixel.imax
                        else if (params === "s7") return pixel.s7
                        else if (params === "s7e") return pixel.s7e
                        else if (params === "s8") return pixel.s8
                        else if (params === "s8plus") return pixel.s8plus
                        else if (params === "note8") return pixel.note8
                        else if (params === "s9") return pixel.s9
                        else if (params === "s9plus") return pixel.s9plus
                        else if (params === "note9") return pixel.note9
                        else if (params === "s10") return pixel.s10
                        else if (params === "s10e") return pixel.s10e
                        else if (params === "s10plus") return pixel.s10plus
                        else if (params === "hp30p") return pixel.hp30p
                        else if (params === "hp30") return pixel.hp30
                        else if (params === "hp20p") return pixel.hp20p
                        else if (params === "mate20p") return pixel.mate20p
                        else if (params === "oppoa5") return pixel.oppoa5
                        else if (params === "oneplus6") return pixel.oneplus6
                        else if (params === "i11") return pixel.i11
                        else if (params === "i11pro") return pixel.i11pro
                        else if (params === "i11promax") return pixel.i11promax

                  }
                  // chia khay
                  let hAll = pixel.khay.h;
                  let wAll = pixel.khay.w;
                  let hNow = hAll; let wNow = wAll;
                  let wLastCase = items[0].pixel.w;
                  let j = 0;

                  for (let i = 0; i <= items.length - 1; i++) {
                        let hI = items[i].pixel.h;
                        let wI = items[i].pixel.w;

                        // console.log(items[i].name);

                        if (((hNow - hI) >= 0) && ((wNow - wI) >= 0)) {
                              if ((wLastCase !== wI)) {
                                    if (wNow - wI - wLastCase >= 0) {
                                          console.log(hNow, wNow - wI, items[i].name, 1);
                                          arr[j].push(items[i]);
                                          hNow = hAll - hI;
                                          wNow = wNow - wLastCase;
                                          wLastCase = wI;
                                    }
                                    else {
                                          console.log(hNow, wNow - wI, items[i].name, 2);
                                          j = j + 1;
                                          arr[j].push(items[i]);
                                          hNow = hAll - hI;
                                          wNow = wAll;
                                          wLastCase = wI;
                                    }
                              }
                              else {
                                    console.log(hNow, wNow, items[i].name, 3);
                                    arr[j].push(items[i]);
                                    hNow = hNow - hI;
                                    wLastCase = wI;

                              }

                        }
                        else if (((hNow - hI) >= 0) && ((wNow - wI) < 0)) {
                              console.log(hNow, wNow, items[i].name, 4);
                              j = j + 1;
                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wAll;
                              wLastCase = wI;

                        }
                        else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) >= 0)) {
                              console.log(hNow, wNow, items[i].name, 5);
                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wNow - wLastCase;
                              wLastCase = wI;

                        }

                        else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) < 0)) {
                              console.log(hNow, wNow, items[i].name, 6);
                              j = j + 1;
                              arr[j].push(items[i]);
                              hNow = hAll - hI;
                              wNow = wAll;
                              wLastCase = wI;


                        }
                        else {
                              alert("alert")


                        }

                  }
                  arr = arr.filter(item => { return item.length > 0 });
                  // arr=arr.map(item=>{return item.map(param=>{return param.name })} )
                  console.log(arr);

                  console.log(items);



            } // het if param!==undefi param.namened

            return (
                  <React.Fragment>
                        <button type="button" className="btn btn-primary mb-5 absolute inan" onClick={this.changePrint}>in ấn</button>
                        {(this.state.changePrint === true) ? "" :
                              <div>
                                    <FilesNone dataNone={allFileName} {...this.props} />
                                    <DownText dataMayInTo={arr} {...this.props} />
                                    <h1>Tổng tất cả: {sumAmount}</h1>
                                    <button type="button" className="btn btn-primary mb-5" onClick={this.changeScreen}>đổi theme</button>
                                    <ItemThua itemsThua={itemThua} {...this.props} />
                              </div>

                        }
                        <BanTo itemsBanTo={dataSortItems} printScreen={this.state.printScreen} {...this.props} />

                        <h2 style={{ textAlign: 'center', marginTop: 50 }}>Tổng tất cả: {sumAmount}</h2>


                        <table className="table table-striped table_amounts">
                              <thead>
                                    <tr>
                                          <th scope="col">STT</th>
                                          <th scope="col">TÊn</th>
                                          <th scope="col">SỐ LƯỢNG</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {amountAllPhoneCase}
                              </tbody>
                        </table>

                  </React.Fragment>
            );
      }
}

export default BigTable;