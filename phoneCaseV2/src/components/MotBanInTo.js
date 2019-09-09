import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
class ItemBanTo extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  copy: false
            }
      }

      tempAlert = (msg, duration) => {
            var el = document.createElement("div");
            el.setAttribute("style", "position:fixed;z-index:1000;top:10px;left:46%;background-color:#80ced6;padding:10px;font-size:2rem;color:white");
            el.innerHTML = msg;
            setTimeout(function () {
                  el.parentNode.removeChild(el);
            }, duration);
            document.body.appendChild(el);
      }

      copyVanban = (param) => {

            copy(param);
            this.tempAlert(param, 200);
      }
      inLai = (param) => {
            this.props.addNewItem(param)
      }

      render() {
            let { ban, idDesign, idClient, rePrint, anyMore, phoneCase, printScreen,numberPosition } = this.props;

            return (
                  <div className={((ban === "to") ? "col-3" : "col-6") + "  border_khung mot_ban_to "} style={{ height: ((ban === "to") ? 200 : 133), position: 'relative' }}>
                        {/* <button type="button" className="btn btn-primary" style={{ position: "absolute" }} onClick={() => this.inLai({ idDesign, idClient, amount: 1, phoneCase,rePrint:true })}>lại</button> */}
                        <p className={" code_design" + ((anyMore === true) ? " any_more " : "") + ((rePrint === true) ? "no_underline" : "")} onClick={() => this.copyVanban(idClient)}>{idClient}</p>
                        <p className={"code_phone_case" + ((ban === "to") ? "" : " can_ban_nho")}>{phoneCase}</p>
                        {(printScreen === true)
                              ? <p className={"code_day_excel" + ((ban === "to") ? "" : " day_ban_nho")}>{this.props.day} - <span>{(this.props.country.toLowerCase() === "us"||this.props.country. toLowerCase() === "united states") ? "US" : "WW"}</span></p>
                              : <p className={"p_ban_to" + (printScreen === true) ? ((ban === "to") ? "design_idDesign_banTo" : " print_idDesign_banTo") : ""} style={{ color: "blue" }} onClick={() => this.copyVanban(idDesign)}>{idDesign}</p>
                        
                        
                        }
                        <p className="numberPosition">{numberPosition}</p>

                  </div>
            );
      }
}

export default ItemBanTo;