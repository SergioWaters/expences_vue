"use strict";(self["webpackChunkexpences"]=self["webpackChunkexpences"]||[]).push([[78,840],{1840:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"max-width":"500px"}},[a("v-card",{staticClass:"text-left pa-8 cols-5"},[e.message?a("h3",[e._v(e._s(e.message))]):e._e(),a("v-text-field",{attrs:{type:"date",label:"Choose Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("v-text-field",{attrs:{label:"Put amount"},model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}}),a("v-select",{attrs:{label:"Choose Category",items:e.getCategoryArr},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),a("v-text-field",{attrs:{label:"Or create a custom category"},model:{value:e.customCategory,callback:function(t){e.customCategory=t},expression:"customCategory"}}),e.settings?e._e():a("v-btn",{attrs:{color:"teal",dark:""},on:{click:e.addExpence}},[e._v("Add expence")]),"edit"===e.action?a("v-btn",{attrs:{color:"teal",dark:""},on:{click:e.addExpence}},[e._v("Save changes")]):e._e()],1)],1)},o=[],r=a(629),i={name:"ExpenceAdd",props:{action:String,settings:Object,indx:Number},data(){return{message:"",date:"",category:"",customCategory:"",id:null,value:null}},methods:{...(0,r.OI)(["updNewExpence","updEditExpence"]),addExpence(){if(this.message="",this.category=this.customCategory||this.category,!this.category)return this.message="Choose category, or create one";if(!this.value)return this.message="Put expence's value";const e={id:this.id,category:this.customCategory||this.category,date:this.date||this.getCurrentDate,value:this.value};"edit"===this.action&&this.updEditExpence([this.indx,e]),this.settings||this.updNewExpence(e),this.message=`Your added ${this.value} to ${e.category} category`}},computed:{...(0,r.Se)(["getCategoryArr"]),getCurrentDate(){const e=new Date,t=e.getDate(),a=e.getMonth()+1,s=e.getFullYear();return`${s}.${a}.${t}`}},mounted(){if(this.settings){const e=this.settings;this.category=e.customCategory||e.category,this.value=e.value,this.date=e.date,this.id=e.id}this.$route.query.push&&(console.log(this.$route),"null"!==this.$route.query.value&&(this.customCategory=this.$route.params.category,this.value=this.$route.query.value,this.addExpence()),this.$router.push({name:"home"}))}},c=i,n=a(1001),u=a(3453),l=a.n(u),d=a(680),h=a(3237),g=a(247),p=a(9090),m=a(314),v=(0,n.Z)(c,s,o,!1,null,"2506b3f5",null),y=v.exports;l()(v,{VBtn:d.Z,VCard:h.Z,VContainer:g.Z,VSelect:p.Z,VTextField:m.Z})}}]);
//# sourceMappingURL=78.31b63ed4.js.map