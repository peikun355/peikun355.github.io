(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21785b"],{c6a3:function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-form",{attrs:{"label-width":"120px"}},[l("el-form-item",{attrs:{label:"信息描述"}},[l("el-tag",{attrs:{type:"info"}},[t._v("excel模版说明")]),l("el-tag",[l("i",{staticClass:"el-icon-download"}),l("a",{attrs:{href:t.OSS_PATH+"excel/02.xlsx"}},[t._v("点击下载模版")])])],1),l("el-form-item",{attrs:{label:"选择Excel"}},[l("el-upload",{ref:"upload",attrs:{"auto-upload":!1,"on-success":t.fileUploadSuccess,"on-error":t.fileUploadError,disabled:t.importBtnDisabled,limit:1,action:t.BASE_API+"eduservice/edu-subject/addSubject",name:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"}},[l("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),l("el-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.loading,size:"small",type:"success"},on:{click:t.submitUpload}},[t._v(t._s(t.fileUploadBtnText))])],1)],1)],1)],1)},a=[],i={name:"addSubject",data:function(){return{BASE_API:"http://localhost/",OSS_PATH:"https://edu-peikun.oss-cn-beijing.aliyuncs.com/",fileUploadBtnText:"上传到服务器",importBtnDisabled:!1,loading:!1}},methods:{submitUpload:function(){this.importBtnDisabled=!0,this.loading=!0,this.$refs.upload.submit()},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},fileUploadSuccess:function(){this.importBtnDisabled=!1,this.loading=!1,this.$message.success("添加成功"),this.$router.push("/subject/table")},fileUploadError:function(){this.$message.error("添加失败"),this.loading=!1,this.importBtnDisabled=!1}}},o=i,n=l("2877"),c=Object(n["a"])(o,s,a,!1,null,"6ca33747",null);e["default"]=c.exports}}]);