(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"5eef":function(t,e,a){"use strict";var s=a("6007"),o=a.n(s);e["default"]=o.a},6007:function(t,e){},dd1b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"q-mr-md"},[t._v(t._s(t.$t("download_center.createTime")))]),a("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:t.interval},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{range:""},model:{value:t.createDate1,callback:function(e){t.createDate1=e},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:t.createDate2,callback:function(e){t.createDate2=e},expression:"createDate2"}}),a("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(e){return t.reset()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("download_center.reset")))])],1),a("q-btn",{attrs:{label:t.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(e){return t.downloadlistData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("downloadasnlisttip")))])],1)],1)],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"goods_code",attrs:{props:e}},[t._v(t._s(e.row.goods_code))]),a("q-td",{key:"goods_desc",attrs:{props:e}},[t._v(t._s(e.row.goods_desc))]),a("q-td",{key:"goods_qty",attrs:{props:e}},[t._v(t._s(e.row.goods_qty))]),a("q-td",{key:"onhand_stock",attrs:{props:e}},[t._v(t._s(e.row.onhand_stock))]),a("q-td",{key:"can_order_stock",attrs:{props:e}},[t._v(t._s(e.row.can_order_stock))]),a("q-td",{key:"ordered_stock",attrs:{props:e}},[t._v(t._s(e.row.ordered_stock))]),a("q-td",{key:"inspect_stock",attrs:{props:e}},[t._v(t._s(e.row.inspect_stock))]),a("q-td",{key:"hold_stock",attrs:{props:e}},[t._v(t._s(e.row.hold_stock))]),a("q-td",{key:"damage_stock",attrs:{props:e}},[t._v(t._s(e.row.damage_stock))]),a("q-td",{key:"asn_stock",attrs:{props:e}},[t._v(t._s(e.row.asn_stock))]),a("q-td",{key:"dn_stock",attrs:{props:e}},[t._v(t._s(e.row.dn_stock))]),a("q-td",{key:"pre_load_stock",attrs:{props:e}},[t._v(t._s(e.row.pre_load_stock))]),a("q-td",{key:"pre_sort_stock",attrs:{props:e}},[t._v(t._s(e.row.pre_sort_stock))]),a("q-td",{key:"sorted_stock",attrs:{props:e}},[t._v(t._s(e.row.sorted_stock))]),a("q-td",{key:"pick_stock",attrs:{props:e}},[t._v(t._s(e.row.pick_stock))]),a("q-td",{key:"picked_stock",attrs:{props:e}},[t._v(t._s(e.row.picked_stock))]),a("q-td",{key:"back_order_stock",attrs:{props:e}},[t._v(t._s(e.row.back_order_stock))]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v(t._s(e.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v(t._s(e.row.update_time))])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("previous")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("next")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},o=[],n=(a("5319"),a("3004")),r=a("bd4c"),i=a("a357"),c=(a("a639"),a("18d6")),l={name:"Pageasnlist",data(){return{login_name:"",authin:"0",pathname:"stock/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"goods_code",required:!0,label:this.$t("stock.view_stocklist.goods_code"),align:"left",field:"goods_code"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"goods_desc",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.goods_qty"),field:"goods_qty",align:"center"},{name:"onhand_stock",label:this.$t("stock.view_stocklist.onhand_stock"),field:"onhand_stock",align:"center"},{name:"can_order_stock",label:this.$t("stock.view_stocklist.can_order_stock"),field:"can_order_stock",align:"center"},{name:"ordered_stock",label:this.$t("stock.view_stocklist.ordered_stock"),field:"ordered_stock",align:"center"},{name:"inspect_stock",label:this.$t("stock.view_stocklist.inspect_stock"),field:"inspect_stock",align:"center"},{name:"hold_stock",label:this.$t("stock.view_stocklist.hold_stock"),field:"hold_stock",align:"center"},{name:"damage_stock",label:this.$t("stock.view_stocklist.damage_stock"),field:"damage_stock",align:"center"},{name:"asn_stock",label:this.$t("stock.view_stocklist.asn_stock"),field:"asn_stock",align:"center"},{name:"dn_stock",label:this.$t("stock.view_stocklist.dn_stock"),field:"dn_stock",align:"center"},{name:"pre_load_stock",label:this.$t("stock.view_stocklist.pre_load_stock"),field:"pre_load_stock",align:"center"},{name:"pre_sort_stock",label:this.$t("stock.view_stocklist.pre_sort_stock"),field:"pre_sort_stock",align:"center"},{name:"sorted_stock",label:this.$t("stock.view_stocklist.sorted_stock"),field:"sorted_stock",align:"center"},{name:"pick_stock",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_stock",align:"center"},{name:"picked_stock",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_stock",align:"center"},{name:"back_order_stock",label:this.$t("stock.view_stocklist.back_order_stock"),field:"back_order_stock",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",searchUrl:"",downloadUrl:"stock/filelist/"}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(t){t&&(t.to?(this.createDate2=`${t.from} - ${t.to}`,this.date_range=`${t.from},${t.to} 23:59:59`,this.searchUrl=this.pathname+"list/?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"filelist/?create_time__range="+this.date_range):(this.createDate2=`${t}`,this.dateArray=t.split("/"),this.searchUrl=this.pathname+"list/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"filelist/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var t=this;Object(n["e"])(t.pathname+"list/?ordering=-update_time",{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;Object(n["e"])(t.searchUrl).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;Object(n["e"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;Object(n["e"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},downloadlistData(){var t=this;Object(n["f"])(t.downloadUrl).then((e=>{var a=Date.now(),s=r["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(i["a"])(t.pathname+"list"+s+".csv","\ufeff"+e.data,"text/csv");!0!==o&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="stock/filelist/",this.createDate2=""}},created(){var t=this;c["a"].has("openid")?t.openid=c["a"].getItem("openid"):(t.openid="",c["a"].set("openid","")),c["a"].has("login_name")?t.login_name=c["a"].getItem("login_name"):(t.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},d=l,_=a("42e1"),p=a("5eef"),k=a("eaac"),h=a("27f9"),m=a("0016"),g=a("7cbe"),u=a("52ee"),v=a("e7a9"),f=a("9c40"),b=a("05c0"),w=a("bd08"),y=a("db86"),q=a("eebe"),$=a.n(q),x=Object(_["a"])(d,s,o,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(x);e["default"]=x.exports;$()(x,"components",{QTable:k["a"],QInput:h["a"],QIcon:m["a"],QPopupProxy:g["a"],QDate:u["a"],QBtnGroup:v["a"],QBtn:f["a"],QTooltip:b["a"],QTr:w["a"],QTd:y["a"]})}}]);