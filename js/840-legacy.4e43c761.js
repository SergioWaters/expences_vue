"use strict";(self["webpackChunkexpences"]=self["webpackChunkexpences"]||[]).push([[840,78],{1840:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"max-width":"500px"}},[a("v-card",{staticClass:"text-left pa-8 cols-5"},[e.message?a("h3",[e._v(e._s(e.message))]):e._e(),a("v-text-field",{attrs:{type:"date",label:"Choose Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("v-text-field",{attrs:{label:"Put amount"},model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}}),a("v-select",{attrs:{label:"Choose Category",items:e.getCategoryArr},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),a("v-text-field",{attrs:{label:"Or create a custom category"},model:{value:e.customCategory,callback:function(t){e.customCategory=t},expression:"customCategory"}}),e.settings?e._e():a("v-btn",{attrs:{color:"teal",dark:""},on:{click:e.addExpence}},[e._v("Add expence")]),"edit"===e.action?a("v-btn",{attrs:{color:"teal",dark:""},on:{click:e.addExpence}},[e._v("Save changes")]):e._e()],1)],1)},o=[],r=a(4367),c=(a(9653),a(2222),a(629)),n={name:"ExpenceAdd",props:{action:String,settings:Object,indx:Number},data:function(){return{message:"",date:"",category:"",customCategory:"",id:null,value:null}},methods:(0,r.Z)((0,r.Z)({},(0,c.OI)(["updNewExpence","updEditExpence"])),{},{addExpence:function(){if(this.message="",this.category=this.customCategory||this.category,!this.category)return this.message="Choose category, or create one";if(!this.value)return this.message="Put expence's value";var e={id:this.id,category:this.customCategory||this.category,date:this.date||this.getCurrentDate,value:this.value};"edit"===this.action&&this.updEditExpence([this.indx,e]),this.settings||this.updNewExpence(e),this.message="Your added ".concat(this.value," to ").concat(e.category," category")}}),computed:(0,r.Z)((0,r.Z)({},(0,c.Se)(["getCategoryArr"])),{},{getCurrentDate:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,s=e.getFullYear();return"".concat(s,".").concat(a,".").concat(t)}}),mounted:function(){if(this.settings){var e=this.settings;this.category=e.customCategory||e.category,this.value=e.value,this.date=e.date,this.id=e.id}this.$route.query.push&&(console.log(this.$route),"null"!==this.$route.query.value&&(this.customCategory=this.$route.params.category,this.value=this.$route.query.value,this.addExpence()),this.$router.push({name:"home"}))}},i=n,u=a(1001),l=a(3453),d=a.n(l),h=a(680),g=a(3237),v=a(247),p=a(9090),m=a(314),y=(0,u.Z)(i,s,o,!1,null,"2506b3f5",null),x=y.exports;d()(y,{VBtn:h.Z,VCard:g.Z,VContainer:v.Z,VSelect:p.Z,VTextField:m.Z})}}]);
//# sourceMappingURL=840-legacy.4e43c761.js.map