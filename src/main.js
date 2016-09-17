import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueH5 from 'vue-html5-editor';
import VueCookie from 'vue-cookie';
import 'cropit';
import App from './App'
import index from './view/index'
import login from './view/login'
import projectAdd from './view/project-add'
import projectDel from './view/project-del'
import projectNow from './view/project-now'
import showAdd from './view/show-add'
import activityAdd from './view/activity-add'
import eduAdd from './view/edu-add'
import '../node_modules/cropper/src/scss/cropper.scss'

window.formKit={};

formKit.verPrefix='/api/v1';

window.formKit.getFormData=()=>{
  return $('form').serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {})
};

window.formKit.post=(url,data,success,fail)=>{
  url=formKit.verPrefix+url;
  $.ajax({
    type:"POST",
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", VueCookie.get('token'));
    },
    url: url,
    data: data,
    done:()=>{
      return success?success:alert('已提交');
    }
  }).fail(fail?fail:alert('提交失败'));
};

window.formKit.get=(url,data,success,fail)=>{
  url=formKit.verPrefix+url;
  $.ajax({
    type:"GET",
    url: url,
    data: data,
    processData: false,
    done:()=>{
      return success;
    }
  }).fail(fail?fail:alert('服务器通讯失败'));
};

window.formKit.delete=(url,data,success,fail)=>{
  url=formKit.verPrefix+url;
  $.ajax({
    type:"DELETE",
    url: url,
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", VueCookie.get('token'));
    },
    data: data,
    processData: false,
    done:()=>{
      return success?success:alert('已删除');
    }
  }).fail(fail?fail:alert('服务器通讯失败'));
};


window.formKit.patch=(url,data,success,fail)=>{
  url=formKit.verPrefix+url;
  $.ajax({
    type:"PATCH",
    url: url,
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", VueCookie.get('token'));
    },
    data: data,
    processData: false,
    done:()=>{
      return success?success:alert('已成功');
    }
  }).fail(fail?fail:alert('服务器通讯失败'));
};

window.formKit.head=(url,data,success,fail)=>{
  url=formKit.verPrefix+url;
  $.ajax({
    type:"HEAD",
    url: url,
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", VueCookie.get('token'));
    },
    data: data,
    processData: false,
    done:()=>{
      return success?success:alert('已成功');
    }
  }).fail(fail?fail:alert('服务器通讯失败'));
};


Vue.use(VueCookie);

Vue.use(VueH5,{
  //global component name
  name: "editor",
  //config image module
  icons: {
    text: "custom-icon text",
    color: "custom-icon color",
    font: "custom-icon font",
    align: "custom-icon align",
    list: "custom-icon list",
    link: "custom-icon link",
    unlink: "custom-icon unlink",
    tabulation: "custom-icon table",
    image: "custom-icon image",
    "horizontal-rule": "custom-icon hr",
    eraser: "custom-icon eraser",
    hr: "custom-icon hr",
    undo: "custom-icon undo",
    "full-screen": "custom-icon full-screen",
    info: "custom-icon info ",
  },
  image: {
    //Url of the server-side,default null and convert image to base64
    server: '/image/editor',
    //the name for file field in multipart request
    fieldName: "image",
    //max file size
    sizeLimit: 692 * 966,
    // default true,if set to true,the image will resize by localResizeIMG (https://github.com/think2011/localResizeIMG)
    compress: true,
    //follows are options of localResizeIMG
    width: 1600,
    height: 1600,
    quality: 80,
    //handle response data，return image url
    uploadHandler(responseText){
      //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
      var json = JSON.parse(responseText);
      if (!json.ok) {
        alert(json.msg)
      } else {
        return json.data
      }
    }
  },
  //default en-us, en-us and zh-cn are built-in
  language: "zh-cn",
  i18n: {
    //specify your language here
    "zh-cn": {
      "align": "对齐方式",
      "image": "图片",
      "list": "列表",
      "link": "链接",
      "unlink": "去除链接",
      "table": "表格",
      "font": "文字",
      "full screen": "全屏",
      "text": "排版",
      "eraser": "格式清除",
      "info": "关于",
      "color": "颜色",
      "please enter a url": "请输入地址",
      "create link": "创建链接",
      "bold": "加粗",
      "italic": "倾斜",
      "underline": "下划线",
      "strike through": "删除线",
      "subscript": "上标",
      "superscript": "下标",
      "heading": "标题",
      "font name": "字体",
      "font size": "文字大小",
      "left justify": "左对齐",
      "center justify": "居中",
      "right justify": "右对齐",
      "ordered list": "有序列表",
      "unordered list": "无序列表",
      "fore color": "前景色",
      "background color": "背景色",
      "row count": "行数",
      "column count": "列数",
      "save": "确定",
      "upload": "上传",
      "progress": "进度",
      "unknown": "未知",
      "please wait": "请稍等",
      "error": "错误",
      "abort": "中断",
      "reset": "重置"
    }
  },
  hiddenModules: [],
  //keep only the modules you want and customize the order.
  //can be used with hiddenModules together
  visibleModules: [
    "text",
    "color",
    "font",
    "align",
    "list",
    "link",
    "unlink",
    "tabulation",
    "image",
    "hr",
    "eraser",
    "undo",
    "full-screen",
    "info",
  ],
  //extended modules
  modules: {
    //omit,reference to source code of build-in modules
  }
});


Vue.use(VueResource);
Vue.use(VueRouter);

var router=new VueRouter();


router.map({
  '/':{
    name:'index',
    component:index
  },
  '/login':{
    name:'login',
    component:login
  },
  '/project/add':{
    name:'project-add',
    component:projectAdd
  },
  '/project/del':{
    name:'project-del',
    component:projectDel
  },
  '/project/now':{
    name:'project-now',
    component:projectNow
  },
  '/show/add':{
    name:'show-add',
    component:showAdd
  },
  '/edu/add':{
    name:'edu-add',
    component:eduAdd
  },
  '/activity/add':{
    name: 'activity-add',
    component:activityAdd
  },
});

router.beforeEach(({to, next}) => {
  if(VueCookie.get('token')==undefined){
    to.router.go({name: 'login'});
  }
  next()
});


router.start(App,'app');
