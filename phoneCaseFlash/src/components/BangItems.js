import React, { Component } from 'react';
import MotBanInTo from './MotBanInTo';
class Bang12Items extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  psdDone: false
            }
      }
      psdDone=()=>{this.setState({psdDone:true})}
      render() {
            
            
            let items = this.props.itemsBang12Items;
            // console.log(items);
            
            let toDay = (new Date()).getDate();
            let toMonth = (new Date()).getMonth();
            let ban = this.props.ban;
            let danhSachItem;
            if (items !== undefined) {
                  danhSachItem = items.map((item, key) =>
                        <MotBanInTo
                              key={key}
                              id={item.id}
                              idClient={item.idClient}
                              amount={item.amount}
                              phoneCase={item.phoneCase}
                              idDesign={item.idDesign}
                              anyMore={item.anyMore}
                              rePrint={item.rePrint}
                              dayExcel={this.state.dayExcel}
                              country={item.country}
                              numberPosition={item.stt}
                              {...this.props}
                        />)
            }
            return (
                  <div>

                        <div className="container-fluid khoangcasch mt-5">
                              <div className={"container "+((this.state.psdDone===true)?"psd_done":"")} style={{ width: (ban === "to") ? 1000 : 670 }}>
                                    <div className="row border_khung">
                                          <div className="col-12 border_khung" style={{ height: 70 }}>
                                                <h1  style={{fontSize:35}}>
                                                Ban {(this.props.ban === "to") ? "to" : "nho"} {this.props.numberTable + 1} {` excel ${this.props.day} - ${this.props.mounth}`} 
                                                      <button type="button" className="btn btn-primary ml-5" onClick={this.psdDone}>Done</button>
                                                </h1>
                                                
                                          </div>
                                          {danhSachItem}

                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Bang12Items;